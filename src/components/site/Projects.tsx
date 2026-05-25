import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "ecommerce",
    name: "Shopwave",
    desc: "A high-performance modern e-commerce platform built for scale.",
    url: "https://ecommerce.sitenova.dev",
    tags: ["E-commerce", "Stripe", "Dashboard"],
  },
  {
    id: "aismartkit",
    name: "AI Smart Kit",
    desc: "A powerful toolkit for AI-driven workflows and automation.",
    url: "https://aismartkit.tech",
    tags: ["AI", "SaaS", "Tools"],
  },
  {
    id: "design",
    name: "SiteNova Showcase",
    desc: "Our very own premium design portfolio.",
    url: "https://design.sitenova.dev",
    tags: ["Portfolio", "Motion", "Showcase"],
  },
];

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-36 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-display text-4xl md:text-6xl mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Live previews of our latest projects. Interact with them, or visit the live sites to experience the full polished product.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Info Side */}
              <div className={`md:w-1/3 flex flex-col gap-6 ${i % 2 !== 0 ? 'md:order-2 md:pl-12' : 'md:pr-12'}`}>
                <div>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl mb-3">{project.name}</h3>
                  <p className="text-muted-foreground">{project.desc}</p>
                </div>
                
                <div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                  >
                    View Live Project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Iframe Preview Side */}
              <div className={`md:w-2/3 w-full ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                <a href={project.url} target="_blank" rel="noreferrer" className="block w-full">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden glass border border-border/50 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(var(--accent-value),0.3)]">
                    
                    {/* Fake Browser Bar */}
                    <div className="absolute top-0 left-0 w-full h-8 bg-background/80 backdrop-blur-md border-b border-white/5 z-10 flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                    </div>

                    {/* Live Iframe Wrapper */}
                    <div className="absolute top-8 left-0 right-0 bottom-0 overflow-hidden bg-background">
                      <iframe
                        src={project.url}
                        title={project.name}
                        className="absolute top-0 left-0 border-0 pointer-events-none origin-top-left"
                        style={{ width: "200%", height: "200%", transform: "scale(0.5)" }}
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300 pointer-events-none z-20" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
