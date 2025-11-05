import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { projectUi } from "@/i18n/project-ui";
import { useTranslations, useTranslatedPath } from "@/i18n/project-ui";
import { Fragment } from "react/jsx-runtime";

interface Props {
  lang: string;
  projectId: keyof (typeof projectUi)["en"];
}

const path = ["", "/#work"];

export function CustomBreadcrumb({ lang, projectId }: Props) {
  const translatePath = useTranslatedPath(lang);
  const t = useTranslations(lang);

  const breadcrumb = t(projectId).breadcrumb;
  const projectName = t(projectId).name;
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumb.map((item, index) => (
          <Fragment key={`breadcrumb-${index}`}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href={translatePath(path[index])}>{item}</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{projectName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
