import { useTranslatedPath, useTranslations, type Lang } from "@/i18n/utils";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavItems,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
  LanguageMenu,
} from "./ui/resizable-navbar";
import { Button } from "./ui/button";
import { SunMoon } from "lucide-react";

interface Props {
  navItems: {
    text: string;
    href: string;
  }[];
  lang: Lang;
}

const handleChangeTheme = () => {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  // eslint-disable-next-line no-undef
  document.documentElement.classList.toggle("dark");
  // eslint-disable-next-line no-undef
  const newTheme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";

  // eslint-disable-next-line no-undef
  localStorage.theme = newTheme;

  // eslint-disable-next-line no-undef
  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", "polite");
  announcement.className = "sr-only";
  announcement.textContent = `Theme changed to ${newTheme}`;
  // eslint-disable-next-line no-undef
  document.body.appendChild(announcement);
  // eslint-disable-next-line no-undef
  setTimeout(() => announcement.remove(), 1000);
};

export const CustomNavbar = ({ navItems, lang }: Props) => {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  return (
    <Navbar>
      <NavBody>
        <NavbarLogo lang={lang} />

        <NavItems items={navItems} lang={lang} />

        <div className="flex items-center space-x-3">
          <div className="hidden items-center space-x-3 md:flex">
            <LanguageMenu lang={lang} />

            <Button
              variant="secondary"
              size="icon"
              className="cursor-pointer"
              onClick={handleChangeTheme}
              aria-label="Change Theme"
            >
              <SunMoon />
            </Button>
          </div>

          <Button asChild>
            <a href={translatePath("/#contact")}>{t("nav").ctaButton}</a>
          </Button>
          <MobileNav>
            <MobileNavToggle />
            <MobileNavMenu>
              <MobileNavHeader
                title={t("nav").title}
                description={t("nav").description}
              />
              <MobileNavItems items={navItems} lang={lang} />

              <div className="flex flex-col items-center justify-center gap-4">
                <Button
                  variant="secondary"
                  size="icon"
                  className="cursor-pointer"
                  onClick={handleChangeTheme}
                >
                  <SunMoon />
                </Button>

                <LanguageMenu lang={lang} />
              </div>
            </MobileNavMenu>
          </MobileNav>
        </div>
      </NavBody>
    </Navbar>
  );
};
