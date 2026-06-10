import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { FloatingDock } from "@/components/FloatingDock";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Atlas Keys Marrakech",
  description: "Frontend premium pour une agence immobiliere a Marrakech."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Nav />
        <main>{children}</main>
        <FloatingDock />
        <footer className="bg-pearl pb-28 pt-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 text-sm text-ink/55 sm:flex-row sm:px-6 lg:px-8">
            <span>Atlas Keys Marrakech - Prototype frontend Next.js</span>
            <span>SEO - Multilingue - Leads - Immobilier premium</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

