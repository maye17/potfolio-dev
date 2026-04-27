import ProjectCard from "@/components/projectCard";
import { projects } from "@/data/projects";
import { getTranslations } from "next-intl/server";

export default async function ProjectsPage() {
  const t = await getTranslations("projects");

  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-32">
      <h1 className="mb-4 text-4xl font-bold">{t("title")}</h1>

      <p className="mb-10 text-gray-600">{t("description")}</p>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}