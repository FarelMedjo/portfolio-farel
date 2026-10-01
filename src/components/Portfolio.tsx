"use client";

import { useState } from "react";
import {
  audiences,
  competences,
  identite,
  libellesSections,
  parcours,
  projets,
  services,
  type Audience,
  type Projet,
  type SectionId,
} from "@/data/site";

const listeAudiences = Object.keys(audiences) as Audience[];

export default function Portfolio({ initial }: { initial: Audience }) {
  const [audience, setAudience] = useState<Audience>(initial);
  const contenu = audiences[audience];

  function choisir(a: Audience) {
    setAudience(a);
    const url = new URL(window.location.href);
    url.searchParams.set("profil", a);
    window.history.replaceState(null, "", url);
  }

  const projetsTries = contenu.ordreProjets
    .map((id) => projets.find((p) => p.id === id))
    .filter((p): p is Projet => Boolean(p));

  const telephoneBrut = identite.telephone.replace(/\s/g, "");
  const annee = new Date().getFullYear();

  const sections: Record<SectionId, React.ReactNode> = {
    projets: (
      <section id="projets" className="section" aria-labelledby="t-projets">
        <div className="conteneur">
          <h2 id="t-projets" className="section__titre">
            Projets
          </h2>
          <p className="section__intro">{contenu.introProjets}</p>
          <div>
            {projetsTries.map((p) => (
              <article key={p.id} className="projet">
                <div className="projet__meta">
                  <p className="projet__statut">{p.statut}</p>
                  <p>{p.categorie}</p>
                </div>
                <div>
                  <h3 className="projet__titre">{p.titre}</h3>
                  <p className="projet__resume">{p.resume}</p>
                  <ul className="projet__tech" aria-label="Technologies et sujets">
                    {p.technologies.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {p.lien ? (
                    <p>
                      <a href={p.lien}>Consulter le projet</a>
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    ),

    services: (
      <section id="services" className="section" aria-labelledby="t-services">
        <div className="conteneur">
          <h2 id="t-services" className="section__titre">
            Services
          </h2>
          <p className="section__intro">
            Prestations proposées aux établissements d&apos;enseignement et aux
            organisations du Cameroun.
          </p>
          <ul className="services">
            {services.map((s) => (
              <li key={s.titre} className="service">
                <h3>{s.titre}</h3>
                <p>{s.texte}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    ),

    parcours: (
      <section id="parcours" className="section" aria-labelledby="t-parcours">
        <div className="conteneur">
          <h2 id="t-parcours" className="section__titre">
            Parcours
          </h2>
          <ol className="parcours">
            {parcours.map((e) => (
              <li key={e.titre + e.lieu} className="etape">
                <p className="etape__periode">{e.periode}</p>
                <h3 className="etape__titre">{e.titre}</h3>
                <p className="etape__lieu">{e.lieu}</p>
                <p className="etape__texte">{e.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    ),

    competences: (
      <section
        id="competences"
        className="section"
        aria-labelledby="t-competences"
      >
        <div className="conteneur">
          <h2 id="t-competences" className="section__titre">
            Compétences
          </h2>
          <dl className="competences">
            {competences.map((c) => (
              <div key={c.domaine} className="competences__ligne">
                <dt>{c.domaine}</dt>
                <dd>{c.elements.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    ),

    contact: (
      <section id="contact" className="section" aria-labelledby="t-contact">
        <div className="conteneur">
          <h2 id="t-contact" className="section__titre">
            Contact
          </h2>
          <p className="section__intro">
            Pour un stage, un projet ou une question sur mon parcours, écrivez-moi
            directement.
          </p>
          <p>
            <a className="contact__email" href={`mailto:${identite.email}`}>
              {identite.email}
            </a>
          </p>
          <ul className="contact__liste">
            {identite.whatsapp ? (
              <li>
                <a
                  href={`https://wa.me/${identite.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Écrire sur WhatsApp
                </a>
              </li>
            ) : null}
            {identite.telephone ? (
              <li>
                <a href={`tel:${telephoneBrut}`}>{identite.telephone}</a>
              </li>
            ) : null}
            {identite.linkedin ? (
              <li>
                <a href={identite.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            ) : null}
            {identite.github ? (
              <li>
                <a href={identite.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            ) : null}
            {identite.cvUrl ? (
              <li>
                <a href={identite.cvUrl}>Télécharger le CV</a>
              </li>
            ) : null}
            <li>{identite.localisation}</li>
          </ul>
        </div>
      </section>
    ),
  };

  return (
    <>
      <a className="lien-evitement" href="#contenu">
        Aller au contenu
      </a>

      <header className="entete">
        <div className="conteneur entete__interieur">
          <a className="entete__marque" href="#accueil">
            {identite.nom}
          </a>
          <nav aria-label="Sections du portfolio" className="entete__nav">
            {contenu.ordreSections.map((id) => (
              <a key={id} href={`#${id}`}>
                {libellesSections[id]}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="contenu">
        <section id="accueil" className="hero" aria-labelledby="t-accueil">
          <div className="conteneur">
            <h1 id="t-accueil" className="hero__nom">
              {identite.nom}.
            </h1>
            <p className="hero__fonction">{identite.titre}</p>

            <div className="choix" role="group" aria-label="Vous êtes">
              <span className="choix__label">Vous êtes</span>
              {listeAudiences.map((a) => (
                <button
                  key={a}
                  type="button"
                  className="choix__bouton"
                  aria-pressed={audience === a}
                  onClick={() => choisir(a)}
                >
                  {audiences[a].libelle}
                </button>
              ))}
            </div>

            <div key={audience} className="hero__pitch">
              <h2 className="hero__titre">{contenu.titre}</h2>
              <p className="hero__texte">{contenu.texte}</p>
              <p className="hero__actions">
                <a className="bouton" href={contenu.cta.href}>
                  {contenu.cta.libelle}
                </a>
                {identite.cvUrl ? (
                  <a className="lien-secondaire" href={identite.cvUrl}>
                    Télécharger le CV
                  </a>
                ) : null}
              </p>
            </div>
          </div>
        </section>

        {contenu.ordreSections.map((id) => (
          <div key={id}>{sections[id]}</div>
        ))}
      </main>

      <footer className="pied">
        <div className="conteneur">
          <p>
            © {annee} {identite.nomComplet}. {identite.localisation}.
          </p>
        </div>
      </footer>
    </>
  );
}
