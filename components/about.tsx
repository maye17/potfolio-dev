import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-20">
      
      {/* TITLE */}
      <h2 className="mb-12 text-3xl font-bold md:text-4xl">
        {t("title")}
      </h2>

      {/* GRID */}
      <div className="grid gap-12 md:grid-cols-2 items-center">
        
        {/* TEXT */}
        <div className="space-y-6 text-lg leading-8 text-gray-100">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
          <p>{t("p4")}</p>
          <p>{t("p5")}</p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <Image
              src="/images/profile2.png" 
              alt="Foto Mayerlin"
              fill
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}