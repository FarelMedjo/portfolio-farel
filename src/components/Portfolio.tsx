"use client";

import { useEffect, useMemo, useState } from "react";
import {
  audiences,
  codesLangues,
  contenuSite,
  libellesDomaines,
  type Audience,
  type Domaine,
  type Langue,
  type ProjetResolu,
  type SectionId,
} from "@/data/site";

const listeAudiences = Object.keys(audiences) as Audience[];
const filtres = Object.keys(libellesDomaines) as (Domaine | "tous")[];

/* Largeur des étiquettes du terminal, pour aligner les valeurs. */
const LARGEUR_CLE = 9;

/* Liens d'un projet : seuls ceux qui sont renseignés sont affichés. */
function liensProjet(
  p: ProjetResolu,
  libelles: { codeSource: string; demonstration: string; consulterProjet: string }
) {
  const liens = [
    { libelle: libelles.codeSource, url: p.github },
    { libelle: libelles.demonstration, url: p.demo },
    { libelle: libelles.consulterProjet, url: p.lien },
    ...(p.liens ?? []),
  ];
  return liens.filter((l): l is { libelle: string; url: string } =>
    Boolean(l.url && l.url.trim() && l.libelle)
  );
}

/* Capture d'écran : disparaît d'elle-même si le fichier est introuvable. */
function Capture({ image }: { image: { src: string; alt: string } }) {
  const [erreur, setErreur] = useState(false);
  if (!image.src || erreur) return null;
  return (
    <figure className="projet__capture">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        onError={() => setErreur(true)}
      />
    </figure>
  );
}

/* Détails repliables. Tout est optionnel : sans contenu, rien n'est affiché. */
function DetailsProjet({
  p,
  ui,
}: {
  p: ProjetResolu;
  ui: {
    detailsProjet: string;
    periode: string;
    client: string;
    pointsCles: string;
  };
}) {
  const images = (p.images ?? []).filter((i) => i.src);
  const aDetails =
    Boolean(p.description?.length) ||
    Boolean(p.pointsCles?.length) ||
    Boolean(p.periode) ||
    Boolean(p.clientName) ||
    images.length > 0;
  if (!aDetails) return null;
  return (
    <details className="projet__details">
      <summary>{ui.detailsProjet}</summary>
      <div className="projet__details-corps">
        {p.periode ? (
          <p className="projet__meta">
            <span>{ui.periode}</span> {p.periode}
          </p>
        ) : null}
        {p.clientName ? (
          <p className="projet__meta">
            <span>{ui.client}</span> {p.clientName}
          </p>
        ) : null}
        {p.description?.map((paragraphe) => (
          <p key={paragraphe}>{paragraphe}</p>
        ))}
        {p.pointsCles?.length ? (
          <ul className="projet__points" aria-label={ui.pointsCles}>
            {p.pointsCles.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}
        {images.length > 0 ? (
          <div className="projet__captures">
            {images.map((image) => (
              <Capture key={image.src} image={image} />
            ))}
          </div>
        ) : null}
      </div>
    </details>
  );
}

/* Fait apparaître les éléments .apparait lorsqu'ils entrent dans l'écran. */
function useApparition(dep: unknown) {
  useEffect(() => {
    const elements = document.querySelectorAll(".apparait:not(.visible)");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((e) => e.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    elements.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [dep]);
}

/* Section visible, pour surligner le lien correspondant du menu. */
function useSectionActive(ids: string[]) {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    // En bas de page, la dernière section n'atteint pas toujours le milieu de l'écran.
    const enBas = () => {
      const h = document.documentElement;
      if (h.scrollTop + h.clientHeight >= h.scrollHeight - 4) {
        setActive(ids[ids.length - 1]);
      }
    };
    window.addEventListener("scroll", enBas, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", enBas);
    };
  }, [ids]);
  return active;
}

function BoutonTheme({
  libelles,
}: {
  libelles: {
    themeClair: string;
    themeSombre: string;
    themeClairCourt: string;
    themeSombreCourt: string;
  };
}) {
  const [sombre, setSombre] = useState<boolean | null>(null);

  useEffect(() => {
    setSombre(document.documentElement.dataset.theme === "dark");
  }, []);

  function basculer() {
    const suivant = !sombre;
    setSombre(suivant);
    document.documentElement.dataset.theme = suivant ? "dark" : "light";
    try {
      localStorage.setItem("theme", suivant ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      className="theme"
      onClick={basculer}
      aria-label={sombre ? libelles.themeClair : libelles.themeSombre}
      title={sombre ? libelles.themeClairCourt : libelles.themeSombreCourt}
    >
      {sombre ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
        </svg>
      )}
    </button>
  );
}

export default function Portfolio({
  initial,
  langueInitiale,
}: {
  initial: Audience;
  langueInitiale: Langue;
}) {
  const [audience, setAudience] = useState<Audience>(initial);
  const [langue, setLangue] = useState<Langue>(langueInitiale);
  const [filtre, setFiltre] = useState<Domaine | "tous">("tous");
  const [progression, setProgression] = useState(0);

  /* Contenu résolu une fois par langue : les références restent stables. */
  const site = useMemo(() => contenuSite(langue), [langue]);
  const { identite, ui, libellesSections: titresSections } = site;
  const contenu = site.audiences[audience];
  const autreLangue: Langue = langue === "fr" ? "en" : "fr";

  function choisir(a: Audience) {
    setAudience(a);
    const url = new URL(window.location.href);
    url.searchParams.set("profil", a);
    window.history.replaceState(null, "", url);
  }

  function changerLangue() {
    setLangue(autreLangue);
    /* Cookie plutôt que localStorage : le serveur rend alors directement
       la bonne langue lors des visites suivantes, sans affichage transitoire. */
    document.cookie = `langue=${autreLangue}; path=/; max-age=31536000; samesite=lax`;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", autreLangue);
    window.history.replaceState(null, "", url);
  }

  /* L'attribut lang et le titre de l'onglet suivent la langue affichée. */
  useEffect(() => {
    document.documentElement.lang = langue;
    document.title = site.meta.titre;
  }, [langue, site.meta.titre]);

  useEffect(() => {
    const surDefilement = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgression(max > 0 ? h.scrollTop / max : 0);
    };
    surDefilement();
    window.addEventListener("scroll", surDefilement, { passive: true });
    return () => window.removeEventListener("scroll", surDefilement);
  }, []);

  useApparition(audience + filtre + langue);
  const sectionActive = useSectionActive(contenu.ordreSections);

  const projetsTries = contenu.ordreProjets
    .map((id) => site.projets.find((p) => p.id === id))
    .filter((p): p is ProjetResolu => Boolean(p))
    .filter((p) => filtre === "tous" || p.domaine === filtre);

  const telephoneBrut = identite.telephone.replace(/\s/g, "");
  const annee = new Date().getFullYear();

  const sections: Record<SectionId, React.ReactNode> = {
    projets: (
      <section id="projets" className="section" aria-labelledby="t-projets">
        <div className="conteneur">
          <div className="section__entete apparait">
            <div>
              <h2 id="t-projets" className="section__titre">
                {titresSections.projets}
              </h2>
              <p className="section__intro">{contenu.introProjets}</p>
            </div>
            <div className="filtres" role="group" aria-label={ui.filtrerProjets}>
              {filtres.map((f) => (
                <button
                  key={f}
                  type="button"
                  className="filtre"
                  aria-pressed={filtre === f}
                  onClick={() => setFiltre(f)}
                >
                  {site.libellesDomaines[f]}
                </button>
              ))}
            </div>
          </div>
          <div className="projets">
            {projetsTries.map((p, i) => {
              const liens = liensProjet(p, ui);
              const statut = p.statut ? site.statuts[p.statut] : null;
              return (
                <article
                  key={p.id}
                  className={`projet apparait projet--${p.domaine}`}
                  style={{ "--delai": `${Math.min(i, 5) * 60}ms` } as React.CSSProperties}
                >
                  <div className="projet__haut">
                    {statut ? (
                      <span className={`statut statut--${statut.ton}`}>
                        {statut.libelle}
                      </span>
                    ) : null}
                    <span className="projet__domaine">
                      {site.libellesDomaines[p.domaine]}
                    </span>
                  </div>
                  <h3 className="projet__titre">{p.titre}</h3>
                  <p className="projet__categorie">{p.categorie}</p>
                  {p.role ? (
                    <p className="projet__role">
                      <span>{ui.role}</span> {p.role}
                    </p>
                  ) : null}
                  <p className="projet__resume">{p.resume}</p>
                  {p.mention ? <p className="projet__mention">{p.mention}</p> : null}
                  <ul className="puces" aria-label={ui.technologies}>
                    {p.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <DetailsProjet p={p} ui={ui} />
                  {liens.length > 0 ? (
                    <ul className="projet__liens" aria-label={ui.liensProjet}>
                      {liens.map((l) => (
                        <li key={l.url}>
                          <a
                            className="projet__lien"
                            href={l.url}
                            {...(/^https?:\/\//.test(l.url)
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {l.libelle} <span aria-hidden="true">→</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    ),

    services: (
      <section id="services" className="section" aria-labelledby="t-services">
        <div className="conteneur">
          <div className="apparait">
            <h2 id="t-services" className="section__titre">
              {titresSections.services}
            </h2>
            <p className="section__intro">{ui.servicesIntro}</p>
          </div>
          <ol className="services">
            {site.services.map((s, i) => (
              <li
                key={s.titre}
                className="service apparait"
                style={{ "--delai": `${i * 70}ms` } as React.CSSProperties}
              >
                <span className="service__numero" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{s.titre}</h3>
                <p>{s.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    ),

    parcours: (
      <section id="parcours" className="section" aria-labelledby="t-parcours">
        <div className="conteneur">
          <h2 id="t-parcours" className="section__titre apparait">
            {titresSections.parcours}
          </h2>
          <ol className="parcours">
            {site.parcours.map((e) => (
              <li key={e.titre + e.lieu} className="etape apparait">
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
          <h2 id="t-competences" className="section__titre apparait">
            {titresSections.competences}
          </h2>
          <div className="competences">
            {site.competences.map((c, i) => (
              <div
                key={c.domaine}
                className="competence apparait"
                style={{ "--delai": `${i * 70}ms` } as React.CSSProperties}
              >
                <h3>{c.domaine}</h3>
                <ul className="puces">
                  {c.elements.map((el) => (
                    <li key={el}>{el}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),

    contact: (
      <section id="contact" className="section" aria-labelledby="t-contact">
        <div className="conteneur">
          <div className="contact apparait">
            <p className="contact__surtitre">{ui.contactSurtitre}</p>
            <h2 id="t-contact" className="contact__titre">
              {ui.contactTitreLigne1}
              <br />
              {ui.contactTitreLigne2}
            </h2>
            <a className="contact__email" href={`mailto:${identite.email}`}>
              {identite.email}
            </a>
            <ul className="contact__liste">
              {identite.whatsapp ? (
                <li>
                  <a
                    className="bouton bouton--clair"
                    href={`https://wa.me/${identite.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ui.whatsapp}
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
                  <a href={identite.cvUrl}>{ui.telechargerCv}</a>
                </li>
              ) : null}
              <li>{identite.localisation}</li>
            </ul>
          </div>
        </div>
      </section>
    ),
  };

  return (
    <>
      <a className="lien-evitement" href="#contenu">
        {ui.allerAuContenu}
      </a>

      <div
        className="progression"
        style={{ transform: `scaleX(${progression})` }}
        aria-hidden="true"
      />

      <header className="entete">
        <div className="conteneur entete__interieur">
          <a className="entete__marque" href="#accueil">
            <span className="entete__logo" aria-hidden="true">
              FM
            </span>
            {identite.nom}
          </a>
          <nav aria-label={ui.navAria} className="entete__nav">
            {contenu.ordreSections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={sectionActive === id ? "true" : undefined}
              >
                {titresSections[id]}
              </a>
            ))}
          </nav>
          <div className="entete__outils" role="group" aria-label={ui.langueAria}>
            <button
              type="button"
              className="langue"
              onClick={changerLangue}
              aria-label={ui.changerLangue}
              title={ui.changerLangue}
              lang={autreLangue}
            >
              {codesLangues[autreLangue]}
            </button>
            <BoutonTheme libelles={ui} />
          </div>
        </div>
      </header>

      <main id="contenu">
        <section id="accueil" className="hero" aria-labelledby="t-accueil">
          <div className="hero__grille" aria-hidden="true" />
          <div className="conteneur hero__disposition">
            <div>
              <p key={audience} className="badge">
                <span className="badge__point" aria-hidden="true" />
                {contenu.disponibilite}
              </p>
              <h1 id="t-accueil" className="hero__nom">
                {identite.nom}
                <span className="hero__point">.</span>
              </h1>
              <p className="hero__fonction">{identite.titre}</p>
            </div>

            <div className="terminal" aria-hidden="true">
              <div className="terminal__barre">
                <span />
                <span />
                <span />
                <p>farel@enspy: ~</p>
              </div>
              <pre className="terminal__corps">
                <span className="t-invite">$</span> whoami{"\n"}
                <span className="t-sortie">{identite.nomComplet}</span>
                {"\n\n"}
                <span className="t-invite">$</span> cat {ui.terminal.fichierProfil}
                {"\n"}
                <span className="t-cle">
                  {ui.terminal.ecole.padEnd(LARGEUR_CLE)}
                </span>{" "}
                {ui.terminal.ecoleValeur}
                {"\n"}
                <span className="t-cle">
                  {ui.terminal.filiere.padEnd(LARGEUR_CLE)}
                </span>{" "}
                {ui.terminal.filiereValeur}
                {"\n"}
                <span className="t-cle">
                  {ui.terminal.niveau.padEnd(LARGEUR_CLE)}
                </span>{" "}
                {ui.terminal.niveauValeur}
                {"\n"}
                <span className="t-cle">
                  {ui.terminal.studio.padEnd(LARGEUR_CLE)}
                </span>{" "}
                {ui.terminal.studioValeur}
                {"\n\n"}
                <span className="t-invite">$</span> <span className="curseur" />
              </pre>
            </div>
          </div>

          <div className="conteneur">
            <div className="choix" role="group" aria-label={ui.vousEtes}>
              <span className="choix__label">{ui.vousEtes}</span>
              {listeAudiences.map((a) => (
                <button
                  key={a}
                  type="button"
                  className="choix__bouton"
                  aria-pressed={audience === a}
                  onClick={() => choisir(a)}
                >
                  {site.audiences[a].libelle}
                </button>
              ))}
            </div>

            <div key={audience} className="hero__pitch">
              <h2 className="hero__titre">{contenu.titre}</h2>
              <p className="hero__texte">{contenu.texte}</p>
              <p className="hero__actions">
                <a className="bouton" href={contenu.cta.href}>
                  {contenu.cta.libelle} <span aria-hidden="true">→</span>
                </a>
                {identite.cvUrl ? (
                  <a className="bouton bouton--contour" href={identite.cvUrl}>
                    {ui.telechargerCv}
                  </a>
                ) : (
                  <a className="bouton bouton--contour" href="#projets">
                    {ui.voirProjets}
                  </a>
                )}
              </p>
            </div>

            <dl className="chiffres">
              {site.chiffres.map((c) => (
                <div key={c.libelle} className="chiffre">
                  <dt>{c.libelle}</dt>
                  <dd>{c.valeur}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {contenu.ordreSections.map((id) => (
          <div key={id}>{sections[id]}</div>
        ))}
      </main>

      <footer className="pied">
        <div className="conteneur pied__interieur">
          <p>
            © {annee} {identite.nomComplet}. {identite.localisation}.
          </p>
          <a href="#accueil">{ui.retourEnHaut}</a>
        </div>
      </footer>
    </>
  );
}
