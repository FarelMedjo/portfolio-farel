/*
 * Choix de la langue côté serveur.
 * Priorité : paramètre ?lang de l'adresse, puis cookie « langue »
 * (posé par le bouton du site), puis langue par défaut.
 */

import { cookies } from "next/headers";
import { langueParDefaut, langues, type Langue } from "./site";

export function estLangue(valeur?: string | null): valeur is Langue {
  return langues.includes(valeur as Langue);
}

export async function langueActive(lang?: string): Promise<Langue> {
  if (estLangue(lang)) return lang;
  const magasin = await cookies();
  const retenue = magasin.get("langue")?.value;
  return estLangue(retenue) ? retenue : langueParDefaut;
}
