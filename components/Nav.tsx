"use client";

import Link from "next/link";
import { CalendarCheck, KeyRound, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { IconButton, PremiumButton, SegmentedControl } from "./PremiumButton";

const navItems = [
  ["/acheter", "Acheter"],
  ["/louer", "Louer"],
  ["/quartiers", "Quartiers"],
  ["/guides", "Guides"],
  ["/agence", "Agence"],
  ["/contact", "Contact"]
] as const;

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-night/72 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-saffron text-night">
            <KeyRound size={20} />
          </span>
          <span>
            <span className="block text-sm font-bold tracking-wide">Atlas Keys</span>
            <span className="block text-[11px] text-white/62">Marrakech Real Estate</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-white/78 lg:flex">
          {navItems.map(([href, label]) => (
            <Link
              key={href}
              className={`${pathname === href ? "text-white" : "text-white/72"} border-b border-transparent pb-1 transition hover:border-saffron hover:text-white`}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <SegmentedControl items={["FR", "EN", "AR"]} active={0} tone="light" />
          </div>
          <div className="hidden sm:block">
            <PremiumButton href="/contact" variant="glass" icon={CalendarCheck} compact>
              RDV
            </PremiumButton>
          </div>
          <IconButton icon={Menu} label="Menu" variant="glass" className="lg:hidden" />
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-2 lg:hidden">
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {navItems.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`shrink-0 px-3 py-2 text-xs font-bold uppercase tracking-wide ${
                pathname === href ? "text-saffron" : "text-white/62"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

