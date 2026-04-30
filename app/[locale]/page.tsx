import Hero from "@/components/hero";
import ProjectCard from "@/components/projectCard";
import Footer from "@/components/footer";
import { projects } from "@/data/projects";
import { FaWhatsapp } from "react-icons/fa";
import { getTranslations } from "next-intl/server";
import About from "@/components/about";
import Skills from "@/components/skills";


export default async function HomePage() {
  const tProjects = await getTranslations("projects");
  const tContact = await getTranslations("contact");

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <Hero />
      <About />

      <Skills />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-4 text-3xl font-bold">
          {tProjects("featuredTitle")}
        </h2>

        <p className="mb-10 max-w-2xl text-gray-100">
          {tProjects("featuredDescription")}
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="contacto" className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            {tContact("title")}
          </h2>

          <p className="mb-8">
            {tContact("description")}
          </p>

          <a
            href="https://wa.me/5491164620512?text=Hola%2C%20vi%20tu%20portfolio%20y%20quiero%20contactarte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-8 py-3 font-semibold text-white transition hover:bg-green-600"
          >
            <FaWhatsapp size={20} />
            {tContact("button")}
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}