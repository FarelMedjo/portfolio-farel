# Portfolio de Farel M

Portfolio en ligne réalisé avec Next.js 15 (App Router), React 19 et TypeScript. Il est bilingue (français et anglais) et s'adapte à trois publics : recruteurs, clients et jurys académiques.

## Lancer le site en local

Prérequis : Node.js 18.18 ou plus récent.

    npm install
    npm run dev

Le site est alors disponible sur http://localhost:3000.

## Site bilingue (français et anglais)

Chaque texte visible est écrit dans les deux langues au moyen de la fonction t :

    titre: t("Analyse de risques", "Risk analysis"),

Le premier argument est le français, le second l'anglais. Un nom propre ou un nom d'outil identique dans les deux langues s'écrit en chaîne simple ("React", "LaTeX"), sans t. Si vous oubliez une traduction, TypeScript signale l'erreur à la compilation.

Le bouton FR / EN de l'en-tête bascule la langue. Le choix est retenu dans un cookie, afin que la visite suivante s'affiche directement dans la bonne langue, et l'adresse accepte aussi le paramètre lang :

    https://votre-site.com/?lang=fr
    https://votre-site.com/?lang=en

Le paramètre lang l'emporte sur le cookie ; sans l'un ni l'autre, le site s'affiche en français. Le titre de l'onglet, la description de référencement et l'attribut lang de la page suivent la langue affichée.

Les statuts de projet s'écrivent avec une clé (termine, enCours, enConception, enLancement, concept, conception, academique, academiquePartiel) et non avec un texte libre : leurs libellés bilingues et la couleur du badge sont définis une seule fois dans l'objet statuts.

Les textes de l'interface (boutons, intitulés, menu, terminal d'accueil) sont regroupés dans l'objet interfaceTextes, au même endroit.

## Modifier le contenu

Tout le contenu se trouve dans un seul fichier : src/data/site.ts. Vous y modifiez les coordonnées, les projets, les services, le parcours, les compétences et les textes d'accueil propres à chaque public.

À compléter en priorité :

- github et linkedin : renseignez vos adresses complètes (les liens vides ne s'affichent pas).
- cvUrl : déposez votre CV dans le dossier public (par exemple public/cv-farel-m.pdf), puis indiquez "/cv-farel-m.pdf".
- telephone et whatsapp : ces informations deviennent publiques une fois le site en ligne. Videz les champs pour les masquer.

Pour ajouter un projet, ajoutez un objet au tableau projets, puis ajoutez son identifiant dans la liste ordreProjets de chaque public.

Champs facultatifs d'un projet (rien ne s'affiche tant qu'ils sont vides) : statut, role, description (un élément par paragraphe), pointsCles, periode, clientName, mention, github, demo, lien, liens (liste de { libelle, url }), images (liste de { src, alt }) et visible. Avec visible: false, l'entrée reste dans le fichier mais n'est pas publiée.

Captures d'écran : déposez les fichiers dans public/projects/<id du projet>/, puis référencez-les dans le champ images, par exemple { src: "/projects/tutorlab/accueil.png", alt: t("Page d'accueil de TutorLab", "TutorLab home page") }.

## Liens adaptés à chaque public

Le site lit le paramètre profil dans l'adresse. Vous pouvez donc envoyer un lien différent selon le destinataire :

    https://votre-site.com/?profil=recruteur
    https://votre-site.com/?profil=client
    https://votre-site.com/?profil=academique

Les deux paramètres se combinent, par exemple pour un recruteur anglophone :

    https://votre-site.com/?profil=recruteur&lang=en

## Mise en ligne (Vercel)

1. Déposez le dossier sur GitHub.
2. Importez le dépôt sur vercel.com (aucun réglage particulier n'est nécessaire).
3. Ajoutez la variable d'environnement NEXT_PUBLIC_SITE_URL avec l'adresse définitive du site.

## Bonnes pratiques

- Ne citez pas un client ou un établissement par son nom sans son accord.
- Les polices (Bricolage Grotesque et Source Sans 3) sont chargées depuis Google Fonts.
- La palette et les espacements sont définis en variables CSS au début de src/app/globals.css.
