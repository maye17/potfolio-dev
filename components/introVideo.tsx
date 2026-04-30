"use client";

import { useLocale, useTranslations } from "next-intl";

export default function IntroVideo() {
  const locale = useLocale();
  const t = useTranslations("video");

  const videoSrc =
    locale === "es"
      ? "/videos/portfolio-es.mp4"
      : "/videos/portfolio-en.mp4";

  const posterSrc = "/videos/video-cover.png";

  return (
    <div className="w-full max-w-md rounded-3xl bg-gray-100 p-6 shadow-xl">
      <h2 className="mb-4 text-3xl font-bold text-[#1e3a5f]">
        {t("title")}
      </h2>

      <p className="mb-6 text-gray-600">
        {t("description")}
      </p>

      <video
        key={videoSrc}
        controls
        preload="metadata"
        poster={posterSrc}
        className="aspect-video w-full rounded-2xl object-cover shadow-lg"
      >
        <source src={videoSrc} type="video/mp4" />
        {locale === "es"
          ? "Tu navegador no soporta la reproducción de video."
          : "Your browser does not support video playback."}
      </video>
    </div>
  );
}