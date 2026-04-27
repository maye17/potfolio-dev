"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("navbar");
  const pathname = usePathname();

  const isSpanish = locale === "es";
  const label = isSpanish ? "EN" : "ES";

  // 🔥 LIMPIA O AGREGA /en DINÁMICAMENTE
  const getSwitchPath = () => {
    if (isSpanish) {
      // agregar /en
      return `/en${pathname}`;
    } else {
      // quitar /en
      return pathname.replace(/^\/en/, "") || "/";
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link href={isSpanish ? "/" : "/en"} className="text-xl font-bold text-white">
          Mayerlin.dev
        </Link>

        {/* NAV */}
        <div className="flex items-center gap-6">
          
          <Link href={isSpanish ? "/" : "/en"} className="text-sm font-medium text-white">
            {t("home")}
          </Link>
          <Link
            href={isSpanish ? "/#sobre-mi" : "/en#sobre-mi"}
            className="text-sm font-medium text-white"
          >
            {t("about")}
          </Link>
            
          <Link
            href={isSpanish ? "/#habilidades" : "/en#habilidades"}
            className="text-sm font-medium text-white"
          >
            {t("skills")}
          </Link>

          <Link
            href={isSpanish ? "/projects" : "/en/projects"}
            className="text-sm font-medium text-white"
          >
            {t("projects")}
          </Link>

          <Link
            href={isSpanish ? "/#contacto" : "/en#contacto"}
            className="text-sm font-medium text-white"
          >
            {t("contact")}
          </Link>
          <Link
            href={getSwitchPath()}
            className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            {label}
          </Link>
        </div>
      </nav>
    </header>
  );
}