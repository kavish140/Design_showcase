import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Bento } from "@/components/site/Bento";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SiteNova — Web Design & Automation Studio" },
      {
        name: "description",
        content:
          "SiteNova is a design + automation studio crafting high-converting, editorial-grade websites for ambitious brands.",
      },
      {
        name: "keywords",
        content: "Web Design, Automation, Studio, High-converting Websites, Editorial-grade Websites, SiteNova"
      },
      { name: "author", content: "SiteNova Studio" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://design.sitenova.dev" },
      { property: "og:title", content: "SiteNova — Web Design & Automation Studio" },
      {
        property: "og:description",
        content: "Stunning websites paired with smart automation. For brands who refuse to look like everyone else.",
      },
      { property: "og:image", content: "https://design.sitenova.dev/og-image.jpg" },
      { property: "og:site_name", content: "SiteNova" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: "https://design.sitenova.dev" },
      { name: "twitter:title", content: "SiteNova — Web Design & Automation Studio" },
      { name: "twitter:description", content: "Stunning websites paired with smart automation. For brands who refuse to look like everyone else." },
      { name: "twitter:image", content: "https://design.sitenova.dev/og-image.jpg" },
      { name: "theme-color", content: "#ffffff" },
    ],
    links: [
      { rel: "canonical", href: "https://design.sitenova.dev" }
    ]
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Bento />
      <Process />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
