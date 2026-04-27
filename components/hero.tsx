"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const skills: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "Spring Boot",
  "MariaDB",
  "Docker",
  "GitHub",
];

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations("hero");

  return (
    <section className="flex min-h-screen items-center pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold text-blue-700">
            {t("role")}
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            {t("title")}
          </h1>

          <p className="mb-8 text-lg text-gray-600">
            {t("description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/projects`}
              className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white"
            >
              {t("projects")}
            </Link>

            <a
              href="https://wa.me/5491164620512?text=Hola%2C%20vi%20tu%20portfolio%20y%20quiero%20contactarte"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-blue-700 px-6 py-3 font-semibold text-blue-700"
            >
              {t("contact")}
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-blue-700 p-8 shadow">
          <h2 className="mb-4 text-2xl font-bold text-white">
            {t("stack")}
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-white px-4 py-2 text-sm text-gray-800 shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}