import { useTranslations, type Lang } from "@/i18n/utils";
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
import { Moon } from "lucide-react";

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
  localStorage.theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
};

export const CustomNavbar = ({ navItems, lang }: Props) => {
  const t = useTranslations(lang);
  return (
    <Navbar>
      <NavBody>
        <NavbarLogo lang={lang} />

        <NavItems items={navItems} />

        <div className="flex items-center space-x-3">
          <div className="hidden items-center space-x-3 md:flex">
            <LanguageMenu lang={lang} />

            <Button
              variant="secondary"
              size="icon"
              className="cursor-pointer"
              onClick={handleChangeTheme}
            >
              <Moon className="size-4" />
            </Button>
          </div>

          <Button asChild>
            <a href="#contact">{t("nav").ctaButton}</a>
          </Button>
          <MobileNav>
            <MobileNavToggle />
            <MobileNavMenu>
              <MobileNavHeader
                title={t("nav").title}
                description={t("nav").description}
              />
              <MobileNavItems items={navItems} />

              <div className="flex flex-col items-center justify-center gap-4">
                <Button
                  variant="secondary"
                  size="icon"
                  className="cursor-pointer"
                  onClick={handleChangeTheme}
                >
                  <Moon className="size-4" />
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
