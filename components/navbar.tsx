"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("navbar");

  const isSpanish = locale === "es";
  const label = isSpanish ? "EN" : "ES";

  const homeHref = isSpanish ? "/" : "/en";
  const projectsHref = isSpanish ? "/projects" : "/en/projects";
  const contactHref = isSpanish ? "/#contacto" : "/en#contacto";
  const nextLocaleHref = isSpanish ? "/en" : "/";

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link href={homeHref} className="text-xl font-bold text-white">
          Mayerlin.dev
        </Link>

        {/* NAV */}
        <div className="flex items-center gap-6">
          
          <Link href={homeHref} className="text-sm font-medium text-white">
            {t("home")}
          </Link>

          <Link
            href={projectsHref}
            className="text-sm font-medium text-white"
          >
            {t("projects")}
          </Link>

          <Link
            href={contactHref}
            className="text-sm font-medium text-white"
          >
            {t("contact")}
          </Link>

          {/* SWITCH IDIOMA */}
          <Link
            href={nextLocaleHref}
            className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            {label}
          </Link>
        </div>
      </nav>
    </header>
  );
}