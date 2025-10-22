import { ui, defaultLang, showDefaultLang } from "./ui";

export type Lang = string & keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  return lang in ui ? (lang as Lang) : defaultLang;
}

export function useTranslations<L extends Lang>(lang: L) {
  const langObj = ui[lang];
  const defaultObj = ui[defaultLang];

  return function t<K extends keyof typeof langObj>(
    key: K,
  ): (typeof langObj)[K] {
    return (langObj[key] ??
      defaultObj[key as keyof typeof defaultObj]) as (typeof langObj)[K];
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: Lang = lang): string {
    if (showDefaultLang || l !== defaultLang) {
      return `/${l}${path}`;
    }

    return path || "/";
  };
}
