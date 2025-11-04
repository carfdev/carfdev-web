import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { projectUi } from "@/i18n/project-ui";
import { useTranslations } from "@/i18n/project-utils";
import { useTranslatedPath, type Lang } from "@/i18n/utils";

interface Props {
  lang: Lang;
  projectId: keyof (typeof projectUi)["en"];
}

const path = ["", "/project"];

export function CustomBreadcrumb({ lang, projectId }: Props) {
  const translatePath = useTranslatedPath(lang);
  const t = useTranslations(lang);

  const breadcrumb = t(projectId).breadcrumb;
  const projectName = t(projectId).name;
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumb.map((item, index) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href={translatePath(path[index])}>{item}</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{projectName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
