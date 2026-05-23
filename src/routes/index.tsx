import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Bento } from "@/components/site/Bento";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Site Nova — Web Design & Automation Studio" },
      {
        name: "description",
        content:
          "Site Nova is a design + automation studio crafting high-converting, editorial-grade websites for ambitious brands.",
      },
      { property: "og:title", content: "Site Nova — Web Design & Automation Studio" },
      {
        property: "og:description",
        content: "Stunning websites paired with smart automation. For brands who refuse to look like everyone else.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Bento />
      <Process />
      <Testimonials />
      <Footer />
    </main>
  );
}
