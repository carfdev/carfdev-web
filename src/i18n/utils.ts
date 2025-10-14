import { ui, defaultLang, showDefaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

type Ui = typeof ui;
type Lang = keyof Ui;

export function useTranslations<L extends Lang>(lang: L) {
  return function t<K extends keyof Ui[L]>(key: K): Ui[L][K] {
    const langObj = ui[lang] as unknown as Ui[L];
    const defaultObj = ui[defaultLang] as unknown as Ui[L];
    return langObj[key] ?? defaultObj[key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
