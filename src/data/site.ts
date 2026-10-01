/*
 * Contenu du portfolio de Farel M.
 * Ce fichier est le seul à modifier pour mettre à jour le site :
 * identité, projets, services, parcours, compétences et discours par public.
 */

export type Audience = "recruteur" | "client" | "academique";
export type SectionId =
  | "projets"
  | "services"
  | "parcours"
  | "competences"
  | "contact";

/* ------------------------------------------------------------------ */
/* Identité et coordonnées                                             */
/* ------------------------------------------------------------------ */

export const identite = {
  nom: "Farel M",
  nomComplet: "MVONGO MEDJO ORDI Farel",
  titre: "Cybersécurité, investigation numérique et développement web",
  localisation: "Yaoundé, Cameroun",
  email: "farelmedjo0@gmail.com",
  // Ces deux champs sont publics une fois le site en ligne.
  // Laissez une chaîne vide ("") pour masquer l'un d'eux.
  telephone: "+237 696 690 129",
  whatsapp: "237696690129",
  // À compléter : les liens vides ne sont pas affichés.
  github: "",
  linkedin: "",
  // Déposez votre CV dans le dossier /public puis indiquez son chemin,
  // par exemple "/cv-farel-m.pdf".
  cvUrl: "",
};

const mailto = (objet: string) =>
  `mailto:${identite.email}?subject=${encodeURIComponent(objet)}`;

export const libellesSections: Record<SectionId, string> = {
  projets: "Projets",
  services: "Services",
  parcours: "Parcours",
  competences: "Compétences",
  contact: "Contact",
};

/* ------------------------------------------------------------------ */
/* Projets                                                             */
/* ------------------------------------------------------------------ */

export type Projet = {
  id: string;
  titre: string;
  categorie: string;
  statut: string;
  resume: string;
  technologies: string[];
  lien?: string;
};

export const projets: Projet[] = [
  {
    id: "forensique-metasploitable",
    titre: "Investigation numérique sur un serveur Metasploitable 2",
    categorie: "Cours de hacking éthique, ENSPY",
    statut: "Terminé",
    resume:
      "Investigation menée sur un serveur volontairement vulnérable : démarche, constats et conclusions consignés dans un rapport de 39 pages, accompagné d'une présentation.",
    technologies: ["Investigation numérique", "Metasploitable 2", "LaTeX"],
  },
  {
    id: "ebios-rm",
    titre: "Analyse de risques avec EBIOS Risk Manager",
    categorie: "Gestion des risques, ENSPY",
    statut: "Terminé",
    resume:
      "Projet de gestion des risques selon la méthode EBIOS Risk Manager, livré sous forme de rapport structuré.",
    technologies: ["EBIOS Risk Manager", "Gestion des risques", "LaTeX"],
  },
  {
    id: "reseau-4-tier-bgp",
    titre: "Architecture réseau hiérarchique 4-tier avec sortie BGP",
    categorie: "Travaux pratiques réseau, ENSPY",
    statut: "Terminé",
    resume:
      "Construction d'une architecture réseau hiérarchique à quatre niveaux avec sortie BGP, simulée sous EVE-NG (topologie 4-tier_Egress_PA_02).",
    technologies: ["EVE-NG", "BGP", "Réseau hiérarchique"],
  },
  {
    id: "ceh-system-hacking",
    titre: "Rapport CEH v13, module 06 : System Hacking",
    categorie: "Certification préparée, ENSPY",
    statut: "Terminé",
    resume:
      "Rapport de module illustré par une soixantaine de captures d'écran documentant les manipulations réalisées.",
    technologies: ["CEH v13", "System Hacking", "LaTeX"],
  },
  {
    id: "evaluation-en-ligne-securisee",
    titre: "Plateforme d'évaluation en ligne sécurisée",
    categorie: "Mémoire de stage, cellule informatique d'ICORP",
    statut: "En cours",
    resume:
      "Thème de mon mémoire de niveau 4 : une plateforme d'évaluation en ligne pour les concours blancs, conçue autour de l'intégrité des épreuves et de la prévention de la fraude.",
    technologies: ["Sécurité applicative", "Intégrité des épreuves", "Anti-fraude"],
  },
  {
    id: "brixschool",
    titre: "BrixSchool, gestion d'établissements scolaires",
    categorie: "Brix Studio",
    statut: "En développement",
    resume:
      "Application de gestion scolaire pensée pour le contexte camerounais et la zone CEMAC : modules par profil d'utilisateur, contrôle d'accès par rôle et schémas SQL complets. Elle prolonge EduBrix, une première version réalisée avec Laravel puis avec React et Supabase.",
    technologies: ["React", "TypeScript", "Supabase", "Laravel", "RBAC"],
  },
  {
    id: "tutorlab",
    titre: "TutorLab, mise en relation entre tuteurs et familles",
    categorie: "Projet personnel, Yaoundé",
    statut: "En construction",
    resume:
      "Plateforme qui met en relation des familles et des tuteurs à Yaoundé, avec paiement par Mobile Money en FCFA.",
    technologies: ["Mobile Money", "FCFA", "Mise en relation"],
  },
  {
    id: "near2ride",
    titre: "Near2Ride, véhicule et conducteur à proximité",
    categorie: "Projet personnel",
    statut: "Concept",
    resume:
      "Permettre à chacun de trouver et de réserver, à quelques pas de son point de départ, le véhicule et/ou le conducteur dont il a besoin pour se déplacer.",
    technologies: ["Mobilité", "Réservation", "Géolocalisation"],
  },
];

/* ------------------------------------------------------------------ */
/* Services proposés aux clients                                       */
/* ------------------------------------------------------------------ */

export const services = [
  {
    titre: "Audit technique de site web",
    texte:
      "Diagnostic d'un site existant, puis restitution des constats et des pistes d'amélioration sous forme de présentation claire.",
  },
  {
    titre: "Création et refonte de sites vitrines",
    texte:
      "Sites institutionnels pour établissements scolaires et organisations : conception de l'interface, développement et mise en ligne.",
  },
  {
    titre: "Maintenance de sites web",
    texte:
      "Interventions régulières sur un site en production, avec un suivi détaillé des prestations et des règlements.",
  },
  {
    titre: "Gestion scolaire sur mesure",
    texte:
      "Applications de gestion d'établissements : rôles et droits d'accès, modules par profil d'utilisateur, adaptation au contexte local.",
  },
];

/* ------------------------------------------------------------------ */
/* Parcours                                                            */
/* ------------------------------------------------------------------ */

export const parcours = [
  {
    periode: "2025 – 2026",
    titre: "Élève ingénieur en 4e année, Cybersécurité et Investigation Numérique",
    lieu: "École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)",
    texte:
      "Formation d'ingénieur : investigation numérique, hacking éthique, gestion des risques, réseaux, cryptographie et urbanisation des systèmes d'information.",
  },
  {
    periode: "Niveau 4",
    titre: "Stage académique à la cellule informatique",
    lieu: "ICORP",
    texte:
      "Mémoire consacré à une plateforme d'évaluation en ligne sécurisée pour les concours blancs. La cellule gère la base de données des apprenants, le site web et les plateformes en ligne.",
  },
  {
    periode: "En cours",
    titre: "Coordinateur académique et enseignant en classe préparatoire",
    lieu: "ICORP",
    texte:
      "Coordination pédagogique, conception de supports de cours et de corrigés (mathématiques, informatique, réseaux, tests psychotechniques, culture générale) et cours de soutien.",
  },
  {
    periode: "En cours",
    titre: "Développement web indépendant",
    lieu: "Brix Studio",
    texte:
      "Sites institutionnels, audits techniques et applications de gestion pour des établissements d'enseignement au Cameroun.",
  },
];

/* ------------------------------------------------------------------ */
/* Compétences                                                         */
/* ------------------------------------------------------------------ */

export const competences = [
  {
    domaine: "Sécurité et investigation",
    elements: [
      "Kali Linux",
      "Nmap",
      "Metasploit",
      "Burp Suite",
      "Wireshark",
      "Autopsy",
      "EBIOS Risk Manager",
      "Cryptographie (RSA, PKI, ECC)",
    ],
  },
  {
    domaine: "Réseaux",
    elements: [
      "OSPF",
      "IS-IS",
      "BGP",
      "VLAN",
      "EtherChannel (LACP, PAgP)",
      "EVE-NG",
    ],
  },
  {
    domaine: "Développement",
    elements: [
      "React",
      "TypeScript",
      "Python",
      "Flask",
      "Laravel",
      "Flutter",
      "Supabase",
      "Cloudflare Workers et D1",
    ],
  },
  {
    domaine: "Conception et rédaction",
    elements: ["Figma", "LaTeX", "Documents Word et PDF", "Présentations Beamer et PowerPoint"],
  },
];

/* ------------------------------------------------------------------ */
/* Discours par public                                                 */
/* ------------------------------------------------------------------ */

export const audiences: Record<
  Audience,
  {
    libelle: string;
    titre: string;
    texte: string;
    cta: { libelle: string; href: string };
    introProjets: string;
    ordreSections: SectionId[];
    ordreProjets: string[];
  }
> = {
  recruteur: {
    libelle: "Recruteur",
    titre:
      "Étudiant ingénieur en cybersécurité, à la recherche d'un stage de fin de formation.",
    texte:
      "Je suis en quatrième année à l'École Nationale Supérieure Polytechnique de Yaoundé, filière Cybersécurité et Investigation Numérique. Je recherche un stage dans le secteur bancaire, les télécommunications ou l'administration publique, où je pourrai mettre en pratique l'analyse de risques, l'investigation numérique et la sécurisation d'applications.",
    cta: { libelle: "Proposer un stage", href: mailto("Proposition de stage") },
    introProjets:
      "Travaux menés pendant ma formation et dans mes projets personnels, classés par pertinence pour un poste en sécurité.",
    ordreSections: ["projets", "competences", "parcours", "services", "contact"],
    ordreProjets: [
      "forensique-metasploitable",
      "ebios-rm",
      "reseau-4-tier-bgp",
      "ceh-system-hacking",
      "evaluation-en-ligne-securisee",
      "brixschool",
      "tutorlab",
      "near2ride",
    ],
  },
  client: {
    libelle: "Client",
    titre:
      "Des sites web et des outils de gestion pour les établissements d'enseignement.",
    texte:
      "Je conçois, modernise et maintiens des sites web et des applications de gestion adaptés au contexte camerounais : diagnostic d'un site existant, refonte, maintenance et gestion scolaire. Mes projets tiennent compte des usages locaux, notamment du paiement par Mobile Money en FCFA.",
    cta: { libelle: "Discuter de votre projet", href: mailto("Projet web") },
    introProjets:
      "Applications réalisées ou en construction pour le contexte camerounais, suivies de mes travaux en sécurité.",
    ordreSections: ["services", "projets", "parcours", "competences", "contact"],
    ordreProjets: [
      "brixschool",
      "tutorlab",
      "near2ride",
      "evaluation-en-ligne-securisee",
      "forensique-metasploitable",
      "ebios-rm",
      "reseau-4-tier-bgp",
      "ceh-system-hacking",
    ],
  },
  academique: {
    libelle: "Jury académique",
    titre:
      "Un parcours d'ingénieur centré sur la sécurité, les réseaux et les systèmes d'information.",
    texte:
      "Je suis en quatrième année de formation d'ingénieur à l'ENSPY, filière Cybersécurité et Investigation Numérique. Ce portfolio rassemble mes travaux pratiques, mes rapports techniques et mes projets de développement, ainsi que mon activité d'enseignement en classe préparatoire aux concours.",
    cta: { libelle: "Consulter le parcours", href: "#parcours" },
    introProjets:
      "Travaux pratiques, rapports techniques et projets de développement, classés du plus académique au plus appliqué.",
    ordreSections: ["parcours", "projets", "competences", "services", "contact"],
    ordreProjets: [
      "forensique-metasploitable",
      "reseau-4-tier-bgp",
      "ebios-rm",
      "ceh-system-hacking",
      "evaluation-en-ligne-securisee",
      "brixschool",
      "tutorlab",
      "near2ride",
    ],
  },
};
