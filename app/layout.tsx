import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayerlin.dev | Portfolio",
  description: "Portfolio profesional de proyectos web",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}