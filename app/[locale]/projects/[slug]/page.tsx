import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, type Locale } from "@/data/projects";
import { getTranslations } from "next-intl/server";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug, locale } = await params;
  const lang = locale as Locale;

  const t = await getTranslations("projects");

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-32">
      <Link href={`/${lang}/projects`} className="font-semibold text-blue-700">
        {t("back")}
      </Link>

      <section className="mt-8">
        <div className="relative mb-8 h-72 overflow-hidden rounded-3xl bg-blue-100">
          <Image
            src={project.image}
            alt={project.title[lang]}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <h1 className="mb-4 text-4xl font-bold">{project.title[lang]}</h1>

        <p className="mb-6 text-lg text-gray-600">
          {project.description[lang]}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="mb-4 text-2xl font-bold">{t("features")}</h2>

        <ul className="mb-8 list-disc space-y-2 pl-6 text-gray-700">
          {project.features[lang].map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4">
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white"
            >
              {t("demo")}
            </a>
          )}

          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-blue-700 px-6 py-3 font-semibold text-blue-700"
            >
              GitHub
            </a>
          )}
        </div>
      </section>
    </main>
  );
}