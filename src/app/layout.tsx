import type { Metadata, Viewport } from "next";
import { langueParDefaut, meta, resoudre } from "@/data/site";
import "./globals.css";

const base = resoudre(meta, langueParDefaut);

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: base.titre,
  description: base.description,
  openGraph: {
    title: base.titre,
    description: base.descriptionCourte,
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EDF1F5" },
    { media: "(prefers-color-scheme: dark)", color: "#0A111D" },
  ],
};

// Applique le thème et la langue avant l'affichage pour éviter un flash
// de la mauvaise couleur ou un attribut lang erroné.
const scriptInitial = `document.documentElement.classList.add("js");try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}try{var p=new URLSearchParams(location.search).get("lang");var c=document.cookie.match(/(?:^|; )langue=(fr|en)/);var l=p==="en"||p==="fr"?p:c&&c[1];if(l)document.documentElement.lang=l}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={langueParDefaut} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptInitial }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;600;800&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
