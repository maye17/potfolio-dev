import { useTranslations } from "next-intl";
import Image from "next/image";
import IntroVideo from "./introVideo";

export default function About() {
  const t = useTranslations("about");

  return (
  <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-20">
    <h2 className="mb-12 text-3xl font-bold md:text-4xl">
      {t("title")}
    </h2>
    
    <div className="grid gap-12 md:grid-cols-2 items-center">
      <div className="space-y-6 text-lg leading-8 text-gray-100">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
        <p>{t("p4")}</p>
        <p>{t("p5")}</p>
      </div>
    
      <div className="flex justify-center md:justify-end">
        <IntroVideo />
      </div>
    </div>
  </section>
  );
}