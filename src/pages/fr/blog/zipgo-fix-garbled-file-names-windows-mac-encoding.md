---
layout: ../../../layouts/BlogPostLayout.astro
title: "Résoudre les noms de fichiers corrompus lors de la décompression sur Mac : Le guide de l'encodage Windows CP936, Shift-JIS et UTF-8"
date: "2026-10-19"
description: "Marre des caractères illisibles (mojibake) lors de l'ouverture de ZIP Windows sur Mac ? Découvrez l'origine des conflits d'encodage et comment ZipGo rétablit des noms de fichiers parfaits instantanément."
tags: ["ZipGo", "macOS", "Encodage", "Dépannage", "Mojibake", "Productivité"]
product: "ZipGo"
locale: "fr"
---

Si vous travaillez avec des fournisseurs, clients ou collègues utilisant des ordinateurs sous Windows en Asie de l'Est (Chine, Japon, Corée du Sud, Taïwan) ou dans certaines régions d'Europe, vous avez presque certainement déjà vécu cette situation déconcertante :

Vous téléchargez une archive `.zip` contenant des plans d'ingénierie, des bilans financiers ou des ressources de design. Vous double-cliquez dessus dans le Finder. L'Utilitaire d'archive natif s'exécute sans afficher d'erreur, mais en ouvrant le dossier obtenu, chaque nom de document s'est transformé en une bouillie de caractères incompréhensibles (**mojibake**) :

```text
Î´ÃûÎÄµµ.docx
2026Äê¶È²ÆÎñ±¨±í.xlsx
â€¢â„¢â€_v2_final.pdf
```

Bien que les extensions de fichiers restent parfois opérationnelles, identifier le bon document vous oblige à ouvrir chaque élément l'un après l'autre. Pire encore : si un script automatisé, un projet Xcode ou un outil de compilation fait référence à ces chemins de fichiers, l'ensemble du processus plante immédiatement.

Voici pourquoi ce choc d'encodage de caractères survient entre Windows et macOS, et la méthode pour retrouver des noms de fichiers impeccables sans manipulation complexe.

---

## La cause fondamentale : Unicode UTF-8 vs Pages de code OEM Windows

Le problème trouve sa source dans des choix historiques divergents entre les deux systèmes d'exploitation :

1. **macOS et Linux adoptent par défaut le standard Unicode (UTF-8)** : Depuis les premières versions d'OS X, Apple impose un encodage strict en UTF-8 pour tous les noms de fichiers sur les systèmes APFS et HFS+.
2. **Les moteurs ZIP de Windows utilisent historiquement des pages de code locales** : Lorsqu'un utilisateur compresse un dossier avec l'outil intégré de Windows ou des compresseurs d'ancienne génération, la spécification historique du format ZIP n'imposait pas d'indicateur UTF-8 universel. Windows a donc écrit les noms de fichiers en utilisant la page de code ANSI locale de la machine émettrice :
   - **Chine continentale** : `CP936` / `GBK` / `GB18030`
   - **Japon** : `CP932` / `Shift-JIS`
   - **Taïwan et Hong Kong** : `CP950` / `Big5`
   - **Corée du Sud** : `CP949` / `EUC-KR`
   - **Europe occidentale / Latin** : `Windows-1252`

Lorsque l'Utilitaire d'archive natif d'Apple extrait l'archive, il interprète aveuglément ces séquences d'octets comme du texte UTF-8. Comme les combinaisons d'octets multi-octets propres à GBK ou Shift-JIS ne correspondent à aucune séquence valide en UTF-8, le moteur de rendu les remplace par des symboles accentués aléatoires, des caractères spéciaux ou le symbole d'interrogation de remplacement.

---

## Les tentatives classiques de contournement (et leurs limites)

En consultant les forums spécialisés, le conseil le plus courant consiste à ouvrir le Terminal et à exécuter :

```bash
# Tentative d'extraction d'une archive Windows en spécifiant la page de code CP936
unzip -O CP936 documents_projet.zip -d ./dossier_extrait
```

Ou pour des archives japonaises :

```bash
unzip -O Shift-JIS ressources_japon.zip -d ./dossier_extrait
```

### Pourquoi cette méthode pose problème en pratique :
1. **La commande BSD `unzip` d'Apple rejette souvent l'option `-O`** : macOS intègre un binaire `unzip` dérivé de BSD qui renvoie fréquemment l'erreur `unzip: invalid option -- O`. Pour le faire fonctionner, il est nécessaire d'installer des binaires alternatifs via Homebrew (`brew install unar`).
2. **Il faut deviner la page de code à l'aveugle** : Le fichier provient-il d'un studio à Tokyo (`CP932`), d'une usine à Shenzhen (`CP936`) ou d'un bureau à Taipei (`CP950`) ? Si vous renseignez le mauvais paramètre, vous remplacez un charabia par un autre.
3. **Échec sur les archives chiffrées ou fractionnées** : Les fichiers protégés par mot de passe ou découpés en plusieurs volumes (`.z01`, `.7z.001`) échouent lamentablement avec ces commandes basiques.

---

## La solution native : Détection automatique d'encodage avec ZipGo

[ZipGo](https://apps.apple.com/app/id6799313183) élimine définitivement les suppositions d'encodage directement depuis le menu contextuel du Finder sous macOS.

Plutôt que de supposer que chaque archive entrante est encodée en UTF-8, ZipGo embarque un moteur intelligent d'analyse heuristique des jeux de caractères, optimisé pour les échanges internationaux et les environnements multiplateformes.

### Comment décompresser sans aucune corruption de texte :

1. Faites un **clic droit** sur n'importe quel fichier `.zip`, `.7z` ou `.rar` dans le Finder.
2. Choisissez **Extraire avec ZipGo** (ou **Extraire dans le dossier actuel**).
3. ZipGo inspecte les octets bruts du répertoire central de l'archive. S'il détecte une signature de caractères non-UTF-8, il applique automatiquement la page de code appropriée (GB18030, Shift-JIS, Big5, EUC-KR ou Windows-1252) et transcrit fidèlement les noms dans l'encodage UTF-8 d'APFS.

```text
Avant (Utilitaire d'archive macOS) :   Î´ÃûÎÄµµ.docx
Après (ZipGo avec détection auto) :    Projet_Contrat_Commercial_2026.docx
```

### Vérifiez avant d'extraire grâce à l'aperçu direct
Si vous devez manipuler des archives complexes provenant de partenaires internationaux, vous pouvez faire un clic droit et sélectionner **Aperçu d'archive** dans ZipGo. Vous visualiserez l'intégralité de l'arborescence des dossiers avec des caractères parfaitement lisibles *avant même* d'écrire le moindre octet sur votre disque SSD.

---

## Tableau comparatif des solutions de décompression

| Situation | Utilitaire d'archive macOS | Commande Terminal `unzip` | ZipGo |
| :--- | :--- | :--- | :--- |
| **Archives Windows chinoises (GBK/CP936)** | ❌ Caractères corrompus | ⚠️ Nécessite un binaire Homebrew | ✅ Détection automatique instantanée |
| **Archives Windows japonaises (Shift-JIS)** | ❌ Katakana illisibles | ⚠️ Encodage manuel à deviner | ✅ Détection automatique instantanée |
| **Archives protégées par mot de passe** | ❌ Erreur 79 fréquente | ❌ Ligne de commande complexe | ✅ Saisie sécurisée et noms rétablis |
| **Confort d'utilisation** | Rapide mais corrompt les noms | Lourd et rébarbatif | ✅ Clic droit 100 % natif dans le Finder |

Si vos échanges professionnels impliquent des partenaires sous Windows à l'international, téléchargez [ZipGo sur le Mac App Store](https://apps.apple.com/app/id6799313183) et ne perdez plus jamais de temps à renommer manuellement des documents illisibles.
