import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";
import { langueActive } from "@/data/langue";
import {
  audiences,
  codesComplets,
  meta,
  resoudre,
  type Audience,
} from "@/data/site";

type Parametres = { profil?: string; lang?: string };

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Parametres>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const langue = await langueActive(lang);
  const textes = resoudre(meta, langue);

  return {
    title: textes.titre,
    description: textes.description,
    openGraph: {
      title: textes.titre,
      description: textes.descriptionCourte,
      locale: codesComplets[langue].replace("-", "_"),
      type: "website",
    },
    alternates: {
      languages: {
        "fr-FR": "/?lang=fr",
        "en-US": "/?lang=en",
      },
    },
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Parametres>;
}) {
  const { profil, lang } = await searchParams;
  const initial: Audience =
    profil && profil in audiences ? (profil as Audience) : "recruteur";

  return (
    <Portfolio initial={initial} langueInitiale={await langueActive(lang)} />
  );
}
