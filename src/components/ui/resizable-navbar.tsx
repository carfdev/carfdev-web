import { useTranslatedPath, useTranslations, type Lang } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, Languages, Menu, XIcon } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import React, { useMemo, useRef, useState } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { Button } from "./button";

// ============================================================================
// Types & Interfaces
// ============================================================================

interface NavItem {
  text: string;
  href: string;
}

interface Language {
  code: string;
  label: string;
  flag: string;
}

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: NavItem[];
  lang: Lang;
}

interface MobileNavHeaderProps {
  title: string;
  description: string;
}

interface NavbarLogoProps {
  lang: Lang;
}

interface LanguageMenuProps {
  lang: Lang;
  currentUrl: string;
}

type SheetSide = "top" | "right" | "bottom" | "left";

// ============================================================================
// Constants
// ============================================================================

const LANGUAGES: Language[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "sv", label: "Svenska", flag: "🇸🇪" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

const SCROLL_THRESHOLD = 30;

const NAV_BODY_ANIMATION = {
  visible: {
    backdropFilter: "blur(10px)",
    boxShadow:
      "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
    width: "96%",
    y: 10,
  },
  hidden: {
    backdropFilter: "none",
    boxShadow: "none",
    width: "100%",
    y: 0,
  },
};

const NAV_BODY_TRANSITION = {
  type: "spring" as const,
  stiffness: 200,
  damping: 50,
};

// ============================================================================
// Main Navbar Components
// ============================================================================

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > SCROLL_THRESHOLD);
  });

  return (
    <motion.header
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.header>
  );
};

export const NavBody = ({
  children,
  className,
  visible = false,
}: NavBodyProps) => {
  return (
    <motion.nav
      animate={visible ? NAV_BODY_ANIMATION.visible : NAV_BODY_ANIMATION.hidden}
      transition={NAV_BODY_TRANSITION}
      className={cn(
        "relative z-[60] mx-auto flex w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 dark:bg-transparent",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
      aria-label="Main navigation"
    >
      {children}
    </motion.nav>
  );
};

export const NavItems = ({ items, lang }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const translatePath = useTranslatedPath(lang);

  return (
    <motion.ul
      onMouseLeave={() => setHovered(null)}
      className="hidden flex-1 items-center justify-center space-x-2 text-sm font-normal text-zinc-600 transition duration-200 hover:text-zinc-800 md:flex"
    >
      {items.map((item, idx) => (
        <li key={`link-${idx}`}>
          <a
            onMouseEnter={() => setHovered(idx)}
            className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
            href={translatePath(item.href)}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              />
            )}
            <span className="relative z-20">{item.text}</span>
          </a>
        </li>
      ))}
    </motion.ul>
  );
};

export const NavbarLogo = ({ lang }: NavbarLogoProps) => {
  const translatePath = useTranslatedPath(lang);
  const t = useTranslations(lang);

  const href = useMemo(() => translatePath("/#main-content"), [translatePath]);
  const ariaLabel = useMemo(() => t("nav").logoLabel, [t]);

  return (
    <a href={href} aria-label={ariaLabel}>
      <svg
        className="w-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 594 180"
        fill="currentColor"
      >
        <title>Carfdev</title>
        <path d="M90.117.003a89.404 90 0 0 0-20.114 2.142l51.545 52.401a47.682 48 0 0 1 3.388 3.444v.003l6.188 6.29L160 34.781A89.404 90 0 0 0 90.117.003m-32.77 5.98C23.112 19.222.38 52.164.005 89.08c-.504 49.624 38.99 90.294 88.285 90.913 6.89.086 13.769-.63 20.497-2.135l-51.752-52.614-6.084-6.263c-4.4-4.551-9.316-16.77-9.227-29.472.268-26.466 21.768-47.719 48.06-47.507q1.56.012 3.117.127zM129.58 115.85a47.682 48 0 0 1-40.77 22.146 47.682 48 0 0 1-2.925-.128l35.561 36.153a89.404 90 0 0 0 38.203-28.347z" />
        <path d="M219.618 139.712V125.06q-4.168.375-9.02 1.064-4.853.626-7.365 1.503-3.083 1.064-4.739 3.13-1.598 2.004-1.598 5.323 0 2.192.342 3.57.343 1.377 1.713 2.63 1.313 1.252 3.14 1.878 1.827.563 5.71.563 3.082 0 6.222-1.377 3.197-1.378 5.595-3.632m0 10.895q-1.655 1.378-4.11 3.32-2.455 1.94-4.625 3.067-3.026 1.503-6.28 2.192-3.254.751-7.136.751-9.135 0-15.301-6.199T176 137.896q0-7.702 3.14-12.586t8.906-7.702q5.71-2.818 14.16-4.007 8.449-1.19 17.526-1.754v-.375q0-5.824-4.339-8.015-4.339-2.255-12.788-2.255-5.081 0-10.848 2.004-5.766 1.941-8.278 3.006h-1.884v-16.97q3.254-.939 10.562-2.191 7.365-1.315 14.73-1.315 17.527 0 25.291 5.949Q240 97.57 240 110.219v47.84h-20.382zM300 109.217h-1.887q-1.356-.5-4.364-.751-3.007-.25-5.012-.25-4.54 0-8.02.626t-7.488 2.129v47.088H252v-70.32h21.229v10.333q7.017-6.387 12.206-8.454 5.19-2.129 9.553-2.129 1.12 0 2.535.063 1.416.062 2.477.188zm64-32.06h-1.642q-1.46-.438-3.832-1.002-2.31-.563-4.987-.563-6.447 0-8.758 2.38-2.25 2.379-2.25 9.204v.564h16.908v15.278H343.26v55.04h-21.895v-55.04H312V87.74h9.366v-1.941q0-12.9 6.63-19.35Q334.685 60 348.186 60q4.866 0 8.819.376 3.953.313 6.994.877zm72 80.902h-20.887v-7.326q-5.396 4.759-10.096 7.013T394.167 160q-11.894 0-19.03-9.894T368 123.432q0-8.955 2.379-15.843 2.437-6.95 6.614-11.897 3.946-4.696 9.574-7.264 5.628-2.63 11.256-2.63 5.86 0 9.573 1.378 3.771 1.315 7.717 3.381v-29.93H436Zm-20.887-19.411v-34.503q-2.205-1.001-4.642-1.44-2.437-.438-4.468-.438-8.238 0-12.358 5.573-4.12 5.51-4.12 15.341 0 10.332 3.308 15.028 3.307 4.634 10.618 4.634 2.843 0 6.034-1.127 3.19-1.19 5.628-3.068M516 127.063h-47.165q.458 8.266 5.724 12.649 5.323 4.383 15.626 4.383 6.525 0 12.65-2.567t9.673-5.51h2.29v18.096q-6.983 3.068-13.165 4.446t-13.68 1.377q-19.347 0-29.65-9.517Q448 140.902 448 123.306q0-17.407 9.73-27.551 9.789-10.207 26.789-10.207 15.683 0 23.582 8.704Q516 102.893 516 119.174Zm-20.492-13.212q-.171-7.076-3.205-10.645t-9.444-3.569q-5.953 0-9.788 3.381-3.835 3.382-4.293 10.833zM594 87.74l-25.21 70.319h-23.755L520 87.739h22.183l15.137 48.341 14.963-48.34z" />
      </svg>
    </a>
  );
};

// ============================================================================
// Mobile Navigation Components
// ============================================================================

export const MobileNav = (
  props: React.ComponentProps<typeof SheetPrimitive.Root>,
) => {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
};

export const MobileNavHeader = ({
  title,
  description,
}: MobileNavHeaderProps) => {
  return (
    <SheetHeader className="sr-only">
      <SheetTitle>{title}</SheetTitle>
      <SheetDescription>{description}</SheetDescription>
    </SheetHeader>
  );
};

const getSheetSideStyles = (side: SheetSide) => {
  const styles = {
    right:
      "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
    left: "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
    top: "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
    bottom:
      "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
  };
  return styles[side];
};

export const MobileNavMenu = ({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: SheetSide;
}) => {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          getSheetSideStyles(side),
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
};

export const MobileNavItems = ({ items, lang }: NavItemsProps) => {
  const translatePath = useTranslatedPath(lang);
  return (
    <nav className="mt-40 flex flex-col items-center justify-center gap-6">
      <ul>
        {items.map((item) => (
          <li key={item.href} className="py-2 text-center">
            <Button variant="ghost" asChild>
              <a href={translatePath(item.href)}>{item.text}</a>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const MobileNavToggle = () => {
  return (
    <SheetTrigger asChild className="md:hidden">
      <Button variant="secondary" size="icon" aria-label="Open menu">
        <Menu className="size-5" />
      </Button>
    </SheetTrigger>
  );
};

// ============================================================================
// Language Menu Component
// ============================================================================

export const LanguageMenu = ({ lang, currentUrl }: LanguageMenuProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex cursor-pointer gap-2">
            <Languages className="size-4" />
            <span className="uppercase">{lang}</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2">
              {LANGUAGES.map(({ code, label, flag }) => (
                <li key={code}>
                  <NavigationMenuLink asChild>
                    <a
                      href={
                        code === "en" ? currentUrl : `/${code}${currentUrl}`
                      }
                      className="flex flex-row items-center gap-2"
                    >
                      <span>{flag}</span> {label}
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

// ============================================================================
// Navigation Menu Primitives
// ============================================================================

interface NavigationMenuProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> {
  viewport?: boolean;
}

const NavigationMenu = React.forwardRef<HTMLDivElement, NavigationMenuProps>(
  ({ className, children, viewport = true, ...props }, ref) => {
    return (
      <NavigationMenuPrimitive.Root asChild {...props}>
        <div
          ref={ref}
          data-slot="navigation-menu"
          data-viewport={viewport}
          className={cn(
            "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
            className,
          )}
        >
          {children}
          {viewport && <NavigationMenuViewport />}
        </div>
      </NavigationMenuPrimitive.Root>
    );
  },
);
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuList = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    data-slot="navigation-menu-list"
    className={cn(
      "group flex flex-1 list-none items-center justify-center gap-1",
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = "NavigationMenuList";

const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<typeof NavigationMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    data-slot="navigation-menu-item"
    className={cn("relative", className)}
    {...props}
  />
));
NavigationMenuItem.displayName = "NavigationMenuItem";

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1",
);

const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    data-slot="navigation-menu-trigger"
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDownIcon
      className="font- relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

const NavigationMenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    data-slot="navigation-menu-content"
    className={cn(
      "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
      "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = "NavigationMenuContent";

const NavigationMenuViewport = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className={cn("absolute top-full left-0 isolate z-50 flex justify-center")}
  >
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      data-slot="navigation-menu-viewport"
      className={cn(
        "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = "NavigationMenuViewport";

const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof NavigationMenuPrimitive.Link>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Link
    ref={ref}
    data-slot="navigation-menu-link"
    className={cn(
      "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    {...props}
  />
));
NavigationMenuLink.displayName = "NavigationMenuLink";

// ============================================================================
// Sheet Primitives
// ============================================================================

const SheetPortal = (
  props: React.ComponentProps<typeof SheetPrimitive.Portal>,
) => <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
SheetPortal.displayName = "SheetPortal";

const SheetOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    data-slot="sheet-overlay"
    className={cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
      className,
    )}
    {...props}
  />
));
SheetOverlay.displayName = "SheetOverlay";

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof SheetPrimitive.Trigger>
>((props, ref) => (
  <SheetPrimitive.Trigger ref={ref} data-slot="sheet-trigger" {...props} />
));
SheetTrigger.displayName = "SheetTrigger";

const SheetHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="sheet-header"
    className={cn("flex flex-col gap-1.5 p-4", className)}
    {...props}
  />
));
SheetHeader.displayName = "SheetHeader";

const SheetTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    data-slot="sheet-title"
    className={cn("text-foreground font-bold", className)}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    data-slot="sheet-description"
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
));
SheetDescription.displayName = "SheetDescription";
