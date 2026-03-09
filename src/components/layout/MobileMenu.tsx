"use client";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: string;
}

export function MobileMenu({ isOpen, onClose, activeId }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-0 top-16 z-40 md:hidden"
        >
          <div className="bg-bg-primary/95 backdrop-blur-xl border-b border-white/[0.06] shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm transition-all duration-200",
                      isActive
                        ? "text-accent-gold bg-accent-gold/10"
                        : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
