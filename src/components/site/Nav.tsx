import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full glass px-6 py-2 flex items-center justify-between shadow-[0_8px_30px_rgba(15,15,25,0.06)] w-[min(1180px,92%)]"
    >
      <a href="#" className="flex items-center gap-2">
        <span className="inline-block h-6 w-6 rounded-md bg-accent" />
        <span className="font-display text-xl">SiteNova</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#services" className="hover:text-foreground transition-colors">Services</a>
        <a href="#process" className="hover:text-foreground transition-colors">Process</a>
        <a href="#work" className="hover:text-foreground transition-colors">Work</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </nav>
      <div className="flex items-center gap-2">
        <a 
          href="https://sitenova.dev"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to SiteNova
        </a>
        <a
          href="#contact"
          className="liquid-btn group inline-flex items-center gap-1.5 rounded-full bg-foreground text-background text-sm font-medium px-4 py-2 transition-colors"
        >
          Get in Touch
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.header>
  );
}
