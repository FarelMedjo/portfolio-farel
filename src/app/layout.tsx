import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Farel M | Cybersécurité, investigation numérique et développement web",
  description:
    "Portfolio de Farel M, élève ingénieur en cybersécurité et investigation numérique à l'ENSPY (Yaoundé) : projets, services de développement web, parcours et compétences.",
  openGraph: {
    title: "Farel M | Cybersécurité, investigation numérique et développement web",
    description:
      "Projets, services, parcours et compétences de Farel M, élève ingénieur à l'ENSPY, Yaoundé.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#EDF1F5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;600;800&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
