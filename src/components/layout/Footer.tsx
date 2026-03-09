import { profile } from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";

const socialIcons = [
  { key: "github", icon: Github, href: profile.socials.github },
  { key: "linkedin", icon: Linkedin, href: profile.socials.linkedin },
  { key: "email", icon: Mail, href: profile.socials.email ? `mailto:${profile.socials.email}` : undefined },
].filter((s) => s.href);

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-text-secondary">
              Built with{" "}
              <span className="text-accent-gold">Next.js</span>,{" "}
              <span className="text-accent-blue">Three.js</span> &{" "}
              <span className="text-accent-ember">Framer Motion</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialIcons.map(({ key, icon: Icon, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-all duration-300"
                aria-label={key}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-text-secondary/50">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
