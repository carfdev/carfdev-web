import { projectUi } from "./project-ui";
import { defaultLang } from "./ui";

export type Lang = string & keyof typeof projectUi;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  return lang in projectUi ? (lang as Lang) : defaultLang;
}

export function useTranslations<L extends Lang>(lang: L) {
  const langObj = projectUi[lang];
  const defaultObj = projectUi[defaultLang];

  return function t<K extends keyof typeof langObj>(
    key: K,
  ): (typeof langObj)[K] {
    return (langObj[key] ??
      defaultObj[key as keyof typeof defaultObj]) as (typeof langObj)[K];
  };
}
