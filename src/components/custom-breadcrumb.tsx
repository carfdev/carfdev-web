import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslatedPath } from "@/i18n/project-ui";

interface Props {
  lang: string;
  page: string;
}

const home = (lang: string): string => {
  switch (lang) {
    case "es":
      return "Inicio";
    case "sv":
      return "Hem";
    default:
      return "Home";
  }
};

export function CustomBreadcrumb({ lang, page }: Props) {
  const translatePath = useTranslatedPath(lang);

  return (
    <Breadcrumb className="mb-12">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <a href={translatePath("")}>{home(lang)}</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
