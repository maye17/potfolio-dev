"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("navbar");

  const nextLocale = locale === "es" ? "en" : "es";
  const label = locale === "es" ? "EN" : "ES";

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="text-xl font-bold text-white">
          Mayerlin.dev
        </Link>

        <div className="flex items-center gap-6">
          <Link href={`/${locale}`} className="text-sm font-medium text-white">
            {t("home")}
          </Link>

          <Link
            href={`/${locale}/projects`}
            className="text-sm font-medium text-white"
          >
            {t("projects")}
          </Link>

          <a href="#contacto" className="text-sm font-medium text-white">
            {t("contact")}
          </a>

          <Link
            href={`/${nextLocale}`}
            className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:bg-white hover:text-black transition"
          >
            {label}
          </Link>
        </div>
      </nav>
    </header>
  );
}