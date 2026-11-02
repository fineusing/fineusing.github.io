---
layout: ../../../layouts/BlogPostLayout.astro
title: "Dépasser la limite de taille des pièces jointes par e-mail sur Mac : Découper en volumes de 25 Mo au clic droit"
date: "2026-10-19"
description: "Gmail et Outlook bloquent les pièces jointes de plus de 25 Mo ? Découvrez comment découper automatiquement vos présentations Keynote et gros fichiers en volumes de 25 Mo sur Mac avec ZipGo."
tags: ["ZipGo", "macOS", "E-mail", "Productivité", "Découpage d'archives", "Transfert de fichiers"]
product: "ZipGo"
locale: "fr"
---

Malgré l'avènement des services de stockage cloud, le courrier électronique demeure le moyen de communication professionnel le plus universel au monde. Pourtant, pratiquement tous les grands fournisseurs de messagerie imposent un plafond très strict sur la taille des pièces jointes entrantes et sortantes :

- **Gmail et Google Workspace** : Limite fixée à 25 Mo.
- **Microsoft Outlook et Exchange Online** : Limite par défaut entre 20 Mo et 25 Mo (souvent filtrée de façon encore plus restrictive par les pare-feu d'entreprise).
- **Apple Mail (iCloud Mail)** : Limite de 20 Mo par message.
- **ProtonMail, Yahoo et messageries d'entreprise** : Plafond standard à 25 Mo.

Lorsque vous devez faire parvenir en urgence une présentation Keynote de 85 Mo, un catalogue d'impression haute définition de 120 Mo ou un dossier de plans d'ingénierie de 300 Mo à un client dont la politique informatique bloque les liens cloud externes (Dropbox, WeTransfer, Google Drive ou OneDrive sont fréquemment bannis dans les banques, cabinets d'avocats et administrations), l'e-mail reste le seul canal autorisé.

Si vous tentez de compresser votre dossier avec l'outil natif de macOS, vous obtenez un unique fichier `.zip` de 80 Mo. Vous cliquez sur « Envoyer » dans Mail ou Outlook, et quelques secondes plus tard, votre boîte de réception reçoit le message de rejet fatidique :
> *« 552 5.3.4 Message size exceeds fixed maximum limit. »*

Voici comment découper vos documents volumineux en archives multi-volumes de 25 Mo directement sur Mac, sans jamais avoir à ouvrir le Terminal.

---

## Pourquoi le découpage manuel en ligne de commande est risqué

Sous macOS, il existe l'utilitaire Unix `split`. Si vous maîtrisez le shell, vous pourriez être tenté d'exécuter :

```bash
# Compression préalable du dossier
zip -r presentation.zip ./Dossier_Presentation

# Découpage du zip en morceaux de 24 Mo avec split
split -b 24m presentation.zip presentation.part_
```

### Pourquoi cette approche pose d'immenses problèmes en pratique :
1. **Destruction de la structure d'en-tête ZIP** : La commande Unix brute `split` découpe les octets binaires à l'aveugle, comme un couteau dans un câble. Elle ne génère pas les en-têtes standardisés d'archives multi-volumes reconnus par les logiciels de décompression (`.z01`, `.z02`, `.zip` ou `.7z.001`).
2. **Incompréhension totale du destinataire** : Lorsque votre client reçoit des fichiers nommés `presentation.part_aa` et `presentation.part_ab`, aucun système d'exploitation ne sait quoi en faire. Sous Windows, double-cliquer dessus ne produit rien. Le destinataire doit exécuter des lignes de commande complexes comme `copy /b` ou `cat` pour recoller les morceaux avant de pouvoir espérer les décompresser.
3. **Absence de protection par mot de passe** : Découper un fichier non protégé expose vos données commerciales si l'un des e-mails venait à être transféré ou intercepté.

---

## La solution en un clic : Le découpage intelligent en volumes avec ZipGo

[ZipGo](https://apps.apple.com/app/id6799313183) propose une fonction de compression multi-volumes normalisée et native, intégrée directement au menu contextuel du Finder.

Plutôt qu'un hachage binaire destructeur, ZipGo applique les spécifications officielles établies par 7-Zip et PKWARE, reconnues sur l'ensemble des systèmes d'exploitation modernes.

### Guide pas à pas : Découper un fichier de 85 Mo pour l'e-mail

1. **Sélectionnez vos données** : Mettez en surbrillance le dossier, la vidéo ou les documents volumineux dans le Finder.
2. **Faites un clic droit** et choisissez **Compresser avec ZipGo**.
3. **Configurez le découpage en volumes** :
   - Dans le panneau de configuration, localisez le menu déroulant **Découpage en volumes (Split)**.
   - Sélectionnez le préréglage : **25 Mo (E-mail)** (vous pouvez également choisir 10 Mo, 50 Mo, 100 Mo, 1 Go ou saisir une valeur personnalisée).
   - Format : Sélectionnez `.zip` (pour une compatibilité universelle) ou `.7z` (pour un meilleur taux de compression).
   - Optionnel : Ajoutez un **mot de passe chiffré en AES-256** si le contenu est confidentiel.
4. **Cliquez sur Compresser**.

ZipGo génère instantanément une séquence de fichiers numérotés et prêts à l'envoi :
```text
Presentation_Client.z01   (24,9 Mo)
Presentation_Client.z02   (24,9 Mo)
Presentation_Client.z03   (24,9 Mo)
Presentation_Client.zip   (10,2 Mo)
```
*(Chaque segment passe désormais sans encombre les filtres de Gmail, Outlook et Apple Mail.)*

---

## Comment envoyer les fichiers et comment le destinataire les extrait-il ?

### Stratégie d'expédition :
Chaque volume restant inférieur à 25 Mo, vous pouvez soit :
- Joindre les 4 segments répartis sur 2 courriels distincts (ex. Volumes 1 et 2 dans le premier e-mail, Volumes 3 et 4 dans le second).
- Ou envoyer un volume par message si le serveur du client applique une restriction stricte à 20 Mo par e-mail.

### La décompression côté destinataire :
Aucune compétence technique n'est requise de la part de votre correspondant :
1. Le destinataire télécharge tous les morceaux dans un même dossier de son ordinateur.
2. **Sous Windows** : Il lui suffit de double-cliquer sur le fichier principal `Presentation_Client.zip` (ou `.7z.001`). Les outils comme WinRAR, 7-Zip ou même l'Explorateur Windows moderne reconnaissent la séquence, assemblent les morceaux en mémoire vive et extraient l'intégralité du document d'origine de 85 Mo.
3. **Sous Mac** : Il fait un clic droit sur `Presentation_Client.zip` et choisit d'extraire avec ZipGo.

---

## Les préréglages de découpage disponibles dans ZipGo

| Préréglage | Taille par volume | Cas d'usage typique |
| :--- | :--- | :--- |
| **E-mail (Standard)** | 25 Mo | Gmail, Outlook, Exchange, iCloud Mail, Yahoo |
| **Messageries d'entreprise** | 50 Mo / 100 Mo | Slack, Microsoft Teams, Discord |
| **Clés USB formatées en FAT32** | 2000 Mo (2 Go) | Contourner la limite FAT32 de 4 Go par fichier |
| **Taille personnalisée** | Valeur libre en Mo / Go | Sauvegardes volumineuses et fractionnement sur mesure |

Ne perdez plus de temps face aux e-mails rejetés par les serveurs. Téléchargez [ZipGo sur le Mac App Store](https://apps.apple.com/app/id6799313183) et franchissez sans effort toutes les restrictions de pièces jointes.
