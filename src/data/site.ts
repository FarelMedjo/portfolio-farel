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

export type Domaine = "securite" | "developpement" | "missions" | "ressources";

export const libellesDomaines: Record<Domaine | "tous", string> = {
  tous: "Tous",
  securite: "Sécurité et réseaux",
  developpement: "Développement",
  missions: "Missions et freelance",
  ressources: "Enseignement et autres réalisations",
};

/* Capture d'écran : déposez le fichier dans public/projects/<id>/ puis
   indiquez son chemin, par exemple "/projects/<id>/accueil.png". */
export type ImageProjet = { src: string; alt: string };

export type LienProjet = { libelle: string; url: string };

export type Projet = {
  /* Identifiant stable, utilisé aussi comme slug et comme nom du dossier
     public/projects/<id>/. */
  id: string;
  titre: string;
  categorie: string;
  /* Concept, En conception, En cours, En lancement, Projet académique, Terminé… */
  statut?: string;
  domaine: Domaine;
  resume: string;
  technologies: string[];
  lien?: string;
  /* Champs optionnels : rien ne s'affiche tant qu'ils sont vides. */
  role?: string;
  /* Un élément par paragraphe. */
  description?: string[];
  pointsCles?: string[];
  periode?: string;
  /* Nom du client, à renseigner uniquement avec son accord. Vide par défaut. */
  clientName?: string;
  /* Précision d'origine ou de contexte, par exemple pour un fork. */
  mention?: string;
  github?: string;
  demo?: string;
  liens?: LienProjet[];
  images?: ImageProjet[];
  /* false : l'entrée est conservée dans ce fichier mais n'est pas publiée. */
  visible?: boolean;
};

export const projets: Projet[] = [
  {
    id: "forensique-metasploitable",
    titre: "Investigation numérique sur un serveur Metasploitable 2",
    categorie: "Cours de hacking éthique, ENSPY",
    statut: "Terminé",
    domaine: "securite",
    resume:
      "Investigation menée sur un serveur volontairement vulnérable : démarche, constats et conclusions consignés dans un rapport de 39 pages, accompagné d'une présentation.",
    technologies: [
      "Investigation numérique",
      "Metasploitable 2",
      "LaTeX",
      "Word",
      "PowerPoint",
    ],
    description: [
      "Investigation numérique menée dans le cadre du cours de hacking éthique sur un serveur Metasploitable 2, machine volontairement vulnérable. La démarche, les constats et les conclusions sont consignés dans un rapport de 39 pages rédigé en LaTeX.",
      "Le travail a donné lieu à trois livrables : le rapport LaTeX, un rapport au format Word et une présentation PowerPoint.",
    ],
    pointsCles: [
      "Rapport LaTeX de 39 pages",
      "Rapport au format Word",
      "Présentation PowerPoint",
    ],
  },
  {
    id: "ebios-rm",
    titre: "Analyse de risques avec EBIOS Risk Manager",
    categorie: "Gestion des risques, ENSPY",
    statut: "Terminé",
    domaine: "securite",
    resume:
      "Projet de gestion des risques selon la méthode EBIOS Risk Manager, livré sous forme de rapport structuré.",
    technologies: ["EBIOS Risk Manager", "Gestion des risques", "LaTeX", "Word"],
    description: [
      "Projet de gestion des risques réalisé selon la méthode EBIOS Risk Manager dans le cadre de la formation à l'ENSPY.",
      "Le livrable a d'abord été rédigé sous Word, puis repris sous LaTeX.",
    ],
  },
  {
    id: "reseau-4-tier-bgp",
    titre: "Laboratoires réseau et sécurité sous EVE-NG",
    categorie: "Travaux pratiques réseau, ENSPY",
    statut: "Projet académique, partiellement en cours",
    domaine: "securite",
    resume:
      "Laboratoires simulés sous EVE-NG : architecture hiérarchique à quatre niveaux avec sortie BGP et pare-feu FortiGate (topologie 4-tier_Egress_PA_03), laboratoire MPLS-VPN et laboratoire à deux pare-feu Palo Alto.",
    technologies: [
      "EVE-NG",
      "BGP",
      "Réseau hiérarchique",
      "FortiGate",
      "MPLS-VPN",
      "Palo Alto",
      "Visio",
      "LaTeX",
    ],
    description: [
      "Série de laboratoires réseau et sécurité réalisés sous EVE-NG. Le premier construit une architecture hiérarchique à quatre niveaux (accès, agrégation, cœur, sortie) avec routage BGP et pare-feu FortiGate, selon la topologie 4-tier_Egress_PA_03.",
      "Les autres travaux comprennent un laboratoire MPLS-VPN et un laboratoire avec deux pare-feu Palo Alto (LAB_SEC_PA_v03, en cours). Des travaux pratiques sur équipements physiques ont démarré fin septembre 2026.",
    ],
    pointsCles: [
      "Architecture à quatre niveaux : accès, agrégation, cœur, sortie",
      "Routage BGP et pare-feu FortiGate",
      "Laboratoire MPLS-VPN",
      "Laboratoire à deux pare-feu Palo Alto (en cours)",
      "Travaux pratiques sur équipements physiques (en cours)",
      "Dossier d'architecture technique au format Visio, feuilles N0 à N3",
      "Documents d'exploitation et d'architecture technique en LaTeX",
    ],
  },
  {
    id: "ceh-system-hacking",
    titre: "Rapport CEH v13, module 06 : System Hacking",
    categorie: "Certification préparée, ENSPY",
    statut: "Terminé",
    domaine: "securite",
    resume:
      "Rapport de module illustré par 60 captures d'écran documentant les manipulations réalisées.",
    technologies: ["CEH v13", "System Hacking", "LaTeX"],
    description: [
      "Rapport du module 06 « System Hacking » du programme CEH v13, préparé dans le cadre de la formation à l'ENSPY. Il documente les manipulations réalisées au moyen de 60 captures d'écran.",
    ],
  },
  {
    id: "evaluation-en-ligne-securisee",
    titre: "Plateforme d'évaluation en ligne sécurisée",
    categorie: "Mémoire de stage, cellule informatique d'ICORP",
    statut: "En conception",
    role: "Stagiaire à la cellule informatique d'ICORP, dans le cadre du stage académique à l'ENSPY",
    domaine: "securite",
    resume:
      "Thème de mon mémoire de niveau 5 : une plateforme d'évaluation en ligne pour les concours blancs, conçue autour de l'intégrité des épreuves et de la prévention de la fraude.",
    technologies: ["Sécurité applicative", "Intégrité des épreuves", "Anti-fraude"],
    description: [
      "Plateforme d'évaluation en ligne destinée aux concours blancs, dont l'étude constitue le thème de mémoire retenu pour le stage académique effectué à la cellule informatique d'ICORP.",
      "Les objectifs sont de garantir l'intégrité des épreuves et de prévenir la fraude lors des concours blancs.",
    ],
  },
  {
    id: "brixschool",
    titre: "EDUBRIX, gestion d'établissements scolaires",
    categorie: "Brix Studio",
    statut: "En conception",
    role: "Fondateur unique",
    domaine: "developpement",
    resume:
      "Plateforme SaaS bilingue (français et anglais) de gestion scolaire pour les établissements secondaires camerounais, couvrant les sous-systèmes francophone et anglophone. Elle vise à numériser une administration scolaire encore largement sur papier.",
    technologies: [
      "Cloudflare Workers",
      "D1",
      "KV",
      "Multi-tenant",
      "RBAC",
      "React",
      "TypeScript",
      "Supabase",
      "Laravel",
    ],
    description: [
      "Application de gestion scolaire pensée pour le contexte camerounais et la zone CEMAC : modules par profil d'utilisateur, contrôle d'accès par rôle et schémas SQL complets. Le projet est aussi désigné sous les noms BrixSchool, EduBrix et Alanya School Manager. La première version prévoit la supervision des enseignants et des présences des élèves, les notes et bulletins, ainsi que les finances (encaissements en espèces et suivi des impayés).",
      "L'architecture est conçue sur la pile Cloudflare (Workers, D1, KV), avec un modèle multi-tenant « silo » : une base de données par établissement et un plan de contrôle partagé.",
      "Le projet reprend de zéro des versions antérieures, réalisées avec Laravel, puis avec Lovable, puis avec React et Supabase, en conservant les règles métier validées. Les travaux de conception (cadrage, acteurs et parcours, règles métier) sont terminés ; le design puis le code suivent.",
    ],
    pointsCles: [
      "Deux sous-systèmes couverts : francophone et anglophone",
      "Une base de données par établissement, avec un plan de contrôle partagé",
      "Résolution des établissements par sous-domaine",
      "Journal d'audit en ajout seul, avec détection d'altération par somme de contrôle",
      "Codes de niveaux canoniques associés à des libellés bilingues",
      "Conception terminée : cadrage, acteurs et parcours, règles métier",
    ],
  },
  {
    id: "tutorlab",
    titre: "TutorLab, mise en relation entre tuteurs et familles",
    categorie: "Projet porté à quatre, Yaoundé",
    statut: "En lancement",
    role: "Co-promoteur (projet porté à quatre)",
    domaine: "developpement",
    resume:
      "Service d'intermédiation de cours à domicile à Yaoundé, qui met en relation des familles et des répétiteurs, avec paiement par Mobile Money (MTN MoMo, Orange Money) en FCFA.",
    technologies: [
      "Mobile Money",
      "FCFA",
      "Mise en relation",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "PostgreSQL",
    ],
    description: [
      "TutorLab est un service d'intermédiation de cours à domicile à Yaoundé, qui met en relation des familles et des répétiteurs. Il intègre des paiements par Mobile Money (MTN MoMo et Orange Money) en FCFA.",
      "Le projet est porté à quatre. Les réalisations comprennent un système de design nommé « Trajectoire », une application web et la base de données qui la soutient.",
    ],
    pointsCles: [
      "Système de design « Trajectoire » : fond sombre, accent vert lime, police Clash Display",
      "Application web en Vite, React, TypeScript, Tailwind CSS et Framer Motion",
      "Base de données Supabase (PostgreSQL) avec politiques de sécurité par ligne (RLS)",
      "Supports de communication",
    ],
  },
  {
    id: "near2ride",
    titre: "Near2Ride, véhicule et conducteur à proximité",
    categorie: "Projet personnel",
    statut: "Concept",
    role: "Concepteur",
    domaine: "developpement",
    resume:
      "Permettre à chacun de trouver et de réserver, à quelques pas de son point de départ, le véhicule et/ou le conducteur dont il a besoin pour se déplacer.",
    technologies: ["Mobilité", "Réservation", "Géolocalisation"],
    description: [
      "Plateforme permettant de trouver et de réserver, à proximité immédiate du point de départ (à pied), le véhicule et/ou le conducteur nécessaire à un déplacement.",
      "Le projet est au stade de concept.",
    ],
  },
  {
    id: "hn-school",
    titre: "HN-School, gestion d'une école primaire",
    categorie: "Application de gestion scolaire",
    statut: "En cours",
    domaine: "developpement",
    resume:
      "Application web Laravel de gestion d'une école primaire : élèves, enseignants, parents, paiements, évaluations, présences et bulletins, avec un espace distinct pour chaque rôle.",
    technologies: [
      "Laravel",
      "PHP",
      "Blade",
      "MySQL",
      "Tailwind CSS",
      "Alpine.js",
      "Spatie Permission",
    ],
    description: [
      "Application web Laravel de gestion d'école, couvrant la crèche, la maternelle et le primaire (sections anglophone, francophone et bilingue). Elle gère les élèves, les parents, les enseignants, les classes, les paiements et scolarités, les évaluations, les présences, les bulletins, l'emploi du temps et la messagerie.",
      "Six rôles disposent chacun d'un espace isolé : administration, scolarité, finance, enseignant, parent et élève. Parmi les évolutions restantes figurent les bulletins avec cachet ou signature numérique ainsi que des rapports et statistiques consolidés.",
    ],
    pointsCles: [
      "Six rôles et espaces isolés, gérés avec Spatie Laravel Permission",
      "Notation adaptée à la section : barème francophone ou anglophone",
      "Bulletins imprimables depuis le navigateur",
      "Emploi du temps interactif, bibliothèque et vie scolaire",
      "Manuel utilisateur disponible dans le dépôt",
    ],
    github: "https://github.com/FarelMedjo/HN-school",
  },
  {
    id: "maquette-medicale",
    titre: "Maquette d'application médicale",
    categorie: "Maquette d'interface",
    statut: "Projet de conception",
    domaine: "developpement",
    resume: "Maquette d'application médicale réalisée sous Figma et Flutter.",
    technologies: ["Figma", "Flutter"],
  },
  {
    // Masquée : à publier seulement sur décision de Farel (visible: true).
    id: "transmission-fichiers-securisee",
    titre: "Transmission sécurisée de fichiers pour scrutateurs",
    categorie: "Plateforme web sécurisée",
    statut: "En cours",
    domaine: "securite",
    visible: false,
    resume:
      "Fondations d'un système de transmission sécurisée de fichiers : site institutionnel, schéma PostgreSQL sur Supabase, sécurité par ligne (RLS) et stockage privé.",
    technologies: [
      "Supabase",
      "PostgreSQL",
      "RLS",
      "Stockage privé",
      "React",
      "Vite",
      "Tailwind CSS",
    ],
    description: [
      "Les fondations du système sont posées : un site institutionnel bilingue (français et anglais), un schéma PostgreSQL sur Supabase, la sécurité au niveau des lignes (RLS) et un stockage privé.",
      "Les fichiers déposés sont conservés dans un espace privé. Ils ne sont accessibles qu'à leur propriétaire et aux administrateurs, et se téléchargent par des liens signés temporaires.",
    ],
    pointsCles: [
      "Contrôle d'accès appliqué côté serveur par la sécurité par ligne (RLS)",
      "Stockage privé, sans URL publique",
      "Liens de téléchargement signés et temporaires",
    ],
    github: "https://github.com/FarelMedjo/Mouvement-Kamerun",
  },
  {
    id: "conseil-visibilite-numerique",
    titre: "Conseil en visibilité numérique pour une entreprise de formation immobilière",
    categorie: "Mission de conseil, client anonymisé",
    statut: "En cours",
    role: "Consultant digital",
    domaine: "missions",
    // Nom du client : laissé vide, à renseigner seulement avec son accord.
    clientName: "",
    resume:
      "Mission de conseil en visibilité numérique pour une entreprise américaine de formation immobilière : analytique, référencement, contenus et lancement d'un blog.",
    technologies: [
      "GA4",
      "Google Search Console",
      "Bing Webmaster Tools",
      "IndexNow",
      "SEO",
      "Wix",
      "LaTeX",
    ],
    description: [
      "Mission de conseil en visibilité numérique pour une entreprise américaine de formation immobilière. Elle porte sur la mesure d'audience, le référencement naturel, les contenus et les appels à l'action du site.",
      "Le premier sprint a donné lieu à deux livrables : un rapport LaTeX de 16 pages et une présentation de 19 diapositives.",
    ],
    pointsCles: [
      "Mise en place et vérification de l'analytique : GA4, Google Search Console, Bing Webmaster Tools et IndexNow",
      "Optimisation SEO : levée d'un blocage d'indexation, sitemap, balises titre et méta, image de partage",
      "Correction des appels à l'action",
      "Création d'un lead magnet PDF, avec automatisation de sa livraison sur Wix",
      "Lancement d'un blog (premiers articles publiés) et correction de contenus",
      "Rapport LaTeX de 16 pages et présentation de 19 diapositives",
    ],
  },
  {
    id: "audit-sites-enseignement-superieur",
    titre: "Audit et modernisation de sites web d'établissements d'enseignement supérieur",
    categorie: "Audit de sites web, Cameroun",
    statut: "En cours",
    domaine: "missions",
    resume:
      "Diagnostics techniques et audits détaillés de sites web d'établissements d'enseignement supérieur privés au Cameroun, restitués par des présentations destinées aux clients.",
    technologies: ["Audit technique", "Sites web", "Présentations client"],
    description: [
      "Mission d'audit et de modernisation de sites web d'établissements d'enseignement supérieur privés au Cameroun.",
    ],
    pointsCles: [
      "Diagnostics techniques de sites",
      "Audit détaillé",
      "Présentations client, dont une de 14 diapositives",
      "Rédaction de messages de démarchage",
    ],
  },
  {
    id: "albedo-studio",
    titre: "Albedo Studio, agence de services digitaux",
    categorie: "Agence de services digitaux",
    statut: "En lancement",
    domaine: "missions",
    resume:
      "Agence de services digitaux : sites web, marketing digital, affiches, portfolios, gestion de pages sur les réseaux sociaux, création et montage vidéo, développement web et mobile.",
    technologies: [
      "Sites web",
      "Marketing digital",
      "Réseaux sociaux",
      "Montage vidéo",
      "Développement web et mobile",
    ],
  },
  {
    id: "automates-operations",
    titre: "Opérations sur les automates finis",
    categorie: "Travaux pratiques INF3421",
    statut: "Projet académique",
    domaine: "developpement",
    resume:
      "Bibliothèque Python et interface en ligne de commande implémentant les opérations classiques sur les automates finis (AFD, AFN et ε-AFN) et les expressions régulières.",
    technologies: ["Python", "pytest", "Automates finis", "Expressions régulières", "Graphviz"],
    description: [
      "Travaux pratiques INF3421 : une bibliothèque Python, accompagnée d'une interface interactive en ligne de commande, qui implémente les opérations classiques sur les automates finis déterministes, non déterministes et à transitions ε. Elle n'utilise que la bibliothèque standard de Python ; Graphviz est facultatif et sert à exporter les automates en images.",
      "Les automates se chargent depuis des fichiers JSON ou se saisissent à la main, et les résultats s'affichent sous forme de tables de transitions.",
    ],
    pointsCles: [
      "Constructions de Thompson et de Glushkov, à partir d'une expression régulière",
      "Déterminisation, complétion, émondage et minimisation (algorithme de Moore)",
      "Union, intersection, complément, concaténation, étoile et différence",
      "Extraction d'une expression régulière par élimination d'états, et résolution de systèmes d'équations (lemme d'Arden)",
      "Suite de tests automatisés avec pytest",
    ],
    github: "https://github.com/FarelMedjo/AUTOMATES",
  },
  {
    id: "cours-investigation-numerique",
    titre: "Travaux du cours Théories et pratiques de l'investigation numérique",
    categorie: "Travaux de cours, investigation numérique",
    statut: "Projet académique",
    domaine: "securite",
    resume:
      "Travaux rendus dans le cadre d'un cours d'investigation numérique : notes d'exposés, résumé de synthèse, travaux à rendre, rapport d'expertise et rapport de laboratoire.",
    mention:
      "Fork du dépôt de cours MaletYon/SEC4052 : le cours et ses supports sont l'œuvre de l'auteur d'origine, les travaux rendus sont ceux de Farel M.",
    technologies: [
      "Investigation numérique",
      "LaTeX",
      "Entropie de Shannon",
      "Cryptographie post-quantique",
    ],
    description: [
      "Dépôt des travaux rendus dans un cours d'investigation numérique, rédigés en LaTeX. Les exposés abordent notamment l'utilité de l'investigation numérique en police judiciaire, la reconnaissance faciale et les deepfakes ; les travaux à rendre mêlent réflexion épistémologique et calculs, dont celui de l'entropie de Shannon.",
    ],
    pointsCles: [
      "Notes d'exposés",
      "Résumé de synthèse du cours",
      "Deux travaux à rendre (TAF N1 et N2)",
      "Rapport d'expertise sur une étude de cas judiciaire",
      "Rapport de laboratoire (laboratoire 5)",
    ],
    github: "https://github.com/FarelMedjo/Forensic",
  },
  {
    id: "ressources-concours-icorp",
    titre: "Enseignement et ressources pour la préparation aux concours",
    categorie: "ICORP, classe préparatoire",
    statut: "En cours",
    role: "Coordinateur académique et enseignant",
    domaine: "ressources",
    resume:
      "Enseignement et production de ressources pour la préparation aux concours : corrigés d'examens, exercices originaux, cours et fiches pédagogiques.",
    technologies: ["LaTeX", "Word", "PDF", "Mathématiques", "Informatique"],
    description: [
      "Enseignement et production de supports pédagogiques pour la préparation aux concours à ICORP, en tant que coordinateur académique et enseignant.",
    ],
    pointsCles: [
      "Corrigés d'examens de mathématiques en LaTeX et Word",
      "Propositions de corrigés pour les concours d'entrée AHN-ING et LSI-AHN (session 2026), avec graphiques et équations",
      "Exercices originaux pour des concours blancs",
      "Cours de culture générale sur l'intelligence artificielle (9 pages), avec des développements africains et camerounais",
      "Supports de cours de tests psychotechniques",
      "Fiches pédagogiques PDF : probabilités, sécurité informatique, réseaux, bases de données, modèles OSI et TCP/IP",
    ],
  },
  {
    id: "style-cours-latex",
    titre: "Feuille de style LaTeX institutionnelle Style_cours.sty",
    categorie: "Outil de rédaction pour les rapports de l'école",
    domaine: "ressources",
    resume:
      "Audit, corrections et encapsulation de la feuille de style Style_cours.sty (version 2.0) dans une compétence réutilisable pour les rapports de l'école.",
    technologies: ["LaTeX", "pdfLaTeX", "XeLaTeX", "tcolorbox", "biblatex"],
    pointsCles: [
      "Audit et corrections de la version 2.0",
      "Compilation avec pdfLaTeX et XeLaTeX",
      "Environnements tcolorbox",
      "Bibliographie avec biblatex",
    ],
  },
  {
    id: "beamer-brix-studio",
    titre: "Présentation Beamer sur Brix Studio et BrixCore",
    categorie: "Cours d'urbanisation du système d'information",
    statut: "Projet académique",
    domaine: "ressources",
    resume:
      "Présentation Beamer sur Brix Studio et BrixCore, réalisée pour le cours d'urbanisation du système d'information.",
    technologies: ["Beamer", "LaTeX", "TikZ"],
    pointsCles: ["Palette vert lime", "Schémas TikZ", "Notes de présentateur"],
  },
];

/* Projets effectivement publiés (les entrées avec visible: false sont écartées). */
export const projetsVisibles = projets.filter((p) => p.visible !== false);

/* ------------------------------------------------------------------ */
/* Chiffres clés affichés sous l'accueil                               */
/* ------------------------------------------------------------------ */

export const chiffres = [
  { valeur: "5e", libelle: "année d'ingénieur à l'ENSPY" },
  { valeur: String(projetsVisibles.length), libelle: "projets et réalisations" },
  { valeur: "39", libelle: "pages pour le rapport d'investigation" },
  { valeur: "CEH", libelle: "v13, certification préparée" },
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
    periode: "2026 – 2027",
    titre: "Élève ingénieur en 5e année, Cybersécurité et Investigation Numérique",
    lieu: "École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)",
    texte:
      "Formation d'ingénieur : investigation numérique, hacking éthique, gestion des risques, réseaux, cryptographie et urbanisation des systèmes d'information.",
  },
  {
    periode: "Niveau 5",
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
      "Investigation numérique forensique",
      "Hacking éthique (CEH v13)",
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
      "MPLS-VPN",
      "Pare-feu FortiGate",
      "Architecture réseau hiérarchique (4 niveaux)",
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
      "Next.js",
      "SQL et PostgreSQL",
    ],
  },
  {
    domaine: "Conception et rédaction",
    elements: [
      "Figma",
      "LaTeX",
      "Documents Word et PDF",
      "Présentations Beamer et PowerPoint",
      "Conception logicielle (règles métier, modélisation)",
      "Architecture multi-tenant",
      "Contrôle d'accès et journal d'audit (RBAC, RLS)",
      "Documentation technique (DAT, DEX, DTA)",
      "Microsoft Visio",
      "Systèmes de design",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Discours par public                                                 */
/* ------------------------------------------------------------------ */

export const audiences: Record<
  Audience,
  {
    libelle: string;
    disponibilite: string;
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
    disponibilite: "Disponible pour un stage de fin de formation",
    titre:
      "Étudiant ingénieur en cybersécurité, à la recherche d'un stage de fin de formation.",
    texte:
      "Je suis en cinquième année à l'École Nationale Supérieure Polytechnique de Yaoundé, filière Cybersécurité et Investigation Numérique. Je recherche un stage dans le secteur bancaire, les télécommunications ou l'administration publique, où je pourrai mettre en pratique l'analyse de risques, l'investigation numérique et la sécurisation d'applications.",
    cta: { libelle: "Proposer un stage", href: mailto("Proposition de stage") },
    introProjets:
      "Travaux menés pendant ma formation et dans mes projets personnels, classés par pertinence pour un poste en sécurité.",
    ordreSections: ["projets", "competences", "parcours", "services", "contact"],
    ordreProjets: [
      "forensique-metasploitable",
      "ebios-rm",
      "reseau-4-tier-bgp",
      "ceh-system-hacking",
      "cours-investigation-numerique",
      "evaluation-en-ligne-securisee",
      "transmission-fichiers-securisee",
      "automates-operations",
      "brixschool",
      "hn-school",
      "tutorlab",
      "near2ride",
      "maquette-medicale",
      "conseil-visibilite-numerique",
      "audit-sites-enseignement-superieur",
      "albedo-studio",
      "ressources-concours-icorp",
      "style-cours-latex",
      "beamer-brix-studio",
    ],
  },
  client: {
    libelle: "Client",
    disponibilite: "Disponible pour de nouveaux projets web",
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
      "hn-school",
      "tutorlab",
      "albedo-studio",
      "conseil-visibilite-numerique",
      "audit-sites-enseignement-superieur",
      "near2ride",
      "maquette-medicale",
      "evaluation-en-ligne-securisee",
      "transmission-fichiers-securisee",
      "forensique-metasploitable",
      "ebios-rm",
      "reseau-4-tier-bgp",
      "ceh-system-hacking",
      "cours-investigation-numerique",
      "automates-operations",
      "ressources-concours-icorp",
      "style-cours-latex",
      "beamer-brix-studio",
    ],
  },
  academique: {
    libelle: "Jury académique",
    disponibilite: "Élève ingénieur en 5e année à l'ENSPY",
    titre:
      "Un parcours d'ingénieur centré sur la sécurité, les réseaux et les systèmes d'information.",
    texte:
      "Je suis en cinquième année de formation d'ingénieur à l'ENSPY, filière Cybersécurité et Investigation Numérique. Ce portfolio rassemble mes travaux pratiques, mes rapports techniques et mes projets de développement, ainsi que mon activité d'enseignement en classe préparatoire aux concours.",
    cta: { libelle: "Consulter le parcours", href: "#parcours" },
    introProjets:
      "Travaux pratiques, rapports techniques et projets de développement, classés du plus académique au plus appliqué.",
    ordreSections: ["parcours", "projets", "competences", "services", "contact"],
    ordreProjets: [
      "forensique-metasploitable",
      "cours-investigation-numerique",
      "reseau-4-tier-bgp",
      "ebios-rm",
      "ceh-system-hacking",
      "automates-operations",
      "evaluation-en-ligne-securisee",
      "transmission-fichiers-securisee",
      "ressources-concours-icorp",
      "style-cours-latex",
      "beamer-brix-studio",
      "brixschool",
      "hn-school",
      "tutorlab",
      "near2ride",
      "maquette-medicale",
      "conseil-visibilite-numerique",
      "audit-sites-enseignement-superieur",
      "albedo-studio",
    ],
  },
};
