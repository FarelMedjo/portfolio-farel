/*
 * Contenu du portfolio de Farel M. / Content of Farel M.'s portfolio.
 *
 * Ce fichier est le seul à modifier pour mettre à jour le site :
 * identité, projets, services, parcours, compétences et discours par public.
 *
 * Le site est bilingue. Chaque texte visible s'écrit t("français", "english").
 * Les noms propres et les noms d'outils restent en chaîne simple : "React".
 */

/* ------------------------------------------------------------------ */
/* Langues et résolution des textes                                    */
/* ------------------------------------------------------------------ */

export type Langue = "fr" | "en";

export const langues: Langue[] = ["fr", "en"];
export const langueParDefaut: Langue = "fr";

/* Nom de la langue dans sa propre langue, et code court pour le bouton. */
export const nomsLangues: Record<Langue, string> = {
  fr: "Français",
  en: "English",
};
export const codesLangues: Record<Langue, string> = { fr: "FR", en: "EN" };

/* Code de langue complet, pour l'attribut lang et les métadonnées. */
export const codesComplets: Record<Langue, string> = {
  fr: "fr-FR",
  en: "en-US",
};

export type Texte = { fr: string; en: string };

const t = (fr: string, en: string): Texte => ({ fr, en });

/* Forme d'une valeur une fois la langue choisie : chaque Texte devient
   une simple chaîne, le reste de la structure est conservé. */
export type Resolu<X> = X extends Texte
  ? string
  : X extends readonly (infer U)[]
    ? Resolu<U>[]
    : X extends object
      ? { -readonly [K in keyof X]: Resolu<X[K]> }
      : X;

function estTexte(valeur: unknown): valeur is Texte {
  return (
    typeof valeur === "object" &&
    valeur !== null &&
    typeof (valeur as Texte).fr === "string" &&
    typeof (valeur as Texte).en === "string"
  );
}

function resoudreValeur(valeur: unknown, langue: Langue): unknown {
  if (Array.isArray(valeur)) {
    return valeur.map((element) => resoudreValeur(element, langue));
  }
  if (estTexte(valeur)) return valeur[langue];
  if (typeof valeur === "object" && valeur !== null) {
    const sortie: Record<string, unknown> = {};
    for (const [cle, element] of Object.entries(valeur)) {
      sortie[cle] = resoudreValeur(element, langue);
    }
    return sortie;
  }
  return valeur;
}

/* Remplace tous les Texte d'une structure par la version demandée. */
export function resoudre<X>(valeur: X, langue: Langue): Resolu<X> {
  return resoudreValeur(valeur, langue) as Resolu<X>;
}

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
  titre: t(
    "Cybersécurité, investigation numérique et développement web",
    "Cybersecurity, digital forensics and web development"
  ),
  localisation: t("Yaoundé, Cameroun", "Yaoundé, Cameroon"),
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

/* ------------------------------------------------------------------ */
/* Métadonnées de la page (titre de l'onglet, référencement)           */
/* ------------------------------------------------------------------ */

export const meta = {
  titre: t(
    "Farel M | Cybersécurité, investigation numérique et développement web",
    "Farel M | Cybersecurity, digital forensics and web development"
  ),
  description: t(
    "Portfolio de Farel M, élève ingénieur en cybersécurité et investigation numérique à l'ENSPY (Yaoundé) : projets, services de développement web, parcours et compétences.",
    "Portfolio of Farel M, engineering student in cybersecurity and digital forensics at ENSPY (Yaoundé): projects, web development services, background and skills."
  ),
  descriptionCourte: t(
    "Projets, services, parcours et compétences de Farel M, élève ingénieur à l'ENSPY, Yaoundé.",
    "Projects, services, background and skills of Farel M, engineering student at ENSPY, Yaoundé."
  ),
};

/* ------------------------------------------------------------------ */
/* Textes de l'interface                                               */
/* ------------------------------------------------------------------ */

export const interfaceTextes = {
  allerAuContenu: t("Aller au contenu", "Skip to content"),
  navAria: t("Sections du portfolio", "Portfolio sections"),
  themeClair: t("Passer au thème clair", "Switch to the light theme"),
  themeSombre: t("Passer au thème sombre", "Switch to the dark theme"),
  themeClairCourt: t("Thème clair", "Light theme"),
  themeSombreCourt: t("Thème sombre", "Dark theme"),
  changerLangue: t("Lire le site en anglais", "Read this site in French"),
  langueAria: t("Changer de langue", "Change language"),
  vousEtes: t("Vous êtes", "You are"),
  voirProjets: t("Voir les projets", "View the projects"),
  telechargerCv: t("Télécharger le CV", "Download the CV"),
  filtrerProjets: t("Filtrer les projets", "Filter the projects"),
  technologies: t("Technologies et sujets", "Technologies and topics"),
  pointsCles: t("Points clés", "Key points"),
  liensProjet: t("Liens du projet", "Project links"),
  detailsProjet: t("Détails du projet", "Project details"),
  periode: t("Période", "Period"),
  client: t("Client", "Client"),
  role: t("Rôle", "Role"),
  codeSource: t("Code source (GitHub)", "Source code (GitHub)"),
  demonstration: t("Démonstration", "Live demo"),
  consulterProjet: t("Consulter le projet", "View the project"),
  servicesIntro: t(
    "Prestations proposées aux établissements d'enseignement, aux organisations et aux entreprises du Cameroun.",
    "Services offered to education institutions, organisations and companies in Cameroon."
  ),
  contactSurtitre: t("Contact", "Contact"),
  contactTitreLigne1: t(
    "Un stage, un projet, une question ?",
    "An internship, a project, a question?"
  ),
  contactTitreLigne2: t(
    "Écrivez-moi directement.",
    "Write to me directly."
  ),
  whatsapp: t("Écrire sur WhatsApp", "Message me on WhatsApp"),
  retourEnHaut: t("Retour en haut ↑", "Back to top ↑"),
  /* Terminal de la page d'accueil. */
  terminal: {
    fichierProfil: t("profil.txt", "profile.txt"),
    ecole: t("école", "school"),
    filiere: t("filière", "field"),
    niveau: t("niveau", "year"),
    studio: t("studio", "studio"),
    ecoleValeur: t("ENSPY, Yaoundé", "ENSPY, Yaoundé"),
    filiereValeur: t(
      "Cybersécurité et investigation numérique",
      "Cybersecurity and digital forensics"
    ),
    niveauValeur: t("5e année", "5th year"),
    studioValeur: t("ALBEDO Studio", "ALBEDO Studio"),
  },
};

export const libellesSections: Record<SectionId, Texte> = {
  projets: t("Projets", "Projects"),
  services: t("Services", "Services"),
  parcours: t("Parcours", "Background"),
  competences: t("Compétences", "Skills"),
  contact: t("Contact", "Contact"),
};

/* ------------------------------------------------------------------ */
/* Projets                                                             */
/* ------------------------------------------------------------------ */

export type Domaine = "securite" | "developpement" | "missions" | "ressources";

export const libellesDomaines: Record<Domaine | "tous", Texte> = {
  tous: t("Tous", "All"),
  securite: t("Sécurité et réseaux", "Security and networks"),
  developpement: t("Développement", "Development"),
  missions: t("Missions et freelance", "Assignments and freelance"),
  ressources: t(
    "Enseignement et autres réalisations",
    "Teaching and other work"
  ),
};

/* Avancement d'un projet : la clé sert au code, le libellé à l'affichage
   et le ton à la couleur du badge. */
export type StatutCle =
  | "termine"
  | "enCours"
  | "enConception"
  | "enLancement"
  | "concept"
  | "conception"
  | "academique"
  | "academiquePartiel";

export type TonStatut = "ok" | "encours" | "neutre";

export const statuts: Record<StatutCle, { libelle: Texte; ton: TonStatut }> = {
  termine: { libelle: t("Terminé", "Completed"), ton: "ok" },
  enCours: { libelle: t("En cours", "In progress"), ton: "encours" },
  enConception: { libelle: t("En conception", "In design"), ton: "encours" },
  enLancement: { libelle: t("En lancement", "Launching"), ton: "encours" },
  concept: { libelle: t("Concept", "Concept"), ton: "neutre" },
  conception: {
    libelle: t("Projet de conception", "Design project"),
    ton: "neutre",
  },
  academique: {
    libelle: t("Projet académique", "Academic project"),
    ton: "neutre",
  },
  academiquePartiel: {
    libelle: t(
      "Projet académique, partiellement en cours",
      "Academic project, partly in progress"
    ),
    ton: "neutre",
  },
};

/* Capture d'écran : déposez le fichier dans public/projects/<id>/ puis
   indiquez son chemin, par exemple "/projects/<id>/accueil.png". */
export type ImageProjet = { src: string; alt: Texte };

export type LienProjet = { libelle: Texte; url: string };

export type Projet = {
  /* Identifiant stable, utilisé aussi comme slug et comme nom du dossier
     public/projects/<id>/. */
  id: string;
  titre: Texte;
  categorie: Texte;
  statut?: StatutCle;
  domaine: Domaine;
  resume: Texte;
  /* Chaîne simple pour un nom d'outil, t(...) pour un terme traduisible. */
  technologies: (string | Texte)[];
  lien?: string;
  /* Champs optionnels : rien ne s'affiche tant qu'ils sont vides. */
  role?: Texte;
  /* Un élément par paragraphe. */
  description?: Texte[];
  pointsCles?: Texte[];
  periode?: Texte;
  /* Nom du client, à renseigner uniquement avec son accord. Vide par défaut. */
  clientName?: string;
  /* Précision d'origine ou de contexte, par exemple pour un fork. */
  mention?: Texte;
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
    titre: t(
      "Investigation numérique sur un serveur Metasploitable 2",
      "Digital forensic investigation on a Metasploitable 2 server"
    ),
    categorie: t(
      "Cours de hacking éthique, ENSPY",
      "Ethical hacking course, ENSPY"
    ),
    statut: "termine",
    domaine: "securite",
    resume: t(
      "Investigation menée sur un serveur volontairement vulnérable : démarche, constats et conclusions consignés dans un rapport de 39 pages, accompagné d'une présentation.",
      "Investigation carried out on a deliberately vulnerable server: method, findings and conclusions recorded in a 39-page report, together with a slide deck."
    ),
    technologies: [
      t("Investigation numérique", "Digital forensics"),
      "Metasploitable 2",
      "LaTeX",
      "Word",
      "PowerPoint",
    ],
    description: [
      t(
        "Investigation numérique menée dans le cadre du cours de hacking éthique sur un serveur Metasploitable 2, machine volontairement vulnérable. La démarche, les constats et les conclusions sont consignés dans un rapport de 39 pages rédigé en LaTeX.",
        "Digital forensic investigation carried out for the ethical hacking course on a Metasploitable 2 server, a deliberately vulnerable machine. The method, findings and conclusions are recorded in a 39-page report written in LaTeX."
      ),
      t(
        "Le travail a donné lieu à trois livrables : le rapport LaTeX, un rapport au format Word et une présentation PowerPoint.",
        "The work produced three deliverables: the LaTeX report, a Word version of the report and a PowerPoint presentation."
      ),
    ],
    pointsCles: [
      t("Rapport LaTeX de 39 pages", "39-page LaTeX report"),
      t("Rapport au format Word", "Word version of the report"),
      t("Présentation PowerPoint", "PowerPoint presentation"),
    ],
  },
  {
    id: "ebios-rm",
    titre: t(
      "Analyse de risques avec EBIOS Risk Manager",
      "Risk analysis with EBIOS Risk Manager"
    ),
    categorie: t("Gestion des risques, ENSPY", "Risk management, ENSPY"),
    statut: "termine",
    domaine: "securite",
    resume: t(
      "Projet de gestion des risques selon la méthode EBIOS Risk Manager, livré sous forme de rapport structuré.",
      "Risk management project following the EBIOS Risk Manager method, delivered as a structured report."
    ),
    technologies: [
      "EBIOS Risk Manager",
      t("Gestion des risques", "Risk management"),
      "LaTeX",
      "Word",
    ],
    description: [
      t(
        "Projet de gestion des risques réalisé selon la méthode EBIOS Risk Manager dans le cadre de la formation à l'ENSPY.",
        "Risk management project carried out with the EBIOS Risk Manager method as part of the engineering programme at ENSPY."
      ),
      t(
        "Le livrable a d'abord été rédigé sous Word, puis repris sous LaTeX.",
        "The deliverable was first written in Word, then reworked in LaTeX."
      ),
    ],
  },
  {
    id: "reseau-4-tier-bgp",
    titre: t(
      "Laboratoires réseau et sécurité sous EVE-NG",
      "Network and security labs in EVE-NG"
    ),
    categorie: t(
      "Travaux pratiques réseau, ENSPY",
      "Network lab work, ENSPY"
    ),
    statut: "academiquePartiel",
    domaine: "securite",
    resume: t(
      "Laboratoires simulés sous EVE-NG : architecture hiérarchique à quatre niveaux avec sortie BGP et pare-feu FortiGate (topologie 4-tier_Egress_PA_03), laboratoire MPLS-VPN et laboratoire à deux pare-feu Palo Alto.",
      "Labs simulated in EVE-NG: a four-tier hierarchical architecture with BGP egress and a FortiGate firewall (topology 4-tier_Egress_PA_03), an MPLS-VPN lab and a two-firewall Palo Alto lab."
    ),
    technologies: [
      "EVE-NG",
      "BGP",
      t("Réseau hiérarchique", "Hierarchical network"),
      "FortiGate",
      "MPLS-VPN",
      "Palo Alto",
      "Visio",
      "LaTeX",
    ],
    description: [
      t(
        "Série de laboratoires réseau et sécurité réalisés sous EVE-NG. Le premier construit une architecture hiérarchique à quatre niveaux (accès, agrégation, cœur, sortie) avec routage BGP et pare-feu FortiGate, selon la topologie 4-tier_Egress_PA_03.",
        "A series of network and security labs built in EVE-NG. The first one builds a four-tier hierarchical architecture (access, aggregation, core, egress) with BGP routing and a FortiGate firewall, following the 4-tier_Egress_PA_03 topology."
      ),
      t(
        "Les autres travaux comprennent un laboratoire MPLS-VPN et un laboratoire avec deux pare-feu Palo Alto (LAB_SEC_PA_v03, en cours). Des travaux pratiques sur équipements physiques ont démarré fin septembre 2026.",
        "The other labs include an MPLS-VPN lab and a lab with two Palo Alto firewalls (LAB_SEC_PA_v03, in progress). Lab work on physical equipment started at the end of September 2026."
      ),
    ],
    pointsCles: [
      t(
        "Architecture à quatre niveaux : accès, agrégation, cœur, sortie",
        "Four tiers: access, aggregation, core and egress"
      ),
      t(
        "Routage BGP et pare-feu FortiGate",
        "BGP routing and FortiGate firewall"
      ),
      t("Laboratoire MPLS-VPN", "MPLS-VPN lab"),
      t(
        "Laboratoire à deux pare-feu Palo Alto (en cours)",
        "Lab with two Palo Alto firewalls (in progress)"
      ),
      t(
        "Travaux pratiques sur équipements physiques (en cours)",
        "Lab work on physical equipment (in progress)"
      ),
      t(
        "Dossier d'architecture technique au format Visio, feuilles N0 à N3",
        "Technical architecture document in Visio, sheets N0 to N3"
      ),
      t(
        "Documents d'exploitation et d'architecture technique en LaTeX",
        "Operations and technical architecture documents in LaTeX"
      ),
    ],
  },
  {
    id: "ceh-system-hacking",
    titre: t(
      "Rapport CEH v13, module 06 : System Hacking",
      "CEH v13 report, module 06: System Hacking"
    ),
    categorie: t(
      "Certification préparée, ENSPY",
      "Certification in preparation, ENSPY"
    ),
    statut: "termine",
    domaine: "securite",
    resume: t(
      "Rapport de module illustré par 60 captures d'écran documentant les manipulations réalisées.",
      "Module report illustrated with 60 screenshots documenting the hands-on work."
    ),
    technologies: ["CEH v13", "System Hacking", "LaTeX"],
    description: [
      t(
        "Rapport du module 06 « System Hacking » du programme CEH v13, préparé dans le cadre de la formation à l'ENSPY. Il documente les manipulations réalisées au moyen de 60 captures d'écran.",
        "Report for module 06 “System Hacking” of the CEH v13 programme, prepared as part of the training at ENSPY. It documents the hands-on work with 60 screenshots."
      ),
    ],
  },
  {
    id: "evaluation-en-ligne-securisee",
    titre: t(
      "Plateforme d'évaluation en ligne sécurisée",
      "Secure online assessment platform"
    ),
    categorie: t(
      "Mémoire de stage, cellule informatique d'ICORP",
      "Internship thesis, ICORP IT unit"
    ),
    statut: "enConception",
    role: t(
      "Stagiaire à la cellule informatique d'ICORP, dans le cadre du stage académique à l'ENSPY",
      "Intern at the ICORP IT unit, as part of the academic internship for ENSPY"
    ),
    domaine: "securite",
    resume: t(
      "Thème de mon mémoire de niveau 5 : une plateforme d'évaluation en ligne pour les concours blancs, conçue autour de l'intégrité des épreuves et de la prévention de la fraude.",
      "The topic of my fifth-year thesis: an online assessment platform for mock entrance exams, designed around exam integrity and fraud prevention."
    ),
    technologies: [
      t("Sécurité applicative", "Application security"),
      t("Intégrité des épreuves", "Exam integrity"),
      t("Anti-fraude", "Fraud prevention"),
    ],
    description: [
      t(
        "Plateforme d'évaluation en ligne destinée aux concours blancs, dont l'étude constitue le thème de mémoire retenu pour le stage académique effectué à la cellule informatique d'ICORP.",
        "Online assessment platform for mock entrance exams; its study is the thesis topic chosen for the academic internship at the ICORP IT unit."
      ),
      t(
        "Les objectifs sont de garantir l'intégrité des épreuves et de prévenir la fraude lors des concours blancs.",
        "The goals are to guarantee exam integrity and to prevent cheating during mock entrance exams."
      ),
    ],
  },
  {
    id: "brixschool",
    titre: t(
      "EDUBRIX, gestion d'établissements scolaires",
      "EDUBRIX, school management"
    ),
    categorie: t("ALBEDO Studio", "ALBEDO Studio"),
    statut: "enConception",
    role: t("Fondateur unique", "Sole founder"),
    domaine: "developpement",
    resume: t(
      "Plateforme SaaS bilingue (français et anglais) de gestion scolaire pour les établissements secondaires camerounais, couvrant les sous-systèmes francophone et anglophone. Elle vise à numériser une administration scolaire encore largement sur papier.",
      "Bilingual (French and English) school management SaaS for Cameroonian secondary schools, covering both the francophone and the anglophone subsystem. It aims to digitise a school administration that is still largely paper-based."
    ),
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
      "PHP",
      "MySQL",
    ],
    description: [
      t(
        "Application de gestion scolaire pensée pour le contexte camerounais et la zone CEMAC : modules par profil d'utilisateur, contrôle d'accès par rôle et schémas SQL complets. Le projet est aussi désigné sous les noms BrixSchool, EduBrix et Alanya School Manager. La première version prévoit la supervision des enseignants et des présences des élèves, les notes et bulletins, ainsi que les finances (encaissements en espèces et suivi des impayés).",
        "School management application designed for the Cameroonian context and the CEMAC zone: modules per user profile, role-based access control and complete SQL schemas. The project also goes by the names BrixSchool, EduBrix and Alanya School Manager. The first version covers teacher supervision and student attendance, grades and report cards, and finances (cash collection and tracking of unpaid fees)."
      ),
      t(
        "L'architecture est conçue sur la pile Cloudflare (Workers, D1, KV), avec un modèle multi-tenant « silo » : une base de données par établissement et un plan de contrôle partagé.",
        "The architecture is built on the Cloudflare stack (Workers, D1, KV), with a “silo” multi-tenant model: one database per school and a shared control plane."
      ),
      t(
        "Le projet reprend de zéro des versions antérieures, réalisées avec Laravel, puis avec Lovable, puis avec React et Supabase, en conservant les règles métier validées. Les travaux de conception (cadrage, acteurs et parcours, règles métier) sont terminés ; le design puis le code suivent.",
        "The project restarts from scratch earlier versions built with Laravel, then with Lovable, then with React and Supabase, keeping the business rules that were validated. The design work (scoping, actors and journeys, business rules) is complete; visual design and then code follow."
      ),
      t(
        "La version Laravel est HN-School, une application web de gestion d'école couvrant la crèche, la maternelle et le primaire (sections anglophone, francophone et bilingue). Elle gère les élèves, les parents, les enseignants, les classes, les paiements et scolarités, les évaluations, les présences, les bulletins, l'emploi du temps et la messagerie. Six rôles y disposent chacun d'un espace isolé : administration, scolarité, finance, enseignant, parent et élève.",
        "The Laravel version is HN-School, a school management web application covering nursery, kindergarten and primary levels (anglophone, francophone and bilingual sections). It handles students, parents, teachers, classes, payments and school fees, assessments, attendance, report cards, timetables and messaging. Six roles each have their own isolated space: administration, student records, finance, teacher, parent and student."
      ),
    ],
    pointsCles: [
      t(
        "Deux sous-systèmes couverts : francophone et anglophone",
        "Two subsystems covered: francophone and anglophone"
      ),
      t(
        "Une base de données par établissement, avec un plan de contrôle partagé",
        "One database per school, with a shared control plane"
      ),
      t(
        "Résolution des établissements par sous-domaine",
        "Schools resolved by subdomain"
      ),
      t(
        "Journal d'audit en ajout seul, avec détection d'altération par somme de contrôle",
        "Append-only audit log, with checksum-based tamper detection"
      ),
      t(
        "Codes de niveaux canoniques associés à des libellés bilingues",
        "Canonical grade-level codes mapped to bilingual labels"
      ),
      t(
        "Conception terminée : cadrage, acteurs et parcours, règles métier",
        "Design complete: scoping, actors and journeys, business rules"
      ),
      t(
        "Version Laravel antérieure (HN-School) : six rôles et espaces isolés, gérés avec Spatie Laravel Permission",
        "Earlier Laravel version (HN-School): six roles and isolated spaces, managed with Spatie Laravel Permission"
      ),
      t(
        "Version Laravel antérieure : notation adaptée à la section (barème francophone ou anglophone) et bulletins imprimables depuis le navigateur",
        "Earlier Laravel version: section-aware grading (francophone or anglophone scale) and report cards printable from the browser"
      ),
      t(
        "Version Laravel antérieure : emploi du temps interactif, bibliothèque et vie scolaire",
        "Earlier Laravel version: interactive timetable, library and student life"
      ),
    ],
    liens: [
      {
        libelle: t(
          "Version Laravel (HN-School) sur GitHub",
          "Laravel version (HN-School) on GitHub"
        ),
        url: "https://github.com/FarelMedjo/HN-school",
      },
    ],
  },
  {
    id: "tutorlab",
    titre: t(
      "TutorLab, mise en relation entre tuteurs et familles",
      "TutorLab, matching tutors with families"
    ),
    categorie: t(
      "Projet porté à quatre, Yaoundé",
      "Four-person venture, Yaoundé"
    ),
    statut: "enLancement",
    role: t(
      "Co-promoteur (projet porté à quatre)",
      "Co-founder (four-person venture)"
    ),
    domaine: "developpement",
    resume: t(
      "Service d'intermédiation de cours à domicile à Yaoundé, qui met en relation des familles et des répétiteurs, avec paiement par Mobile Money (MTN MoMo, Orange Money) en FCFA.",
      "Home tutoring brokerage service in Yaoundé that connects families with private tutors, with Mobile Money payments (MTN MoMo, Orange Money) in CFA francs."
    ),
    technologies: [
      "Mobile Money",
      t("FCFA", "CFA franc"),
      t("Mise en relation", "Matchmaking"),
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "PostgreSQL",
    ],
    description: [
      t(
        "TutorLab est un service d'intermédiation de cours à domicile à Yaoundé, qui met en relation des familles et des répétiteurs. Il intègre des paiements par Mobile Money (MTN MoMo et Orange Money) en FCFA.",
        "TutorLab is a home tutoring brokerage service in Yaoundé that connects families with private tutors. It includes Mobile Money payments (MTN MoMo and Orange Money) in CFA francs."
      ),
      t(
        "Le projet est porté à quatre. Les réalisations comprennent un système de design nommé « Trajectoire », une application web et la base de données qui la soutient.",
        "The project is run by a team of four. Deliverables so far include a design system named “Trajectoire”, a web application and the database behind it."
      ),
    ],
    pointsCles: [
      t(
        "Système de design « Trajectoire » : fond sombre, accent vert lime, police Clash Display",
        "“Trajectoire” design system: dark background, lime green accent, Clash Display typeface"
      ),
      t(
        "Application web en Vite, React, TypeScript, Tailwind CSS et Framer Motion",
        "Web application in Vite, React, TypeScript, Tailwind CSS and Framer Motion"
      ),
      t(
        "Base de données Supabase (PostgreSQL) avec politiques de sécurité par ligne (RLS)",
        "Supabase (PostgreSQL) database with row-level security (RLS) policies"
      ),
      t("Supports de communication", "Communication materials"),
    ],
  },
  {
    id: "near2ride",
    titre: t(
      "Near2Ride, véhicule et conducteur à proximité",
      "Near2Ride, a vehicle and driver nearby"
    ),
    categorie: t("Projet personnel", "Personal project"),
    statut: "concept",
    role: t("Concepteur", "Designer"),
    domaine: "developpement",
    resume: t(
      "Permettre à chacun de trouver et de réserver, à quelques pas de son point de départ, le véhicule et/ou le conducteur dont il a besoin pour se déplacer.",
      "Letting anyone find and book, a few steps from their starting point, the vehicle and/or the driver they need to get around."
    ),
    technologies: [
      t("Mobilité", "Mobility"),
      t("Réservation", "Booking"),
      t("Géolocalisation", "Geolocation"),
    ],
    description: [
      t(
        "Plateforme permettant de trouver et de réserver, à proximité immédiate du point de départ (à pied), le véhicule et/ou le conducteur nécessaire à un déplacement.",
        "Platform for finding and booking, within walking distance of the starting point, the vehicle and/or the driver needed for a trip."
      ),
      t("Le projet est au stade de concept.", "The project is at concept stage."),
    ],
  },
  {
    id: "maquette-medicale",
    titre: t("Maquette d'application médicale", "Medical application mockup"),
    categorie: t("Maquette d'interface", "Interface mockup"),
    statut: "conception",
    domaine: "developpement",
    resume: t(
      "Maquette d'application médicale réalisée sous Figma et Flutter.",
      "Medical application mockup produced with Figma and Flutter."
    ),
    technologies: ["Figma", "Flutter"],
  },
  {
    // Masquée : à publier seulement sur décision de Farel (visible: true).
    id: "transmission-fichiers-securisee",
    titre: t(
      "Transmission sécurisée de fichiers pour scrutateurs",
      "Secure file transfer for polling station observers"
    ),
    categorie: t("Plateforme web sécurisée", "Secure web platform"),
    statut: "enCours",
    domaine: "securite",
    visible: false,
    resume: t(
      "Fondations d'un système de transmission sécurisée de fichiers : site institutionnel, schéma PostgreSQL sur Supabase, sécurité par ligne (RLS) et stockage privé.",
      "Foundations of a secure file transfer system: institutional website, PostgreSQL schema on Supabase, row-level security (RLS) and private storage."
    ),
    technologies: [
      "Supabase",
      "PostgreSQL",
      "RLS",
      t("Stockage privé", "Private storage"),
      "React",
      "Vite",
      "Tailwind CSS",
    ],
    description: [
      t(
        "Les fondations du système sont posées : un site institutionnel bilingue (français et anglais), un schéma PostgreSQL sur Supabase, la sécurité au niveau des lignes (RLS) et un stockage privé.",
        "The foundations of the system are in place: a bilingual (French and English) institutional website, a PostgreSQL schema on Supabase, row-level security (RLS) and private storage."
      ),
      t(
        "Les fichiers déposés sont conservés dans un espace privé. Ils ne sont accessibles qu'à leur propriétaire et aux administrateurs, et se téléchargent par des liens signés temporaires.",
        "Uploaded files are kept in a private space. They are accessible only to their owner and to administrators, and are downloaded through temporary signed links."
      ),
    ],
    pointsCles: [
      t(
        "Contrôle d'accès appliqué côté serveur par la sécurité par ligne (RLS)",
        "Access control enforced server-side by row-level security (RLS)"
      ),
      t(
        "Stockage privé, sans URL publique",
        "Private storage, with no public URL"
      ),
      t(
        "Liens de téléchargement signés et temporaires",
        "Signed, temporary download links"
      ),
    ],
    github: "https://github.com/FarelMedjo/Mouvement-Kamerun",
  },
  {
    id: "conseil-visibilite-numerique",
    titre: t(
      "Conseil en visibilité numérique pour une entreprise de formation immobilière",
      "Digital visibility consulting for a real estate training company"
    ),
    categorie: t(
      "Mission de conseil, client anonymisé",
      "Consulting engagement, client anonymised"
    ),
    statut: "enCours",
    role: t("Consultant digital", "Digital consultant"),
    domaine: "missions",
    // Nom du client : laissé vide, à renseigner seulement avec son accord.
    clientName: "",
    resume: t(
      "Mission de conseil en visibilité numérique pour une entreprise américaine de formation immobilière : analytique, référencement, contenus et lancement d'un blog.",
      "Digital visibility consulting engagement for a US real estate training company: analytics, SEO, content and the launch of a blog."
    ),
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
      t(
        "Mission de conseil en visibilité numérique pour une entreprise américaine de formation immobilière. Elle porte sur la mesure d'audience, le référencement naturel, les contenus et les appels à l'action du site.",
        "Digital visibility consulting engagement for a US real estate training company. It covers audience measurement, search engine optimisation, content and the calls to action on the site."
      ),
      t(
        "Le premier sprint a donné lieu à deux livrables : un rapport LaTeX de 16 pages et une présentation de 19 diapositives.",
        "The first sprint produced two deliverables: a 16-page LaTeX report and a 19-slide presentation."
      ),
    ],
    pointsCles: [
      t(
        "Mise en place et vérification de l'analytique : GA4, Google Search Console, Bing Webmaster Tools et IndexNow",
        "Analytics set up and verified: GA4, Google Search Console, Bing Webmaster Tools and IndexNow"
      ),
      t(
        "Optimisation SEO : levée d'un blocage d'indexation, sitemap, balises titre et méta, image de partage",
        "SEO work: indexing block lifted, sitemap, title and meta tags, social share image"
      ),
      t("Correction des appels à l'action", "Calls to action corrected"),
      t(
        "Création d'un lead magnet PDF, avec automatisation de sa livraison sur Wix",
        "PDF lead magnet created, with automated delivery on Wix"
      ),
      t(
        "Lancement d'un blog (premiers articles publiés) et correction de contenus",
        "Blog launched (first articles published) and content corrected"
      ),
      t(
        "Rapport LaTeX de 16 pages et présentation de 19 diapositives",
        "16-page LaTeX report and 19-slide presentation"
      ),
    ],
  },
  {
    id: "audit-sites-enseignement-superieur",
    titre: t(
      "Audit et modernisation de sites web d'établissements d'enseignement supérieur",
      "Audit and modernisation of higher education websites"
    ),
    categorie: t("Audit de sites web, Cameroun", "Website audits, Cameroon"),
    statut: "enCours",
    domaine: "missions",
    resume: t(
      "Diagnostics techniques et audits détaillés de sites web d'établissements d'enseignement supérieur privés au Cameroun, restitués par des présentations destinées aux clients.",
      "Technical diagnostics and detailed audits of the websites of private higher education institutions in Cameroon, presented back to clients as slide decks."
    ),
    technologies: [
      t("Audit technique", "Technical audit"),
      t("Sites web", "Websites"),
      t("Présentations client", "Client presentations"),
    ],
    description: [
      t(
        "Mission d'audit et de modernisation de sites web d'établissements d'enseignement supérieur privés au Cameroun.",
        "Audit and modernisation engagement on the websites of private higher education institutions in Cameroon."
      ),
    ],
    pointsCles: [
      t("Diagnostics techniques de sites", "Technical site diagnostics"),
      t("Audit détaillé", "Detailed audit"),
      t(
        "Présentations client, dont une de 14 diapositives",
        "Client presentations, including a 14-slide deck"
      ),
      t("Rédaction de messages de démarchage", "Outreach messages written"),
    ],
  },
  {
    id: "albedo-studio",
    titre: t(
      "Albedo Studio, agence de services digitaux",
      "Albedo Studio, digital services agency"
    ),
    categorie: t("Agence de services digitaux", "Digital services agency"),
    statut: "enLancement",
    domaine: "missions",
    resume: t(
      "Agence de services digitaux : sites web, marketing digital, affiches, portfolios, gestion de pages sur les réseaux sociaux, création et montage vidéo, développement web et mobile.",
      "Digital services agency: websites, digital marketing, posters, portfolios, social media page management, video production and editing, web and mobile development."
    ),
    technologies: [
      t("Sites web", "Websites"),
      t("Marketing digital", "Digital marketing"),
      t("Réseaux sociaux", "Social media"),
      t("Montage vidéo", "Video editing"),
      t("Développement web et mobile", "Web and mobile development"),
    ],
  },
  {
    id: "automates-operations",
    titre: t(
      "Opérations sur les automates finis",
      "Operations on finite automata"
    ),
    categorie: t("Travaux pratiques INF3421", "INF3421 lab project"),
    statut: "academique",
    domaine: "developpement",
    resume: t(
      "Bibliothèque Python et interface en ligne de commande implémentant les opérations classiques sur les automates finis (AFD, AFN et ε-AFN) et les expressions régulières.",
      "Python library and command-line interface implementing the classic operations on finite automata (DFA, NFA and ε-NFA) and on regular expressions."
    ),
    technologies: [
      "Python",
      "pytest",
      t("Automates finis", "Finite automata"),
      t("Expressions régulières", "Regular expressions"),
      "Graphviz",
    ],
    description: [
      t(
        "Travaux pratiques INF3421 : une bibliothèque Python, accompagnée d'une interface interactive en ligne de commande, qui implémente les opérations classiques sur les automates finis déterministes, non déterministes et à transitions ε. Elle n'utilise que la bibliothèque standard de Python ; Graphviz est facultatif et sert à exporter les automates en images.",
        "INF3421 lab project: a Python library, with an interactive command-line interface, implementing the classic operations on deterministic, non-deterministic and ε-transition finite automata. It uses only the Python standard library; Graphviz is optional and is used to export automata as images."
      ),
      t(
        "Les automates se chargent depuis des fichiers JSON ou se saisissent à la main, et les résultats s'affichent sous forme de tables de transitions.",
        "Automata are loaded from JSON files or entered by hand, and results are displayed as transition tables."
      ),
    ],
    pointsCles: [
      t(
        "Constructions de Thompson et de Glushkov, à partir d'une expression régulière",
        "Thompson and Glushkov constructions from a regular expression"
      ),
      t(
        "Déterminisation, complétion, émondage et minimisation (algorithme de Moore)",
        "Determinisation, completion, trimming and minimisation (Moore's algorithm)"
      ),
      t(
        "Union, intersection, complément, concaténation, étoile et différence",
        "Union, intersection, complement, concatenation, Kleene star and difference"
      ),
      t(
        "Extraction d'une expression régulière par élimination d'états, et résolution de systèmes d'équations (lemme d'Arden)",
        "Regular expression extraction by state elimination, and solving of equation systems (Arden's lemma)"
      ),
      t(
        "Suite de tests automatisés avec pytest",
        "Automated test suite with pytest"
      ),
    ],
    github: "https://github.com/FarelMedjo/AUTOMATES",
  },
  {
    id: "cours-investigation-numerique",
    titre: t(
      "Travaux du cours Théories et pratiques de l'investigation numérique",
      "Coursework for Theory and Practice of Digital Forensics"
    ),
    categorie: t(
      "Travaux de cours, investigation numérique",
      "Coursework, digital forensics"
    ),
    statut: "academique",
    domaine: "securite",
    resume: t(
      "Travaux rendus dans le cadre d'un cours d'investigation numérique : notes d'exposés, résumé de synthèse, travaux à rendre, rapport d'expertise et rapport de laboratoire.",
      "Work submitted for a digital forensics course: presentation notes, a synthesis summary, assignments, an expert report and a lab report."
    ),
    mention: t(
      "Fork du dépôt de cours MaletYon/SEC4052 : le cours et ses supports sont l'œuvre de l'auteur d'origine, les travaux rendus sont ceux de Farel M.",
      "Fork of the MaletYon/SEC4052 course repository: the course and its materials are the work of the original author; the submitted work is Farel M.'s."
    ),
    technologies: [
      t("Investigation numérique", "Digital forensics"),
      "LaTeX",
      t("Entropie de Shannon", "Shannon entropy"),
      t("Cryptographie post-quantique", "Post-quantum cryptography"),
    ],
    description: [
      t(
        "Dépôt des travaux rendus dans un cours d'investigation numérique, rédigés en LaTeX. Les exposés abordent notamment l'utilité de l'investigation numérique en police judiciaire, la reconnaissance faciale et les deepfakes ; les travaux à rendre mêlent réflexion épistémologique et calculs, dont celui de l'entropie de Shannon.",
        "Repository of the work submitted for a digital forensics course, written in LaTeX. The presentations cover, among other topics, the usefulness of digital forensics in criminal investigation, facial recognition and deepfakes; the assignments combine epistemological reflection with calculations, including Shannon entropy."
      ),
    ],
    pointsCles: [
      t("Notes d'exposés", "Presentation notes"),
      t("Résumé de synthèse du cours", "Synthesis summary of the course"),
      t(
        "Deux travaux à rendre (TAF N1 et N2)",
        "Two assignments (TAF N1 and N2)"
      ),
      t(
        "Rapport d'expertise sur une étude de cas judiciaire",
        "Expert report on a judicial case study"
      ),
      t("Rapport de laboratoire (laboratoire 5)", "Lab report (lab 5)"),
    ],
    github: "https://github.com/FarelMedjo/Forensic",
  },
  {
    id: "ressources-concours-icorp",
    titre: t(
      "Enseignement et ressources pour la préparation aux concours",
      "Teaching and resources for entrance exam preparation"
    ),
    categorie: t("ICORP, classe préparatoire", "ICORP, preparatory class"),
    statut: "enCours",
    role: t(
      "Coordinateur académique et enseignant",
      "Academic coordinator and teacher"
    ),
    domaine: "ressources",
    resume: t(
      "Enseignement et production de ressources pour la préparation aux concours : corrigés d'examens, exercices originaux, cours et fiches pédagogiques.",
      "Teaching and production of resources for entrance exam preparation: exam solutions, original exercises, courses and teaching sheets."
    ),
    technologies: [
      "LaTeX",
      "Word",
      "PDF",
      t("Mathématiques", "Mathematics"),
      t("Informatique", "Computer science"),
    ],
    description: [
      t(
        "Enseignement et production de supports pédagogiques pour la préparation aux concours à ICORP, en tant que coordinateur académique et enseignant.",
        "Teaching and production of educational materials for entrance exam preparation at ICORP, as academic coordinator and teacher."
      ),
    ],
    pointsCles: [
      t(
        "Corrigés d'examens de mathématiques en LaTeX et Word",
        "Mathematics exam solutions in LaTeX and Word"
      ),
      t(
        "Propositions de corrigés pour les concours d'entrée AHN-ING et LSI-AHN (session 2026), avec graphiques et équations",
        "Proposed solutions for the AHN-ING and LSI-AHN entrance exams (2026 session), with charts and equations"
      ),
      t(
        "Exercices originaux pour des concours blancs",
        "Original exercises for mock entrance exams"
      ),
      t(
        "Cours de culture générale sur l'intelligence artificielle (9 pages), avec des développements africains et camerounais",
        "General knowledge course on artificial intelligence (9 pages), with African and Cameroonian developments"
      ),
      t(
        "Supports de cours de tests psychotechniques",
        "Course materials on psychometric tests"
      ),
      t(
        "Fiches pédagogiques PDF : probabilités, sécurité informatique, réseaux, bases de données, modèles OSI et TCP/IP",
        "PDF teaching sheets: probability, information security, networks, databases, the OSI and TCP/IP models"
      ),
    ],
  },
  {
    id: "style-cours-latex",
    titre: t(
      "Feuille de style LaTeX institutionnelle Style_cours.sty",
      "Institutional LaTeX style sheet Style_cours.sty"
    ),
    categorie: t(
      "Outil de rédaction pour les rapports de l'école",
      "Writing tool for the school's reports"
    ),
    domaine: "ressources",
    resume: t(
      "Audit, corrections et encapsulation de la feuille de style Style_cours.sty (version 2.0) dans une compétence réutilisable pour les rapports de l'école.",
      "Audit, fixes and packaging of the Style_cours.sty style sheet (version 2.0) into a reusable skill for the school's reports."
    ),
    technologies: ["LaTeX", "pdfLaTeX", "XeLaTeX", "tcolorbox", "biblatex"],
    pointsCles: [
      t("Audit et corrections de la version 2.0", "Audit and fixes of version 2.0"),
      t(
        "Compilation avec pdfLaTeX et XeLaTeX",
        "Compilation with pdfLaTeX and XeLaTeX"
      ),
      t("Environnements tcolorbox", "tcolorbox environments"),
      t("Bibliographie avec biblatex", "Bibliography with biblatex"),
    ],
  },
  {
    id: "beamer-brix-studio",
    titre: t(
      "Présentation Beamer sur Brix Studio et BrixCore",
      "Beamer presentation on Brix Studio and BrixCore"
    ),
    categorie: t(
      "Cours d'urbanisation du système d'information",
      "Information system urbanisation course"
    ),
    statut: "academique",
    domaine: "ressources",
    resume: t(
      "Présentation Beamer sur Brix Studio et BrixCore, réalisée pour le cours d'urbanisation du système d'information.",
      "Beamer presentation on Brix Studio and BrixCore, produced for the information system urbanisation course."
    ),
    technologies: ["Beamer", "LaTeX", "TikZ"],
    pointsCles: [
      t("Palette vert lime", "Lime green palette"),
      t("Schémas TikZ", "TikZ diagrams"),
      t("Notes de présentateur", "Presenter notes"),
    ],
  },
];

/* Projets effectivement publiés (les entrées avec visible: false sont écartées). */
export const projetsVisibles = projets.filter((p) => p.visible !== false);

/* ------------------------------------------------------------------ */
/* Chiffres clés affichés sous l'accueil                               */
/* ------------------------------------------------------------------ */

export const chiffres = [
  {
    valeur: t("5e", "5th"),
    libelle: t(
      "année d'ingénieur à l'ENSPY",
      "year of engineering studies at ENSPY"
    ),
  },
  {
    valeur: t(
      String(projetsVisibles.length),
      String(projetsVisibles.length)
    ),
    libelle: t("projets et réalisations", "projects and deliverables"),
  },
  {
    valeur: t("39", "39"),
    libelle: t(
      "pages pour le rapport d'investigation",
      "pages in the forensic report"
    ),
  },
  {
    valeur: t("CEH", "CEH"),
    libelle: t(
      "v13, certification préparée",
      "v13, certification in preparation"
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Services proposés aux clients                                       */
/* ------------------------------------------------------------------ */

export const services = [
  {
    titre: t("Audit technique de site web", "Website technical audit"),
    texte: t(
      "Diagnostic d'un site existant, puis restitution des constats et des pistes d'amélioration sous forme de présentation claire.",
      "Diagnostic of an existing site, with the findings and the paths for improvement presented in a clear deck."
    ),
  },
  {
    titre: t(
      "Création et refonte de sites vitrines",
      "Showcase website creation and redesign"
    ),
    texte: t(
      "Sites institutionnels pour établissements scolaires et organisations : conception de l'interface, développement et mise en ligne.",
      "Institutional websites for schools and organisations: interface design, development and deployment."
    ),
  },
  {
    titre: t("Maintenance de sites web", "Website maintenance"),
    texte: t(
      "Interventions régulières sur un site en production, avec un suivi détaillé des prestations et des règlements.",
      "Regular work on a live site, with detailed tracking of the work done and of the payments."
    ),
  },
  {
    titre: t("Gestion scolaire sur mesure", "Custom school management"),
    texte: t(
      "Applications de gestion d'établissements : rôles et droits d'accès, modules par profil d'utilisateur, adaptation au contexte local.",
      "School management applications: roles and access rights, modules per user profile, adapted to the local context."
    ),
  },
  {
    titre: t(
      "Applications web et mobiles sur mesure",
      "Custom web and mobile applications"
    ),
    texte: t(
      "Conception et développement d'applications adaptées à un besoin précis : analyse du besoin, modélisation, interface, développement et mise en ligne.",
      "Design and development of applications built for a specific need: requirements analysis, modelling, interface, development and deployment."
    ),
  },
  {
    titre: t("Référencement et analytique", "SEO and analytics"),
    texte: t(
      "Mise en place de l'analytique (Google Analytics 4, Search Console, Bing Webmaster Tools), optimisation des balises et du plan de site, suivi de l'indexation.",
      "Analytics set up (Google Analytics 4, Search Console, Bing Webmaster Tools), optimisation of tags and of the sitemap, indexing follow-up."
    ),
  },
  {
    titre: t("Contenu et réseaux sociaux", "Content and social media"),
    texte: t(
      "Rédaction d'articles de blog, création de contenus et gestion de pages sur les réseaux sociaux.",
      "Blog article writing, content creation and social media page management."
    ),
  },
  {
    titre: t("Supports de communication", "Communication materials"),
    texte: t(
      "Affiches, présentations commerciales et montage vidéo.",
      "Posters, sales presentations and video editing."
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Parcours                                                            */
/* ------------------------------------------------------------------ */

export const parcours = [
  {
    periode: t("2026 – 2027", "2026 – 2027"),
    titre: t(
      "Élève ingénieur en 5e année, Cybersécurité et Investigation Numérique",
      "Fifth-year engineering student, Cybersecurity and Digital Forensics"
    ),
    lieu: t(
      "École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)",
      "National Advanced School of Engineering of Yaoundé (ENSPY)"
    ),
    texte: t(
      "Formation d'ingénieur : investigation numérique, hacking éthique, gestion des risques, réseaux, cryptographie et urbanisation des systèmes d'information.",
      "Engineering programme: digital forensics, ethical hacking, risk management, networks, cryptography and information system urbanisation."
    ),
  },
  {
    periode: t("Niveau 5", "Fifth year"),
    titre: t(
      "Stage académique à la cellule informatique",
      "Academic internship at the IT unit"
    ),
    lieu: t("ICORP", "ICORP"),
    texte: t(
      "Mémoire consacré à une plateforme d'évaluation en ligne sécurisée pour les concours blancs. La cellule gère la base de données des apprenants, le site web et les plateformes en ligne.",
      "Thesis devoted to a secure online assessment platform for mock entrance exams. The unit manages the student database, the website and the online platforms."
    ),
  },
  {
    periode: t("En cours", "Ongoing"),
    titre: t(
      "Coordinateur académique et enseignant en classe préparatoire",
      "Academic coordinator and teacher in a preparatory class"
    ),
    lieu: t("ICORP", "ICORP"),
    texte: t(
      "Coordination pédagogique, conception de supports de cours et de corrigés (mathématiques, informatique, réseaux, tests psychotechniques, culture générale) et cours de soutien.",
      "Academic coordination, design of course materials and exam solutions (mathematics, computer science, networks, psychometric tests, general knowledge) and tutoring."
    ),
  },
  {
    periode: t("En cours", "Ongoing"),
    titre: t("Développement web indépendant", "Freelance web development"),
    lieu: t("ALBEDO Studio", "ALBEDO Studio"),
    texte: t(
      "Sites institutionnels, audits techniques et applications de gestion pour des établissements d'enseignement au Cameroun.",
      "Institutional websites, technical audits and management applications for education institutions in Cameroon."
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Compétences                                                         */
/* ------------------------------------------------------------------ */

export const competences = [
  {
    domaine: t("Sécurité et investigation", "Security and forensics"),
    elements: [
      "Kali Linux",
      "Nmap",
      "Metasploit",
      "Burp Suite",
      "Wireshark",
      "Autopsy",
      "EBIOS Risk Manager",
      t("Cryptographie (RSA, PKI, ECC)", "Cryptography (RSA, PKI, ECC)"),
      t("Investigation numérique forensique", "Digital forensic investigation"),
      t("Hacking éthique (CEH v13)", "Ethical hacking (CEH v13)"),
    ],
  },
  {
    domaine: t("Réseaux", "Networks"),
    elements: [
      "OSPF",
      "IS-IS",
      "BGP",
      "VLAN",
      "EtherChannel (LACP, PAgP)",
      "EVE-NG",
      "MPLS-VPN",
      t("Pare-feu FortiGate", "FortiGate firewalls"),
      t(
        "Architecture réseau hiérarchique (4 niveaux)",
        "Hierarchical network architecture (4 tiers)"
      ),
    ],
  },
  {
    domaine: t("Développement", "Development"),
    elements: [
      "React",
      "TypeScript",
      "Python",
      "Flask",
      "Laravel",
      "Flutter",
      "Supabase",
      t("Cloudflare Workers et D1", "Cloudflare Workers and D1"),
      "Next.js",
      t("SQL et PostgreSQL", "SQL and PostgreSQL"),
    ],
  },
  {
    domaine: t("Conception et rédaction", "Design and writing"),
    elements: [
      "Figma",
      "LaTeX",
      t("Documents Word et PDF", "Word and PDF documents"),
      t(
        "Présentations Beamer et PowerPoint",
        "Beamer and PowerPoint presentations"
      ),
      t(
        "Conception logicielle (règles métier, modélisation)",
        "Software design (business rules, modelling)"
      ),
      t("Architecture multi-tenant", "Multi-tenant architecture"),
      t(
        "Contrôle d'accès et journal d'audit (RBAC, RLS)",
        "Access control and audit logging (RBAC, RLS)"
      ),
      t(
        "Documentation technique (DAT, DEX, DTA)",
        "Technical documentation (DAT, DEX, DTA)"
      ),
      "Microsoft Visio",
      t("Systèmes de design", "Design systems"),
    ],
  },
  {
    domaine: t("Marketing digital et conseil", "Digital marketing and consulting"),
    elements: [
      t("SEO technique", "Technical SEO"),
      "Google Analytics 4",
      "Google Search Console",
      "Bing Webmaster Tools",
      "IndexNow",
      "Wix",
      t("Rédaction d'articles de blog", "Blog article writing"),
      t(
        "Lead magnet et automatisation par courriel",
        "Lead magnets and email automation"
      ),
      t("Audit technique de sites web", "Website technical audits"),
      t(
        "Prospection et présentations commerciales",
        "Prospecting and sales presentations"
      ),
    ],
  },
  {
    domaine: t("Enseignement et pédagogie", "Teaching and pedagogy"),
    elements: [
      t("Préparation aux concours", "Entrance exam preparation"),
      t("Mathématiques", "Mathematics"),
      t("Statistiques et probabilités", "Statistics and probability"),
      t("Tests psychotechniques", "Psychometric tests"),
      t(
        "Culture générale (intelligence artificielle)",
        "General knowledge (artificial intelligence)"
      ),
      t(
        "Conception de sujets et de corrigés",
        "Design of exam papers and solutions"
      ),
      t(
        "Supports de cours et fiches pédagogiques",
        "Course materials and teaching sheets"
      ),
      t("Coordination académique", "Academic coordination"),
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Discours par public                                                 */
/* ------------------------------------------------------------------ */

export const audiences: Record<
  Audience,
  {
    libelle: Texte;
    disponibilite: Texte;
    titre: Texte;
    texte: Texte;
    cta: { libelle: Texte; href: Texte };
    introProjets: Texte;
    ordreSections: SectionId[];
    ordreProjets: string[];
  }
> = {
  recruteur: {
    libelle: t("Recruteur", "Recruiter"),
    disponibilite: t(
      "Disponible pour un stage de fin de formation",
      "Available for a final-year internship"
    ),
    titre: t(
      "Étudiant ingénieur en cybersécurité, à la recherche d'un stage de fin de formation.",
      "Engineering student in cybersecurity, looking for a final-year internship."
    ),
    texte: t(
      "Je suis en cinquième année à l'École Nationale Supérieure Polytechnique de Yaoundé, filière Cybersécurité et Investigation Numérique. Je recherche un stage dans le secteur bancaire, les télécommunications ou l'administration publique, où je pourrai mettre en pratique l'analyse de risques, l'investigation numérique et la sécurisation d'applications.",
      "I am in my fifth year at the National Advanced School of Engineering of Yaoundé, in the Cybersecurity and Digital Forensics programme. I am looking for an internship in banking, telecommunications or public administration, where I can put risk analysis, digital forensics and application security into practice."
    ),
    cta: {
      libelle: t("Proposer un stage", "Offer an internship"),
      href: t(mailto("Proposition de stage"), mailto("Internship opportunity")),
    },
    introProjets: t(
      "Travaux menés pendant ma formation et dans mes projets personnels, classés par pertinence pour un poste en sécurité.",
      "Work carried out during my studies and in my personal projects, ordered by relevance to a security role."
    ),
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
    libelle: t("Client", "Client"),
    disponibilite: t(
      "Disponible pour de nouveaux projets web",
      "Available for new web projects"
    ),
    titre: t(
      "Des sites web et des outils de gestion pour les établissements d'enseignement.",
      "Websites and management tools for education institutions."
    ),
    texte: t(
      "Je conçois, modernise et maintiens des sites web et des applications de gestion adaptés au contexte camerounais : diagnostic d'un site existant, refonte, maintenance et gestion scolaire. Mes projets tiennent compte des usages locaux, notamment du paiement par Mobile Money en FCFA.",
      "I design, modernise and maintain websites and management applications suited to the Cameroonian context: diagnostics of an existing site, redesign, maintenance and school management. My projects take local habits into account, in particular Mobile Money payments in CFA francs."
    ),
    cta: {
      libelle: t("Discuter de votre projet", "Discuss your project"),
      href: t(mailto("Projet web"), mailto("Web project")),
    },
    introProjets: t(
      "Applications réalisées ou en construction pour le contexte camerounais, suivies de mes travaux en sécurité.",
      "Applications delivered or under construction for the Cameroonian context, followed by my security work."
    ),
    ordreSections: ["services", "projets", "parcours", "competences", "contact"],
    ordreProjets: [
      "brixschool",
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
    libelle: t("Jury académique", "Academic panel"),
    disponibilite: t(
      "Élève ingénieur en 5e année à l'ENSPY",
      "Fifth-year engineering student at ENSPY"
    ),
    titre: t(
      "Un parcours d'ingénieur centré sur la sécurité, les réseaux et les systèmes d'information.",
      "An engineering path centred on security, networks and information systems."
    ),
    texte: t(
      "Je suis en cinquième année de formation d'ingénieur à l'ENSPY, filière Cybersécurité et Investigation Numérique. Ce portfolio rassemble mes travaux pratiques, mes rapports techniques et mes projets de développement, ainsi que mon activité d'enseignement en classe préparatoire aux concours.",
      "I am in the fifth year of the engineering programme at ENSPY, in the Cybersecurity and Digital Forensics track. This portfolio brings together my lab work, my technical reports and my development projects, as well as my teaching in a preparatory class for entrance exams."
    ),
    cta: {
      libelle: t("Consulter le parcours", "View my background"),
      href: t("#parcours", "#parcours"),
    },
    introProjets: t(
      "Travaux pratiques, rapports techniques et projets de développement, classés du plus académique au plus appliqué.",
      "Lab work, technical reports and development projects, ordered from the most academic to the most applied."
    ),
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
      "tutorlab",
      "near2ride",
      "maquette-medicale",
      "conseil-visibilite-numerique",
      "audit-sites-enseignement-superieur",
      "albedo-studio",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Contenu du site dans une langue donnée                              */
/* ------------------------------------------------------------------ */

/* Tout le contenu visible, textes résolus dans la langue demandée. */
export function contenuSite(langue: Langue) {
  return {
    langue,
    identite: resoudre(identite, langue),
    meta: resoudre(meta, langue),
    ui: resoudre(interfaceTextes, langue),
    libellesSections: resoudre(libellesSections, langue),
    libellesDomaines: resoudre(libellesDomaines, langue),
    statuts: resoudre(statuts, langue),
    projets: resoudre(projetsVisibles, langue),
    chiffres: resoudre(chiffres, langue),
    services: resoudre(services, langue),
    parcours: resoudre(parcours, langue),
    competences: resoudre(competences, langue),
    audiences: resoudre(audiences, langue),
  };
}

export type ContenuSite = ReturnType<typeof contenuSite>;
export type ProjetResolu = ContenuSite["projets"][number];
