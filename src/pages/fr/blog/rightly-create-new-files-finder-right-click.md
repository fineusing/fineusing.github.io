---
layout: ../../../layouts/BlogPostLayout.astro
title: "Comment créer un nouveau fichier depuis le clic droit dans le Finder sur macOS"
date: "2025-02-10"
description: "L'option « Nouveau document » vous manque sur Mac ? Découvrez comment ajouter un menu natif de création de fichiers au clic droit du Finder pour TXT, Word, Excel, JSON et modèles personnalisés."
tags: ["Rightly", "macOS", "Finder", "Productivité", "Créer un fichier", "Clic droit macOS"]
product: "Rightly"
locale: "fr"
---

Passer de Windows à macOS réserve souvent un choc inattendu aux nouveaux utilisateurs : **il n'existe aucune option native « Nouveau document » dans le menu contextuel du clic droit du Finder.**

Que vous ayez besoin d'une simple note au format `.txt`, d'un document Word `.docx`, d'une feuille de calcul Excel `.xlsx` ou d'un fichier de configuration `.json` pour le développement, macOS vous contraint à ouvrir d'abord l'application correspondante, à créer un fichier via *Fichier > Nouveau*, puis à naviguer laborieusement dans l'arborescence pour l'enregistrer dans le dossier souhaité.

Ce détour casse votre concentration et fait perdre un temps précieux au quotidien. Heureusement, il est possible de restaurer la création directe de fichiers au clic droit sous macOS, de façon fluide et parfaitement sécurisée.

---

## Pourquoi macOS ne propose-t-il pas de menu « Nouveau fichier » au clic droit ?

La philosophie de conception historique d'Apple repose sur une approche centrée sur les applications et les documents individuels plutôt que sur l'arborescence des répertoires. macOS part du principe que l'utilisateur lance d'abord une application, y produit son contenu, puis s'appuie sur iCloud Drive ou la liste des documents récents pour y accéder.

Cependant, pour les développeurs, rédacteurs, consultants, chefs de projet et professionnels de bureau, le travail s'organise avant tout par **structure de dossiers**. Vous naviguez dans le Finder jusqu'au répertoire précis d'un client ou d'un projet, et vous souhaitez y créer un fichier *à cet endroit exact*.

---

## Les contournements classiques (et leurs limites évidentes)

Au fil des années, les utilisateurs expérimentés ont testé plusieurs palliatifs :

1. **Le Terminal (`touch fichier.txt`)** : Très rapide pour les développeurs, mais inadapté aux documents bureautiques complexes (Word, Excel, Keynote) dont les structures de fichiers binaires ou XML zippés ne peuvent pas être générées par une simple commande vide.
2. **Les Actions rapides Automator et Raccourcis** : Souvent lentes à l'exécution, instables d'une mise à jour de macOS à l'autre, et dépourvues de prise en charge avancée des modèles pré-remplis.
3. **Les utilitaires tiers à injection de code** : De vieux outils injectent du code non certifié dans les processus système, imposant de désactiver SIP (System Integrity Protection) ou causant des lenteurs exaspérantes dans le Finder.

---

## La solution native et élégante : Rightly pour macOS

Pour combler ce manque sans compromettre la sécurité ni la fluidité de votre système, [Rightly](https://apps.apple.com/app/id6806805796) s'appuie exclusivement sur l'API officielle d'extension **Finder Sync** fournie par Apple.

Rightly s'intègre au cœur du menu contextuel de macOS pour vous offrir la création instantanée de fichiers là où vous vous trouvez.

### 1. Prise en charge native de plus de 10 formats standards
Dès son installation, un clic droit dans n'importe quel espace libre du Finder dévoile un sous-menu « Nouveau fichier » épuré et réactif :
- **Bureautique Microsoft Office** : Word (`.docx`), Excel (`.xlsx`), PowerPoint (`.pptx`)
- **Suite Apple iWork** : Pages (`.pages`), Numbers (`.numbers`), Keynote (`.key`)
- **Fichiers pour développeurs** : Texte brut (`.txt`), JSON (`.json`), XML (`.xml`), Property List (`.plist`)
- **Mise en page et notes** : Texte enrichi (`.rtf`), Markdown (`.md`)

En cliquant sur le format voulu, un fichier valide et prêt à l'emploi est immédiatement créé dans le répertoire courant, sans aucune fenêtre intermédiaire.

### 2. Modèles personnalisés : Entêtes d'entreprise, structures types et squelettes de code
Créer un fichier vierge est utile, mais le travail professionnel réclame souvent une trame préétablie. Rightly vous permet d'enregistrer vos **propres modèles de fichiers** :
- Modèles de contrats ou devis avec logo, en-tête d'entreprise et mentions légales obligatoires.
- Fichiers d'initialisation de projets de développement (`README.md`, `.gitignore`, squelettes de configuration).
- Trames normalisées de comptes-rendus de réunion ou cahiers des charges.

Il suffit de glisser votre document modèle dans les préférences de Rightly pour le voir apparaître instantanément dans votre menu clic droit.

---

## Comment configurer la création de fichiers au clic droit en 1 minute

1. Téléchargez **Rightly** depuis le Mac App Store.
2. Lancez l'application et activez l'extension Finder dans *Réglages Système > Extensions*.
3. Ouvrez n'importe quel dossier dans le Finder, faites un clic droit et choisissez **Nouveau fichier**.

Aucun processus lourd en arrière-plan ne vient ralentir votre Mac, et aucune configuration complexe n'est requise.

---

## Conclusion

Une fonction aussi intuitive que la création de fichiers au clic droit permet d'économiser des dizaines de basculements de fenêtres chaque jour. Si vous recherchez un flux de travail plus fluide, naturel et rapide sur Mac, [installez Rightly depuis le Mac App Store](https://apps.apple.com/app/id6806805796) et simplifiez votre quotidien numérique.
