import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const quotes = [
  {
    quote: "SiteNova rebuilt our entire web presence and conversions jumped 64% in the first month. The craftsmanship is unreal.",
    name: "Amelia Rourke",
    role: "Founder, Northwell Studio",
  },
  {
    quote: "We replaced three SaaS tools with their automations. Quiet, elegant, and absurdly effective.",
    name: "Marcus Lee",
    role: "COO, Veriform",
  },
  {
    quote: "The most polished agency we've ever worked with. They sweat details no one else even sees.",
    name: "Sienna Park",
    role: "CMO, Linea Goods",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const q = quotes[i];

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="work" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl text-balance"
        >
          Beautiful design meets <em className="not-italic accent-gradient-text">flawless execution.</em>
        </motion.h2>

        <div className="mt-20 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="font-display text-3xl md:text-4xl leading-snug text-balance"
            >
              "{q.quote}"
            </motion.blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-accent-glow" />
              <div>
                <div className="font-medium">{q.name}</div>
                <div className="text-sm text-muted-foreground">{q.role}</div>
              </div>
              <div className="ml-auto flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
            </div>

            <div className="mt-10 flex gap-2">
              <button
                onClick={() => setI((i - 1 + quotes.length) % quotes.length)}
                className="grid h-11 w-11 place-items-center rounded-full border border-border hover:bg-foreground hover:text-background transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setI((i + 1) % quotes.length)}
                className="grid h-11 w-11 place-items-center rounded-full border border-border hover:bg-foreground hover:text-background transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {[
              { k: "+64%", v: "Avg conversion lift" },
              { k: "120+", v: "Sites shipped" },
              { k: "20h", v: "Saved weekly via automation" },
              { k: "98", v: "Lighthouse, every launch" },
            ].map((m) => (
              <div key={m.k} className="rounded-2xl border border-border p-6 bg-card">
                <div className="font-display text-3xl">{m.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
