"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("navbar");
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const isSpanish = locale === "es";
  const label = isSpanish ? "EN" : "ES";

  const homeHref = isSpanish ? "/" : "/en";
  const projectsHref = isSpanish ? "/projects" : "/en/projects";
  const contactHref = isSpanish ? "/#contacto" : "/en#contacto";
  const aboutHref = isSpanish ? "/#sobre-mi" : "/en#sobre-mi";
  const skillsHref = isSpanish ? "/#habilidades" : "/en#habilidades";

  const switchHref = isSpanish
    ? `/en${pathname === "/" ? "" : pathname}`
    : pathname.replace(/^\/en/, "") || "/";

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={homeHref} className="text-xl font-bold text-white">
          Mayerlin.dev
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href={homeHref} className="text-sm font-medium text-white">
            {t("home")}
          </Link>

          <Link href={aboutHref} className="text-sm font-medium text-white">
            {t("about")}
          </Link>

          <Link href={skillsHref} className="text-sm font-medium text-white">
            {t("skills")}
          </Link>

          <Link href={projectsHref} className="text-sm font-medium text-white">
            {t("projects")}
          </Link>

          <Link href={contactHref} className="text-sm font-medium text-white">
            {t("contact")}
          </Link>

          <Link
            href={switchHref}
            className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            {label}
          </Link>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-white md:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <Link
              href={homeHref}
              onClick={closeMenu}
              className="text-sm font-medium text-white"
            >
              {t("home")}
            </Link>

            <Link
              href={aboutHref}
              onClick={closeMenu}
              className="text-sm font-medium text-white"
            >
              {t("about")}
            </Link>

            <Link
              href={skillsHref}
              onClick={closeMenu}
              className="text-sm font-medium text-white"
            >
              {t("skills")}
            </Link>

            <Link
              href={projectsHref}
              onClick={closeMenu}
              className="text-sm font-medium text-white"
            >
              {t("projects")}
            </Link>

            <Link
              href={contactHref}
              onClick={closeMenu}
              className="text-sm font-medium text-white"
            >
              {t("contact")}
            </Link>

            <Link
              href={switchHref}
              onClick={closeMenu}
              className="w-fit rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              {label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}