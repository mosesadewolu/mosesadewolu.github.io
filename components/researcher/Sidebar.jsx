import React from "react";
import { Mail} from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

// { icon: GitHub, href: "https://github.com/MosesTheRedSea", label: "GitHub" },
/*
  { icon: Linkedin, href: "https://linkedin.com/in/moses-adewolu", label: "LinkedIn" },
  { icon: Phone, href: "tel:3016821486", label: "Phone" },
*/

const SOCIAL_LINKS = [
  { icon: Mail, href: "mailto:mosesoluwatobiadewolu@gmail.com", label: "Email" },
];

export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between px-8 py-10 lg:px-10 lg:py-14">
      <div>
        {/* Identity */}
        <div className="mb-8">
          <div className="mb-4">
            <img
              src="/moses_adewolu.jpg"
              alt="Moses Adewolu"
              className="w-36 h-36 object-cover border border-border"
            />
          </div>
          <h1 className="text-3xl lg:text-4xl font-semibold leading-tight mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
            Moses<br />Adewolu
          </h1>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider leading-relaxed mb-1">
            B.S. Computer Science
          </p>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider leading-relaxed">
            Georgia Institute of Technology
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Navigation */}
        <nav>
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-4 h-px bg-border group-hover:bg-primary group-hover:w-6 transition-all duration-300" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom: Social & Contact */}
      <div className="mt-10 lg:mt-0">
        <div className="flex items-center gap-4 mb-5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
          Atlanta, GA<br />
          mosesoluwatobiadewolu@gmail.com
        </p>
      </div>
    </aside>
  );
}