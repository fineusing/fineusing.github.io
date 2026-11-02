---
layout: ../../../layouts/BlogPostLayout.astro
title: "Dépannage AirPlay sur Mac : résoudre les appareils introuvables, les saccades et les écrans noirs"
date: "2026-10-28"
description: "Votre iPhone n'apparaît pas dans la liste AirPlay ? Vidéo saccadée ou écran noir avec le son qui tourne ? Suivez ce guide d'ingénierie en 5 étapes pour diagnostiquer votre réseau, le pare-feu macOS et les DRM."
tags: ["DeviceMirror", "Dépannage AirPlay", "Recopie de l'écran", "Réseau Mac", "Pare-feu macOS", "Écran noir AirPlay", "Mise en miroir"]
product: "DeviceMirror"
locale: "fr"
---

Presque tous les utilisateurs de recopie de l'écran sous macOS ont déjà rencontré l'une de ces anomalies :

- Votre iPhone détectait votre Mac hier sans le moindre accroc, mais aujourd'hui l'indicateur de recherche du Centre de contrôle tourne en boucle sans jamais afficher votre ordinateur.
- Le flux s'établit enfin, mais l'image ressemble à un diaporama saccadé qui se fige toutes les deux secondes tandis que le son grésille.
- Vous lancez une vidéo, la fenêtre de votre Mac devient subitement noire, alors que le flux audio continue de tourner en arrière-plan.

Avant de réinstaller vos applications ou de réinitialiser vos réglages réseau, sachez qu'une panne matérielle n'est presque jamais en cause. Dans l'immense majorité des cas, l'origine provient de la configuration du réseau local, des règles de sécurité du routeur ou des autorisations de sécurité de macOS.

Voici une méthode de diagnostic en 5 étapes pour cerner et résoudre les incidents de mise en miroir avec efficacité.

---

## Logigramme de diagnostic

```text
Incident de recopie de l'écran ?
   │
   ├── [Étape 1] Vérifier le routeur : l'« Isolement AP » ou le réseau invité est-il actif ?
   ├── [Étape 2] Vérifier macOS : le coupe-feu bloque-t-il DeviceMirror ?
   ├── [Étape 3] Vérifier le réseau : le filtrage mDNS / Bonjour est-il activé ?
   ├── [Étape 4] Écran noir avec du son ? Conflit de protection DRM FairPlay
   └── [Secours absolu] Connexion directe par câble USB : isolation matérielle à 100 % !
```

---

### Étape 1 : vérifier l'isolement AP (Isolation client) et les réseaux invités

**Symptôme** : les deux appareils sont bien connectés au même Wi-Fi, mais le Centre de contrôle d'iOS ne trouve jamais votre Mac.

- **Cause racine** : les réseaux d'entreprise, les connexions d'hôtels et les réseaux « Invités » des box domestiques activent généralement l'**isolement AP (Client Isolation)**. Cette mesure de sécurité autorise l'accès à Internet tout en interdisant formellement toute communication directe entre appareils d'un même sous-réseau.
- **Résolution** :
  1. Sur un routeur personnel, connectez-vous à l'interface d'administration (souvent `192.168.1.1` ou `192.168.0.1`), rendez-vous dans les réglages sans fil avancés et **désactivez l'isolement des clients / isolation AP**.
  2. Vérifiez que votre iPhone et votre Mac sont rattachés au même nom de réseau (SSID), et privilégiez impérativement la bande **5 GHz** par rapport à la bande 2,4 GHz souvent saturée.
  3. Sur un réseau d'entreprise restreint dont vous ne pouvez pas modifier les réglages, basculez immédiatement sur une **liaison filaire USB directe** pour contourner le réseau local.

---

### Étape 2 : vérifier les autorisations du coupe-feu macOS

**Symptôme** : DeviceMirror est ouvert sur le Mac, mais les tentatives de connexion AirPlay expirent ou sont immédiatement rejetées.

- **Cause racine** : macOS sollicite régulièrement l'utilisateur pour autoriser les connexions entrantes lors de l'installation de nouvelles applications. Refuser cette invite ou cliquer sur « Bloquer » amène le filtre de paquets de macOS à rejeter silencieusement la découverte AirPlay.
- **Résolution** :
  1. Ouvrez le menu Pomme  ➜ **Réglages Système** ➜ **Réseau** ➜ **Coupe-feu**.
  2. Si le coupe-feu est activé, cliquez sur **Options…**.
  3. Localisez **DeviceMirror** dans la liste des applications et assurez-vous qu'il est réglé sur **« Autoriser les connexions entrantes »**.
  4. Vérifiez que l'option **« Bloquer toutes les connexions entrantes »** en tête de panneau est bien décochée.
  5. Validez par **OK**, puis redémarrez DeviceMirror.

---

### Étape 3 : résoudre le blocage du multicast mDNS / Bonjour

**Symptôme** : vous pouvez tester la connectivité (ping) vers l'adresse IP de votre Mac depuis le terminal de votre smartphone, mais la découverte AirPlay reste désespérément vide.

AirPlay repose sur le protocole **mDNS (Multicast DNS / Bonjour)** émettant sur le port `5353` pour annoncer la présence du récepteur. Certains routeurs d'opérateurs ou bornes d'accès d'entrée de gamme filtrent ou abandonnent les paquets multicast pour soulager la bande passante sans fil.

- **Résolution** : dans le panneau de configuration de votre routeur, repérez l'option **Paramètres Multicast** ou **IGMP Snooping**, réglez-la sur **Activé**, puis redémarrez votre borne d'accès.

---

### Étape 4 : corriger l'écran noir avec le son actif (protection DRM)

**Symptôme** : la recopie fonctionne parfaitement sur l'écran d'accueil ou dans la galerie de photos, mais dès le lancement d'une application de streaming payante, l'image devient subitement noire sur le Mac alors que le son continue de jouer.

- **Cause racine** : les services de diffusion protègent leurs catalogues avec le mécanisme **DRM FairPlay**. Dès qu'iOS constate qu'une recopie intégrale de l'écran est en cours, le compositeur graphique du système masque volontairement les images protégées pour empêcher toute capture pirate.
- **Résolution** :
  N'utilisez pas la recopie globale de l'écran d'iOS. Ouvrez directement le lecteur vidéo de l'application et touchez l'icône de diffusion native **TV / AirPlay**.
  
  [DeviceMirror](https://apps.apple.com/app/id1598771178) prend en charge la réception de flux multimédias directs. Lorsqu'il reçoit une URL de flux standard plutôt qu'un flux de capture d'écran, le décodage s'effectue proprement sans déclencher le masque DRM.

---

### Étape 5 : l'alternative de secours ultime : la connexion directe USB

Si vous devez animer une présentation dans un amphithéâtre comble, une salle de conférence ou un salon professionnel où des dizaines de réseaux Wi-Fi saturent les fréquences, chercher à régler un souci sans fil est un combat perdu d'avance.

La physique d'un câble matériel l'emporte toujours sur des ondes encombrées :
1. Connectez votre iPhone à votre Mac à l'aide d'un câble USB d'origine Apple ou certifié MFi.
2. Touchez **Faire confiance à cet ordinateur** sur votre iPhone.
3. Lancez DeviceMirror.

L'application bascule instantanément sur son pipeline matériel via le bus USB. Vous vous affranchissez totalement des aléas du Wi-Fi et bénéficiez d'une image **4K à 60 IPS sans la moindre latence**—une sécurité absolue pour vos prises de parole décisives.
