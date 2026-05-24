import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const phrase = "Let's build something beautiful";
  return (
    <footer id="contact" className="relative pt-24 pb-10 bg-foreground text-background overflow-hidden">
      <div className="relative">
        <div className="marquee whitespace-nowrap py-12 border-y border-white/10">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display text-6xl md:text-8xl px-8 flex items-center gap-8">
              {phrase}
              <span className="inline-block h-3 w-3 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-16 flex flex-col md:flex-row gap-10 md:items-end justify-between">
        <div>
          <div className="font-display text-2xl mb-2">SiteNova</div>
          <p className="text-sm text-white/60 max-w-xs">
            A design + automation studio for ambitious brands. Remote, worldwide.
          </p>
        </div>
        <a
          href="mailto:hello@sitenova.studio"
          className="group inline-flex items-center gap-2 text-2xl md:text-3xl font-display"
        >
          hello@sitenova.studio
          <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
        <div className="flex gap-6 text-sm text-white/60">
          <a className="hover:text-background transition-colors" href="#">Instagram</a>
          <a className="hover:text-background transition-colors" href="#">Dribbble</a>
          <a className="hover:text-background transition-colors" href="#">LinkedIn</a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-16 pt-6 border-t border-white/10 flex justify-between text-xs text-white/40">
        <span>© {new Date().getFullYear()} SiteNova Studio</span>
        <span>Crafted with care.</span>
      </div>
    </footer>
  );
}
