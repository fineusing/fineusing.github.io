---
layout: ../../../layouts/BlogPostLayout.astro
title: "Comment créer des archives compressées avec mot de passe et multi-volumes sur Mac"
date: "2025-02-20"
description: "Besoin de transférer des fichiers confidentiels ou de contourner les plafonds de pièces jointes par e-mail sur Mac ? Apprenez à créer des archives ZIP/7Z chiffrées et découpées avec ZipGo."
tags: ["ZipGo", "macOS", "Sécurité", "Chiffrement", "Productivité", "Découpage d'archives"]
product: "ZipGo"
locale: "fr"
---

Lors de l'envoi d'accords commerciaux, de dossiers financiers, de livrables clients ou d'actifs de propriété intellectuelle sur Internet, joindre des fichiers bruts non chiffrés présente des risques majeurs pour la confidentialité et la conformité de votre entreprise.

Dans le même temps, les serveurs de messagerie et les plateformes de messagerie instantanée appliquent des limites draconiennes sur la taille des fichiers :
- Gmail, Outlook et Apple Mail bloquent systématiquement les pièces jointes dépassant **25 Mo**.
- Les outils collaboratifs d'entreprise et les portails intranet limitent fréquemment les transferts uniques à **100 Mo** ou **500 Mo**.

Si vous devez compresser une présentation de 300 Mo dans une archive protégée par mot de passe ou scinder une bibliothèque de ressources graphiques de 2 Go en segments digestes de 50 Mo sous macOS, l'outil par défaut du Finder ne vous apporte aucune aide : **la fonction de compression native de macOS ne propose ni protection par mot de passe, ni découpage en volumes.**

Voici comment surmonter ces contraintes de sécurité et de taille directement sur votre Mac grâce à [ZipGo](https://apps.apple.com/app/id6799313183).

---

## 1. Chiffrement fort AES-256 : Protéger vos données sensibles

Créer une archive chiffrée garantit que, même si un e-mail est intercepté ou qu'un lien de partage cloud se retrouve exposé, aucun tiers non autorisé ne pourra consulter vos documents sans votre mot de passe maître.

### Pourquoi le chiffrement ZIP classique est insuffisant
L'ancien système de protection des fichiers ZIP (ZipCrypto) a été compromis il y a de nombreuses années et peut être cassé en quelques minutes avec les processeurs graphiques actuels.

Les exigences de sécurité modernes imposent le standard **AES-256 (Advanced Encryption Standard avec clés de 256 bits)** :
- Approuvé par les agences de sécurité gouvernementales pour les données de haute confidentialité.
- Mathématiquement impossible à forcer par calcul brut lorsqu'il est associé à un mot de passe robuste.

### Comment chiffrer vos fichiers avec ZipGo :
1. Sélectionnez les fichiers ou dossiers à sécuriser dans le Finder.
2. Faites un clic droit et choisissez **Compresser avec ZipGo**.
3. Sélectionnez le format de votre choix (`.zip` ou `.7z`) et cochez l'option **Protection par mot de passe**.
4. Définissez votre mot de passe et cliquez sur **Compresser**.

ZipGo exploite l'accélération matérielle des puces Apple Silicon pour chiffrer vos données les plus sensibles en quelques secondes, sans aucun ralentissement de votre machine.

---

## 2. Compression multi-volumes : Contourner les limites de taille de fichier

Lorsqu'une archive dépasse la limite de taille autorisée par un service d'envoi, vous pouvez la fractionner en plusieurs segments numérotés consécutifs (par exemple `archive.z01`, `archive.z02`, `archive.zip` ou `.7z.001`, `.7z.002`).

### Cas d'usage concrets :
- **Pièces jointes par e-mail** : Découpez une présentation de 70 Mo en trois morceaux de 24 Mo pour franchir aisément les serveurs de messagerie.
- **Clés USB en FAT32** : Le système de fichiers FAT32 est incapable de stocker un fichier individuel excédant 4 Go. Découper une image de machine virtuelle de 15 Go en tranches de 2 Go permet de la copier sur n'importe quelle clé sans devoir la reformater.
- **Téléversements sur des connexions instables** : Si le transfert d'un fichier volumineux de 10 Go est interrompu à 99 %, vous devez généralement tout recommencer à zéro. L'envoi par petits volumes permet de ne réexpédier que le fragment ayant échoué.

### Comment découper des archives avec ZipGo :
1. Faites un clic droit sur vos fichiers et ouvrez les options de compression de ZipGo.
2. Dans le menu **Découpage en volumes (Split)**, sélectionnez une taille prédéfinie (ex. `25 Mo pour E-mail`, `100 Mo`, `1 Go` ou renseignez une taille sur mesure).
3. Lancez la compression. ZipGo scinde automatiquement l'archive en volumes séquentiels.

Lorsque votre destinataire reçoit l'ensemble des segments, il lui suffit de faire un clic droit sur le premier fichier avec ZipGo pour reconstituer et décompresser le projet complet en toute transparence.

---

## Comparatif des formats : ZIP vs 7Z

- **ZIP** : Compatibilité universelle maximale. S'ouvre nativement sur n'importe quel ordinateur sous macOS, Windows ou Linux.
- **7Z** : Taux de compression supérieur. Réduit la taille des fichiers de 20 à 40 % supplémentaires par rapport au ZIP classique, particulièrement efficace sur le code source, les fichiers texte et les maquettes graphiques.

---

## Résumé

La confidentialité de vos échanges et les limites de taille de vos fichiers ne doivent plus freiner votre productivité. Grâce à ZipGo, le chiffrement de niveau bancaire et le découpage multi-volumes s'effectuent d'un simple clic droit dans le Finder.

[Téléchargez ZipGo sur le Mac App Store](https://apps.apple.com/app/id6799313183) pour sécuriser et expédier vos archives en toute sérénité.
