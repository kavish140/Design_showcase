import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Layout, Workflow, Search, Sparkles, Code2, LineChart } from "lucide-react";
import { ReactNode, MouseEvent } from "react";

type Item = {
  title: string;
  desc: string;
  icon: ReactNode;
  className: string;
  visual?: ReactNode;
};

const items: Item[] = [
  {
    title: "Web Design",
    desc: "Editorial-grade sites that feel handmade and convert like crazy.",
    icon: <Layout className="h-5 w-5" />,
    className: "md:col-span-2 md:row-span-2",
    visual: (
      <div className="relative h-40 mt-6 rounded-2xl bg-gradient-to-br from-muted to-cream overflow-hidden">
        <div className="ambient-blob -top-10 -left-10 h-40 w-40" style={{ background: "color-mix(in oklab, var(--accent) 40%, transparent)" }} />
        <div className="absolute inset-4 rounded-xl border border-border bg-background/60 backdrop-blur-sm grid grid-cols-3 gap-2 p-3">
          <div className="col-span-2 rounded-md bg-foreground/5" />
          <div className="rounded-md bg-accent/20" />
          <div className="col-span-3 h-3 rounded-full bg-foreground/10" />
          <div className="col-span-2 h-3 rounded-full bg-foreground/10" />
        </div>
      </div>
    ),
  },
  {
    title: "Custom Automation",
    desc: "Workflows that save your team 20+ hours a week.",
    icon: <Workflow className="h-5 w-5" />,
    className: "md:col-span-1",
  },
  {
    title: "SEO Optimization",
    desc: "Page speeds, schema and content engineered to rank.",
    icon: <Search className="h-5 w-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Premium UI/UX",
    desc: "Interfaces with the polish of a flagship product.",
    icon: <Sparkles className="h-5 w-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Engineering",
    desc: "Modern stacks. Production-grade. Zero jank.",
    icon: <Code2 className="h-5 w-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Analytics & CRO",
    desc: "Measure what matters, then push conversion higher.",
    icon: <LineChart className="h-5 w-5" />,
    className: "md:col-span-2",
  },
];

export function Bento() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm text-muted-foreground mb-4">/ Capabilities</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            Everything your brand needs to <em className="not-italic accent-gradient-text underline-center">stand out</em> online.
          </h2>
        </motion.div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[minmax(180px,auto)] gap-4 group/grid"
          onMouseMove={handleMouseMove}
        >
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.3), ease: [0.2, 0.8, 0.2, 1] }}
              className={`tilt-card glow-border group relative rounded-3xl border border-border bg-card p-6 md:p-8 overflow-hidden ${it.className}`}
            >
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/grid:opacity-100"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      400px circle at ${mouseX}px ${mouseY}px,
                      color-mix(in oklab, var(--accent) 15%, transparent),
                      transparent 80%
                    )
                  `,
                }}
              />
              <div className="relative z-10 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-foreground/[0.04] text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
                  {it.icon}
                </span>
                <h3 className="font-display text-2xl">{it.title}</h3>
              </div>
              <p className="relative z-10 mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm">{it.desc}</p>
              <div className="relative z-10">
                {it.visual}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
