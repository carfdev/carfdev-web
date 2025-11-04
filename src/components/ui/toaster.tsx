import React from "react";
import ReactDOM from "react-dom";
import { toast, ToastState } from "@/lib/toaster";
import "@/styles/toaster.css";
import type {
  SwipeDirection,
  HeightT,
  ToasterProps,
  ToastProps,
  ToastT,
  ToastToDismiss,
  ToastIcons,
  ToastClassnames,
  Position,
  Action,
} from "@/types/toaster.interface";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const VISIBLE_TOASTS_AMOUNT = 3;
const VIEWPORT_OFFSET = "24px";
const MOBILE_VIEWPORT_OFFSET = "16px";
const TOAST_LIFETIME = 4000;
const TOAST_WIDTH = 356;
const GAP = 14;
const SWIPE_THRESHOLD = 45;
const TIME_BEFORE_UNMOUNT = 200;

const getDefaultSwipeDirections = (position: string): Array<SwipeDirection> => {
  const [y, x] = position.split("-");
  const directions: Array<SwipeDirection> = [];

  if (y) {
    directions.push(y as SwipeDirection);
  }

  if (x) {
    directions.push(x as SwipeDirection);
  }

  return directions;
};

const Toast = (props: ToastProps) => {
  const {
    invert: ToasterInvert,
    toast,
    unstyled,
    interacting,
    setHeights,
    visibleToasts,
    heights,
    index,
    toasts,
    expanded,
    removeToast,
    defaultRichColors,
    style,
    cancelButtonStyle,
    actionButtonStyle,
    className = "",
    descriptionClassName = "",
    duration: durationFromToaster,
    position,
    gap = GAP,
    expandByDefault,
    classNames,
    icons,
  } = props;
  const [swipeDirection, setSwipeDirection] = React.useState<"x" | "y" | null>(
    null,
  );
  const [swipeOutDirection, setSwipeOutDirection] = React.useState<
    "left" | "right" | "up" | "down" | null
  >(null);
  const [mounted, setMounted] = React.useState(false);
  const [removed, setRemoved] = React.useState(false);
  const [swiping, setSwiping] = React.useState(false);
  const [swipeOut, setSwipeOut] = React.useState(false);
  const [isSwiped, setIsSwiped] = React.useState(false);
  const [offsetBeforeRemove, setOffsetBeforeRemove] = React.useState(0);
  const [initialHeight, setInitialHeight] = React.useState(0);
  const remainingTime = React.useRef(
    toast.duration || durationFromToaster || TOAST_LIFETIME,
  );
  const dragStartTime = React.useRef<Date | null>(null);
  const toastRef = React.useRef<HTMLLIElement>(null);
  const isFront = index === 0;
  const isVisible = index + 1 <= visibleToasts;
  const toastType = toast.type ?? "default";
  const dismissible = toast.dismissible !== false;
  const toastClassname = toast.className || "";
  const toastDescriptionClassname = toast.descriptionClassName || "";
  // Height index is used to calculate the offset as it gets updated before the toast array, which means we can calculate the new layout faster.
  const heightIndex = React.useMemo(
    () => heights.findIndex((height) => height.toastId === toast.id) || 0,
    [heights, toast.id],
  );
  const duration = React.useMemo(
    () => toast.duration || durationFromToaster || TOAST_LIFETIME,
    [toast.duration, durationFromToaster],
  );
  const closeTimerStartTimeRef = React.useRef(0);
  const offset = React.useRef(0);
  const lastCloseTimerStartTimeRef = React.useRef(0);
  const pointerStartRef = React.useRef<{ x: number; y: number } | null>(null);
  const [y, x] = position.split("-");
  const toastsHeightBefore = React.useMemo(() => {
    return heights.reduce((prev, curr, reducerIndex) => {
      // Calculate offset up until current toast
      if (reducerIndex >= heightIndex) {
        return prev;
      }

      return prev + curr.height;
    }, 0);
  }, [heights, heightIndex]);
  const isDocumentHidden = useIsDocumentHidden();

  const invert = toast.invert || ToasterInvert;
  const disabled = toastType === "loading";

  offset.current = React.useMemo(
    () => heightIndex * gap + toastsHeightBefore,
    [heightIndex, toastsHeightBefore],
  );

  React.useEffect(() => {
    remainingTime.current = duration;
  }, [duration]);

  React.useEffect(() => {
    // Trigger enter animation without using CSS animation
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const toastNode = toastRef.current;
    if (toastNode) {
      const height = toastNode.getBoundingClientRect().height;
      // Add toast height to heights array after the toast is mounted
      setInitialHeight(height);
      setHeights((h) => [
        {
          toastId: toast.id,
          height,
          position: toast.position ?? "bottom-right",
        },
        ...h,
      ]);
      return () =>
        setHeights((h) => h.filter((height) => height.toastId !== toast.id));
    }
  }, [setHeights, toast.id]);

  React.useLayoutEffect(() => {
    // Keep height up to date with the content in case it updates
    if (!mounted) return;
    const toastNode = toastRef.current;
    if (!toastNode) return;
    const originalHeight = toastNode.style.height;
    toastNode.style.height = "auto";
    const newHeight = toastNode.getBoundingClientRect().height;
    toastNode.style.height = originalHeight;

    setInitialHeight(newHeight);

    setHeights((heights) => {
      const alreadyExists = heights.find(
        (height) => height.toastId === toast.id,
      );
      if (!alreadyExists) {
        return [
          {
            toastId: toast.id,
            height: newHeight,
            position: toast.position ?? "bottom-right",
          },
          ...heights,
        ];
      } else {
        return heights.map((height) =>
          height.toastId === toast.id
            ? { ...height, height: newHeight }
            : height,
        );
      }
    });
  }, [
    mounted,
    toast.title,
    toast.description,
    setHeights,
    toast.id,
    toast.jsx,
    toast.action,
    toast.cancel,
  ]);

  const deleteToast = React.useCallback(() => {
    // Save the offset for the exit swipe animation
    setRemoved(true);
    setOffsetBeforeRemove(offset.current);
    setHeights((h) => h.filter((height) => height.toastId !== toast.id));

    // eslint-disable-next-line no-undef
    setTimeout(() => {
      removeToast(toast);
    }, TIME_BEFORE_UNMOUNT);
  }, [toast, removeToast, setHeights, offset]);

  React.useEffect(() => {
    if (
      (toast.promise && toastType === "loading") ||
      toast.duration === Infinity ||
      toast.type === "loading"
    )
      return;
    // eslint-disable-next-line no-undef
    let timeoutId: NodeJS.Timeout;

    // Pause the timer on each hover
    const pauseTimer = () => {
      if (lastCloseTimerStartTimeRef.current < closeTimerStartTimeRef.current) {
        // Get the elapsed time since the timer started
        const elapsedTime =
          new Date().getTime() - closeTimerStartTimeRef.current;

        remainingTime.current = remainingTime.current - elapsedTime;
      }

      lastCloseTimerStartTimeRef.current = new Date().getTime();
    };

    const startTimer = () => {
      // setTimeout(, Infinity) behaves as if the delay is 0.
      // As a result, the toast would be closed immediately, giving the appearance that it was never rendered.
      // See: https://github.com/denysdovhan/wtfjs?tab=readme-ov-file#an-infinite-timeout
      if (remainingTime.current === Infinity) return;

      closeTimerStartTimeRef.current = new Date().getTime();

      // Let the toast know it has started
      // eslint-disable-next-line no-undef
      timeoutId = setTimeout(() => {
        toast.onAutoClose?.(toast);
        deleteToast();
      }, remainingTime.current);
    };

    if (expanded || interacting || isDocumentHidden) {
      pauseTimer();
    } else {
      startTimer();
    }

    // eslint-disable-next-line no-undef
    return () => clearTimeout(timeoutId);
  }, [expanded, interacting, toast, toastType, isDocumentHidden, deleteToast]);

  React.useEffect(() => {
    if (toast.delete) {
      deleteToast();
      toast.onDismiss?.(toast);
    }
  }, [deleteToast, toast.delete]);

  function getLoadingIcon() {
    if (icons?.loading) {
      return (
        <div
          className={cn(
            classNames?.loader,
            toast?.classNames?.loader,
            "sonner-loader",
          )}
          data-visible={toastType === "loading"}
        >
          {icons.loading}
        </div>
      );
    }

    return (
      <Loader
        className={cn(classNames?.loader, toast?.classNames?.loader)}
        visible={toastType === "loading"}
      />
    );
  }

  const icon = toast.icon ||
    (toastType && icons && toastType in icons
      ? icons[toastType as keyof ToastIcons]
      : undefined) || <CircleCheck className="size-4" />;

  return (
    <li
      ref={toastRef}
      className={cn(
        className,
        toastClassname,
        classNames?.toast,
        toast?.classNames?.toast,
        classNames?.default,
        classNames?.[toastType as keyof ToastClassnames],
        toast?.classNames?.[toastType as keyof ToastClassnames],
      )}
      data-sonner-toast=""
      data-rich-colors={toast.richColors ?? defaultRichColors}
      data-styled={!(toast.jsx || toast.unstyled || unstyled)}
      data-mounted={mounted}
      data-promise={Boolean(toast.promise)}
      data-swiped={isSwiped}
      data-removed={removed}
      data-visible={isVisible}
      data-y-position={y}
      data-x-position={x}
      data-index={index}
      data-front={isFront}
      data-swiping={swiping}
      data-dismissible={dismissible}
      data-type={toastType}
      data-invert={invert}
      data-swipe-out={swipeOut}
      data-swipe-direction={swipeOutDirection}
      data-expanded={Boolean(expanded || (expandByDefault && mounted))}
      data-testid={toast.testId}
      style={
        {
          "--index": index,
          "--toasts-before": index,
          "--z-index": toasts.length - index,
          "--offset": `${removed ? offsetBeforeRemove : offset.current}px`,
          "--initial-height": expandByDefault ? "auto" : `${initialHeight}px`,
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
          ...style,
          ...toast.style,
        } as React.CSSProperties
      }
      onDragEnd={() => {
        setSwiping(false);
        setSwipeDirection(null);
        pointerStartRef.current = null;
      }}
      onPointerDown={(event) => {
        if (event.button === 2) return; // Return early on right click
        if (disabled || !dismissible) return;
        dragStartTime.current = new Date();
        setOffsetBeforeRemove(offset.current);
        // Ensure we maintain correct pointer capture even when going outside of the toast (e.g. when swiping)
        (event.target as HTMLElement).setPointerCapture(event.pointerId);
        if ((event.target as HTMLElement).tagName === "BUTTON") return;
        setSwiping(true);
        pointerStartRef.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerUp={() => {
        if (swipeOut || !dismissible) return;

        pointerStartRef.current = null;
        const swipeAmountX = Number(
          toastRef.current?.style
            .getPropertyValue("--swipe-amount-x")
            .replace("px", "") || 0,
        );
        const swipeAmountY = Number(
          toastRef.current?.style
            .getPropertyValue("--swipe-amount-y")
            .replace("px", "") || 0,
        );
        const timeTaken = dragStartTime.current
          ? new Date().getTime() - dragStartTime.current.getTime()
          : 0;

        const swipeAmount =
          swipeDirection === "x" ? swipeAmountX : swipeAmountY;
        const velocity = Math.abs(swipeAmount) / timeTaken;

        if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > 0.11) {
          setOffsetBeforeRemove(offset.current);

          toast.onDismiss?.(toast);

          if (swipeDirection === "x") {
            setSwipeOutDirection(swipeAmountX > 0 ? "right" : "left");
          } else {
            setSwipeOutDirection(swipeAmountY > 0 ? "down" : "up");
          }

          deleteToast();
          setSwipeOut(true);

          return;
        } else {
          toastRef.current?.style.setProperty("--swipe-amount-x", `0px`);
          toastRef.current?.style.setProperty("--swipe-amount-y", `0px`);
        }
        setIsSwiped(false);
        setSwiping(false);
        setSwipeDirection(null);
      }}
      onPointerMove={(event) => {
        if (!pointerStartRef.current || !dismissible) return;

        // eslint-disable-next-line no-undef
        const selection = window.getSelection?.();
        const isHighlighted = selection
          ? selection.toString().length > 0
          : false;
        if (isHighlighted) return;

        const yDelta = event.clientY - pointerStartRef.current.y;
        const xDelta = event.clientX - pointerStartRef.current.x;

        const swipeDirections =
          props.swipeDirections ?? getDefaultSwipeDirections(position);

        // Determine swipe direction if not already locked
        if (!swipeDirection && (Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1)) {
          setSwipeDirection(Math.abs(xDelta) > Math.abs(yDelta) ? "x" : "y");
        }

        let swipeAmount = { x: 0, y: 0 };

        const getDampening = (delta: number) => {
          const factor = Math.abs(delta) / 20;

          return 1 / (1.5 + factor);
        };

        // Only apply swipe in the locked direction
        if (swipeDirection === "y") {
          // Handle vertical swipes
          if (
            swipeDirections.includes("top") ||
            swipeDirections.includes("bottom")
          ) {
            if (
              (swipeDirections.includes("top") && yDelta < 0) ||
              (swipeDirections.includes("bottom") && yDelta > 0)
            ) {
              swipeAmount.y = yDelta;
            } else {
              // Smoothly transition to dampened movement
              const dampenedDelta = yDelta * getDampening(yDelta);
              // Ensure we don't jump when transitioning to dampened movement
              swipeAmount.y =
                Math.abs(dampenedDelta) < Math.abs(yDelta)
                  ? dampenedDelta
                  : yDelta;
            }
          }
        } else if (swipeDirection === "x") {
          // Handle horizontal swipes
          if (
            swipeDirections.includes("left") ||
            swipeDirections.includes("right")
          ) {
            if (
              (swipeDirections.includes("left") && xDelta < 0) ||
              (swipeDirections.includes("right") && xDelta > 0)
            ) {
              swipeAmount.x = xDelta;
            } else {
              // Smoothly transition to dampened movement
              const dampenedDelta = xDelta * getDampening(xDelta);
              // Ensure we don't jump when transitioning to dampened movement
              swipeAmount.x =
                Math.abs(dampenedDelta) < Math.abs(xDelta)
                  ? dampenedDelta
                  : xDelta;
            }
          }
        }

        if (Math.abs(swipeAmount.x) > 0 || Math.abs(swipeAmount.y) > 0) {
          setIsSwiped(true);
        }

        // Apply transform using both x and y values
        toastRef.current?.style.setProperty(
          "--swipe-amount-x",
          `${swipeAmount.x}px`,
        );
        toastRef.current?.style.setProperty(
          "--swipe-amount-y",
          `${swipeAmount.y}px`,
        );
      }}
    >
      {(toastType || toast.icon || toast.promise) &&
      toast.icon !== null &&
      (icons?.[toastType as keyof ToastIcons] !== null || toast.icon) ? (
        <div
          data-icon=""
          className={cn(classNames?.icon, toast?.classNames?.icon)}
        >
          {toast.promise || (toast.type === "loading" && !toast.icon)
            ? toast.icon || getLoadingIcon()
            : null}
          {toast.type !== "loading" ? icon : null}
        </div>
      ) : null}

      <div
        data-content=""
        className={cn(classNames?.content, toast?.classNames?.content)}
      >
        <div
          data-title=""
          className={cn(classNames?.title, toast?.classNames?.title)}
        >
          {toast.jsx
            ? toast.jsx
            : typeof toast.title === "function"
              ? toast.title()
              : toast.title}
        </div>
        {toast.description ? (
          <div
            data-description=""
            className={cn(
              descriptionClassName,
              toastDescriptionClassname,
              classNames?.description,
              toast?.classNames?.description,
            )}
          >
            {typeof toast.description === "function"
              ? toast.description()
              : toast.description}
          </div>
        ) : null}
      </div>
      {React.isValidElement(toast.cancel) ? (
        toast.cancel
      ) : toast.cancel && isAction(toast.cancel) ? (
        <button
          data-button
          data-cancel
          style={toast.cancelButtonStyle || cancelButtonStyle}
          onClick={(event) => {
            // We need to check twice because typescript
            if (!isAction(toast.cancel)) return;
            if (!dismissible) return;
            toast.cancel.onClick?.(event);
            deleteToast();
          }}
          className={cn(
            classNames?.cancelButton,
            toast?.classNames?.cancelButton,
          )}
        >
          {toast.cancel.label}
        </button>
      ) : null}
      {React.isValidElement(toast.action) ? (
        toast.action
      ) : toast.action && isAction(toast.action) ? (
        <button
          data-button
          data-action
          style={toast.actionButtonStyle || actionButtonStyle}
          onClick={(event) => {
            // We need to check twice because typescript
            if (!isAction(toast.action)) return;
            toast.action.onClick?.(event);
            if (event.defaultPrevented) return;
            deleteToast();
          }}
          className={cn(
            classNames?.actionButton,
            toast?.classNames?.actionButton,
          )}
        >
          {toast.action.label}
        </button>
      ) : null}
    </li>
  );
};

const getDocumentDirection = (): ToasterProps["dir"] => {
  if (typeof window === "undefined") return "ltr";
  if (typeof document === "undefined") return "ltr"; // For Fresh purpose

  // eslint-disable-next-line no-undef
  const dirAttribute = document.documentElement.getAttribute("dir");

  if (dirAttribute === "auto" || !dirAttribute) {
    // eslint-disable-next-line no-undef
    return window.getComputedStyle(document.documentElement)
      .direction as ToasterProps["dir"];
  }

  return dirAttribute as ToasterProps["dir"];
};

const assignOffset = (
  defaultOffset: ToasterProps["offset"],
  mobileOffset: ToasterProps["mobileOffset"],
) => {
  const styles = {} as React.CSSProperties;

  [defaultOffset, mobileOffset].forEach((offset, index) => {
    const isMobile = index === 1;
    const prefix = isMobile ? "--mobile-offset" : "--offset";
    const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;

    function assignAll(offset: string | number) {
      ["top", "right", "bottom", "left"].forEach((key) => {
        (styles as any)[`${prefix}-${key}`] =
          typeof offset === "number" ? `${offset}px` : offset;
      });
    }

    if (typeof offset === "number" || typeof offset === "string") {
      assignAll(offset);
    } else if (typeof offset === "object") {
      (["top", "right", "bottom", "left"] as const).forEach((key) => {
        if (offset[key] === undefined) {
          (styles as any)[`${prefix}-${key}`] = defaultValue;
        } else {
          (styles as any)[`${prefix}-${key}`] =
            typeof offset[key] === "number" ? `${offset[key]}px` : offset[key];
        }
      });
    } else {
      assignAll(defaultValue);
    }
  });

  return styles;
};

const Toaster = React.forwardRef<HTMLElement, ToasterProps>(
  function Toaster(props, ref) {
    const {
      id,
      invert,
      position = "top-center",
      hotkey = ["altKey", "KeyT"],
      expand,
      closeButton,
      className = "toaster group",
      offset,
      mobileOffset,
      theme = "light",
      richColors = true,
      duration,
      style,
      visibleToasts = VISIBLE_TOASTS_AMOUNT,
      toastOptions,
      dir = getDocumentDirection(),
      gap = GAP,
      icons,
      containerAriaLabel = "Notifications",
    } = props;
    const [toasts, setToasts] = React.useState<ToastT[]>([]);
    const toastsCounterRef = React.useRef(0);
    const filteredToasts = React.useMemo(() => {
      if (id) {
        return toasts.filter((toast) => toast.toasterId === id);
      }
      return toasts.filter((toast) => !toast.toasterId);
    }, [toasts, id]);
    const possiblePositions = React.useMemo(() => {
      return Array.from(
        new Set(
          [position, ...filteredToasts.map((toast) => toast.position)].filter(
            (p): p is Position => p !== undefined,
          ),
        ),
      );
    }, [filteredToasts, position]);
    const [heights, setHeights] = React.useState<HeightT[]>([]);
    const [expanded, setExpanded] = React.useState(false);
    const [interacting, setInteracting] = React.useState(false);
    const [actualTheme, setActualTheme] = React.useState(
      theme !== "system"
        ? theme
        : typeof window !== "undefined"
          ? // eslint-disable-next-line no-undef
            window.matchMedia &&
            // eslint-disable-next-line no-undef
            window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : "light",
    );

    const listRef = React.useRef<HTMLOListElement>(null);
    const hotkeyLabel = hotkey
      .join("+")
      .replace(/Key/g, "")
      .replace(/Digit/g, "");
    const lastFocusedElementRef = React.useRef<HTMLElement>(null);
    const isFocusWithinRef = React.useRef(false);

    const removeToast = React.useCallback((toastToRemove: ToastT) => {
      setToasts((toasts) => {
        if (!toasts.find((toast) => toast.id === toastToRemove.id)?.delete) {
          ToastState.dismiss(toastToRemove.id);
        }

        return toasts.filter(({ id }) => id !== toastToRemove.id);
      });
    }, []);

    React.useEffect(() => {
      return ToastState.subscribe((toast) => {
        if ((toast as ToastToDismiss).dismiss) {
          // Prevent batching of other state updates
          // eslint-disable-next-line no-undef
          requestAnimationFrame(() => {
            setToasts((toasts) =>
              toasts.map((t) =>
                t.id === toast.id ? { ...t, delete: true } : t,
              ),
            );
          });
          return;
        }

        // Prevent batching, temp solution.
        // eslint-disable-next-line no-undef
        setTimeout(() => {
          ReactDOM.flushSync(() => {
            setToasts((toasts) => {
              const validToast: ToastT = {
                ...toast,
                id:
                  typeof toast.id === "number" ||
                  (typeof toast.id === "string" && toast.id.length > 0)
                    ? toast.id
                    : toastsCounterRef.current++,
              } as ToastT;

              const indexOfExistingToast = toasts.findIndex(
                (t) => t.id === validToast.id,
              );

              if (indexOfExistingToast !== -1) {
                return [
                  ...toasts.slice(0, indexOfExistingToast),
                  { ...toasts[indexOfExistingToast], ...validToast },
                  ...toasts.slice(indexOfExistingToast + 1),
                ];
              }

              return [validToast, ...toasts];
            });
          });
        });
      });
    }, [toasts]);

    React.useEffect(() => {
      if (theme !== "system") {
        setActualTheme(theme);
        return;
      }

      if (theme === "system") {
        // check if current preference is dark
        if (
          // eslint-disable-next-line no-undef
          window.matchMedia &&
          // eslint-disable-next-line no-undef
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          // it's currently dark
          setActualTheme("dark");
        } else {
          // it's not dark
          setActualTheme("light");
        }
      }

      if (typeof window === "undefined") return;
      // eslint-disable-next-line no-undef
      const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      try {
        // Chrome & Firefox
        darkMediaQuery.addEventListener("change", ({ matches }) => {
          if (matches) {
            setActualTheme("dark");
          } else {
            setActualTheme("light");
          }
        });
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.error(error);
        // Safari < 14
        darkMediaQuery.addListener(({ matches }) => {
          try {
            if (matches) {
              setActualTheme("dark");
            } else {
              setActualTheme("light");
            }
          } catch (e) {
            // eslint-disable-next-line no-undef
            console.error(e);
          }
        });
      }
    }, [theme]);

    React.useEffect(() => {
      // Ensure expanded is always false when no toasts are present / only one left
      if (toasts.length <= 1) {
        setExpanded(false);
      }
    }, [toasts]);

    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        const isHotkeyPressed = hotkey.every(
          (key) => (event as any)[key] || event.code === key,
        );

        if (isHotkeyPressed) {
          setExpanded(true);
          listRef.current?.focus();
        }

        if (
          event.code === "Escape" &&
          // eslint-disable-next-line no-undef
          (document.activeElement === listRef.current ||
            // eslint-disable-next-line no-undef
            listRef.current?.contains(document.activeElement))
        ) {
          setExpanded(false);
        }
      };
      // eslint-disable-next-line no-undef
      document.addEventListener("keydown", handleKeyDown);

      // eslint-disable-next-line no-undef
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [hotkey]);

    React.useEffect(() => {
      if (listRef.current) {
        return () => {
          if (lastFocusedElementRef.current) {
            lastFocusedElementRef.current.focus({ preventScroll: true });
            lastFocusedElementRef.current = null;
            isFocusWithinRef.current = false;
          }
        };
      }
    }, [listRef.current]);

    return (
      // Remove item from normal navigation flow, only available via hotkey
      <section
        ref={ref}
        aria-label={`${containerAriaLabel} ${hotkeyLabel}`}
        aria-live="polite"
        aria-relevant="additions text"
        aria-atomic="false"
        suppressHydrationWarning
      >
        {possiblePositions.map((position, index) => {
          const [y, x] = position.split("-");

          if (!filteredToasts.length) return null;

          return (
            <ol
              key={position}
              dir={dir === "auto" ? getDocumentDirection() : dir}
              ref={listRef}
              className={className}
              data-sonner-toaster
              data-sonner-theme={actualTheme}
              data-y-position={y}
              data-x-position={x}
              style={
                {
                  "--front-toast-height": `${heights[0]?.height || 0}px`,
                  "--width": `${TOAST_WIDTH}px`,
                  "--gap": `${gap}px`,
                  ...style,
                  ...assignOffset(offset, mobileOffset),
                } as React.CSSProperties
              }
              onBlur={(event) => {
                if (
                  isFocusWithinRef.current &&
                  !event.currentTarget.contains(event.relatedTarget)
                ) {
                  isFocusWithinRef.current = false;
                  if (lastFocusedElementRef.current) {
                    lastFocusedElementRef.current.focus({
                      preventScroll: true,
                    });
                    lastFocusedElementRef.current = null;
                  }
                }
              }}
              onFocus={(event) => {
                const isNotDismissible =
                  event.target instanceof HTMLElement &&
                  event.target.dataset.dismissible === "false";

                if (isNotDismissible) return;

                if (!isFocusWithinRef.current) {
                  isFocusWithinRef.current = true;
                  lastFocusedElementRef.current =
                    event.relatedTarget as HTMLElement;
                }
              }}
              onMouseEnter={() => setExpanded(true)}
              onMouseMove={() => setExpanded(true)}
              onMouseLeave={() => {
                // Avoid setting expanded to false when interacting with a toast, e.g. swiping
                if (!interacting) {
                  setExpanded(false);
                }
              }}
              onDragEnd={() => setExpanded(false)}
              onPointerDown={(event) => {
                const isNotDismissible =
                  event.target instanceof HTMLElement &&
                  event.target.dataset.dismissible === "false";

                if (isNotDismissible) return;
                setInteracting(true);
              }}
              onPointerUp={() => setInteracting(false)}
            >
              {filteredToasts
                .filter(
                  (toast) =>
                    (!toast.position && index === 0) ||
                    toast.position === position,
                )
                .map((toast, index) => (
                  <Toast
                    key={toast.id}
                    icons={icons}
                    index={index}
                    toast={toast}
                    defaultRichColors={richColors}
                    duration={toastOptions?.duration ?? duration}
                    className={toastOptions?.className}
                    descriptionClassName={toastOptions?.descriptionClassName}
                    invert={invert ?? false}
                    visibleToasts={visibleToasts}
                    closeButton={
                      toastOptions?.closeButton ?? closeButton ?? false
                    }
                    interacting={interacting}
                    position={position}
                    style={toastOptions?.style}
                    unstyled={toastOptions?.unstyled}
                    classNames={toastOptions?.classNames}
                    cancelButtonStyle={toastOptions?.cancelButtonStyle}
                    actionButtonStyle={toastOptions?.actionButtonStyle}
                    closeButtonAriaLabel={toastOptions?.closeButtonAriaLabel}
                    removeToast={removeToast}
                    toasts={filteredToasts.filter(
                      (t) => t.position == toast.position,
                    )}
                    heights={heights.filter(
                      (h) => h.position == toast.position,
                    )}
                    setHeights={setHeights}
                    expandByDefault={expand ?? false}
                    gap={gap}
                    expanded={expanded}
                    swipeDirections={props.swipeDirections}
                  />
                ))}
            </ol>
          );
        })}
      </section>
    );
  },
);

const useIsDocumentHidden = () => {
  const [isDocumentHidden, setIsDocumentHidden] = React.useState(
    // eslint-disable-next-line no-undef
    document.hidden,
  );

  React.useEffect(() => {
    const callback = () => {
      // eslint-disable-next-line no-undef
      setIsDocumentHidden(document.hidden);
    };
    // eslint-disable-next-line no-undef
    document.addEventListener("visibilitychange", callback);
    // eslint-disable-next-line no-undef
    return () => window.removeEventListener("visibilitychange", callback);
  }, []);

  return isDocumentHidden;
};

const Loader = ({
  visible,
  className,
}: {
  visible: boolean;
  className?: string;
}) => {
  return (
    <div
      className={["sonner-loading-wrapper", className]
        .filter(Boolean)
        .join(" ")}
      data-visible={visible}
    >
      <div className="sonner-spinner">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div className="sonner-loading-bar" key={`spinner-bar-${i}`} />
          ))}
      </div>
    </div>
  );
};

const isAction = (action: Action | React.ReactNode): action is Action => {
  return (action as Action).label !== undefined;
};

export { Toaster, toast };
