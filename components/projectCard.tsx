"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import type { Project, Locale } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("projects");

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title[locale]}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">
          {project.title[locale]}
        </h3>

        <p className="mb-4 text-gray-100">
          {project.description[locale]}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/${locale}/projects/${project.slug}`}
          className="font-semibold text-blue-700"
        >
          {t("detail")}
        </Link>
      </div>
    </article>
  );
}