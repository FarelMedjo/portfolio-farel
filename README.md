# Portfolio de Farel M

Portfolio en ligne réalisé avec Next.js 15 (App Router), React 19 et TypeScript. Il s'adapte à trois publics : recruteurs, clients et jurys académiques.

## Lancer le site en local

Prérequis : Node.js 18.18 ou plus récent.

    npm install
    npm run dev

Le site est alors disponible sur http://localhost:3000.

## Modifier le contenu

Tout le contenu se trouve dans un seul fichier : src/data/site.ts. Vous y modifiez les coordonnées, les projets, les services, le parcours, les compétences et les textes d'accueil propres à chaque public.

À compléter en priorité :

- github et linkedin : renseignez vos adresses complètes (les liens vides ne s'affichent pas).
- cvUrl : déposez votre CV dans le dossier public (par exemple public/cv-farel-m.pdf), puis indiquez "/cv-farel-m.pdf".
- telephone et whatsapp : ces informations deviennent publiques une fois le site en ligne. Videz les champs pour les masquer.

Pour ajouter un projet, ajoutez un objet au tableau projets, puis ajoutez son identifiant dans la liste ordreProjets de chaque public.

Champs facultatifs d'un projet (rien ne s'affiche tant qu'ils sont vides) : statut, role, description (un élément par paragraphe), pointsCles, periode, clientName, mention, github, demo, lien, liens (liste de { libelle, url }), images (liste de { src, alt }) et visible. Avec visible: false, l'entrée reste dans le fichier mais n'est pas publiée.

Captures d'écran : déposez les fichiers dans public/projects/<id du projet>/, puis référencez-les dans le champ images, par exemple { src: "/projects/tutorlab/accueil.png", alt: "Page d'accueil de TutorLab" }.

## Liens adaptés à chaque public

Le site lit le paramètre profil dans l'adresse. Vous pouvez donc envoyer un lien différent selon le destinataire :

    https://votre-site.com/?profil=recruteur
    https://votre-site.com/?profil=client
    https://votre-site.com/?profil=academique

## Mise en ligne (Vercel)

1. Déposez le dossier sur GitHub.
2. Importez le dépôt sur vercel.com (aucun réglage particulier n'est nécessaire).
3. Ajoutez la variable d'environnement NEXT_PUBLIC_SITE_URL avec l'adresse définitive du site.

## Bonnes pratiques

- Ne citez pas un client ou un établissement par son nom sans son accord.
- Les polices (Bricolage Grotesque et Source Sans 3) sont chargées depuis Google Fonts.
- La palette et les espacements sont définis en variables CSS au début de src/app/globals.css.
