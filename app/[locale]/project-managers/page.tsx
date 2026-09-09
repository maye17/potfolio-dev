import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ProjectManagement from "@/components/ProjectManagement";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Project Manager / Product Owner — Mayerlin Becerra",
    description:
      "Product Owner y Project Manager con 12+ años en IT y 8+ liderando productos digitales. Especializada en gestión de producto, metodologías ágiles y HealthTech (EHR, DICOM).",
  };
}

export default function ProjectManagersPage() {
  return (
    <main className="pt-16">
      <ProjectManagement />
    </main>
  );
}