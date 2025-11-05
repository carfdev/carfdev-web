type UIObject = Record<string, any>;

export function createI18nUtils<T extends UIObject>(
  uiObject: T,
  config?: { defaultLang?: string; showDefaultLang?: boolean },
) {
  type Lang = string & keyof T;

  const defaultLang = config?.defaultLang ?? "en";
  const showDefaultLang = config?.showDefaultLang ?? false;

  function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split("/");
    return lang in uiObject ? (lang as Lang) : defaultLang;
  }

  function getUrlWithoutLang(url: URL): string {
    const segments = url.pathname.split("/");
    const [, maybeLang, ...rest] = segments;

    const isLangInUi = typeof maybeLang === "string" && maybeLang in uiObject;
    const shouldStrip =
      isLangInUi && (maybeLang !== defaultLang || showDefaultLang);

    const pathnameWithoutLang = shouldStrip
      ? `/${rest.join("/")}`
      : url.pathname || "/";
    const normalizedPath =
      pathnameWithoutLang === "" ? "/" : pathnameWithoutLang;

    return `${normalizedPath}${url.search || ""}${url.hash || ""}`;
  }

  function useTranslations<L extends Lang>(lang: L) {
    const langObj = uiObject[lang];
    const defaultObj = uiObject[defaultLang];

    return function t<K extends keyof typeof langObj>(
      key: K,
    ): (typeof langObj)[K] {
      return (langObj[key] ??
        defaultObj[key as keyof typeof defaultObj]) as (typeof langObj)[K];
    };
  }

  function useTranslatedPath(lang: Lang) {
    return function translatePath(path: string, l: Lang = lang): string {
      if (showDefaultLang || l !== defaultLang) {
        return `/${l}${path}`;
      }
      return path || "/";
    };
  }

  return {
    getLangFromUrl,
    getUrlWithoutLang,
    useTranslations,
    useTranslatedPath,
  };
}
