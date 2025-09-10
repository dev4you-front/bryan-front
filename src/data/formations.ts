import { FormationsData, PhysiomapsSection } from "@/types";

export const formationsData: FormationsData = {
  sport: {
    formations: [
      {
        title: "",
        description: "Approche pratique et fondée sur les preuves pour la prise en charge des lésions des ischio-jambiers.",
        videos: [
          {
            src: "/video/teasing_sport.mp4",
            title: "Petit teasing sympa' de la formation. N'hésite pas a scroll pour voir du concret",
          },
          {
            src: "https://www.youtube.com/embed/QPdA4npgKck",
            title: "Comment ne plus se BLESSER aux ISCHIOS - Interview avec Bryan Littré",
          },
          {
            src: "https://www.youtube.com/embed/VVLn86-t-Sg",
            title: "Récidives dans le sport : à qui la faute ? - Conférence SPO avec Bryan Littré",
          },
          {
            src: "https://www.youtube.com/embed/E4kTrmriU64",
            title: "Retour au sport et lésions sportives du membre inférieur - Conférence au CIFEPK 2022 avec Gaetan HENRY et Bryan LITTRE ",
          },
        ],
      },
    ],
  },
  neuro: {
    formations: [
      {
        title: "",
        description: "Méthodologie de bilan neuro MSK et application clinique étape par étape.",

        videos: [
          {
            src: "https://www.youtube.com/embed/3zUh9YdN9MU",
            title: "Ischémie transitoire de nerf. Exemple par la myélopathie cervicale - Formation donnée par Par Bryan LITTRE",
          },
          {
            src: "https://www.youtube.com/embed/BdSFGH50mC0",
            title: "La claudication intermittente expliquée par Bryan LITTRE",
          },
          {
            src: "https://www.youtube.com/embed/68jl8g9OP10?start=764",
            title: "Troubles neuro vasculaires : fausses croyances et anecdotes - Interview avec Bryan Littré",
          },
          {
            src: "https://www.youtube.com/embed/BBPKLrgUiJY",
            title: "Le syndrome du piriforme : Exercice pour mieux raisonner -  Conférence au CIFEPK 2022 avec Bryan LITTRE ",
          },
          {
            src: "https://www.youtube.com/embed/NGuEx26DybM?start=2402",
            title: "Ischémies transitoires des nerfs - Interview avec Bryan Littré Partie 1",
          },
          {
            src: "https://www.youtube.com/embed/Xl3fjP2xnOw",
            title: "Ischémies transitoires des nerfs - Interview avec Bryan Littré Partie 2",
          },
        ],
      },
    ],
  },
  vasculaire: {
    formations: [ 
      {
        title: "",
        description: "Critères de tri, signaux d’alarme et stratégies de prise en charge en troubles vasculaires.",
        videos: [
          {
            src: "/video/video_vascu_bryan_olivia.mp4",
            title: "Teasing et explication de la formation Cardiovasculaire",
          },
          {
            src: "https://www.youtube.com/embed/wJkIQ_0tExc",
            title: "Triage vasculaire et accès direct - Explication de Bryan Littré et Olivia Ferrand",
          },
          {
            src: "https://www.youtube.com/embed/dAsUCdMmZNc?start=2833",
            title: "Etes-vous prêts pour l’accès direct ? Le triage que vous faites déjà - Conférence CIFEPK 2024 avec Bryan Littré",
          },
        ],
      },
    ], 
  },
  geriatrie: {
    formations: [
      {
        title: "",
        description: "En France, on recense plus de 150 000 nouveaux cas d'AVC par an, et 1 personne sur 5 gardera des séquelles lourdes nécessitant une rééducation spécifique. Près de 900 000 personnes vivent avec la maladie d'Alzheimer aujourd'hui, un chiffre qui devrait doubler d'ici 2050 avec le vieillissement de la population. Les thérapeutes de terrain jouent un rôle majeur dans le dépistage précoce des déficits, l'adaptation des prises en charge et le maintien de l'autonomie des patients.",
        detailedContent: [
          {
            title: "Pourquoi une formation sur la neurologie et gériatrie ?",
            content: `**Tout est parti d'un questionnement :**

Pourquoi si peu de kinésithérapeutes sont attirés par la rééducation neurologique centrale ?

Est-ce la complexité des pathologies ?
Le vocabulaire médical trop dense ?
Ou cette impression qu'il faut tout connaître pour oser commencer ?

**Nous avons voulu proposer une formation pour revenir à l'essentiel :**

- Comprendre ce qui est utile à la rééducation
- Organiser ses séances avec des outils concrets
- Oser prendre en charge des patients neuro avec la même logique que pour un sportif.

Car au fond, rééduquer un patient neurologique, **ce n'est pas si différent que rééduquer un sportif** :
On travaille sur une tâche, on observe la réponse, on ajuste, on profile.

La vidéo ci-dessous résume notre approche : diagnostic, bilan, contexte, objectifs... mais surtout comment structurer concrètement vos séances.

**Une formation pensée pour les cliniciens, par des cliniciens.**

> Cette formation s'adresse à la fois aux thérapeutes spécialisés en neurologie et à ceux qui ne le sont pas.
> L'approche est commune à la gériatrie et aux pathologies dégénératives.`
          },
          {
            title: "Partie 1 : Introduction à la prise en charge neurologique globale",
            content: `Spécificités de la rééducation neurologique en libéral. Place du patient dans la démarche de soins.

Présentation du modèle bio-psycho-social appliqué.`
          },
          {
            title: "Partie 2 : Analyse de la fonction nerveuse",
            content: `On attaque dans le vif du sujet : savoir identifier les dysfonctions motrices, sensitives et cognitives à partir de tests cliniques.

**Exploration des signes :**

- Nerfs périphériques
- Paires crâniennes
- Signes centraux

Corrélation avec les pathologies diagnostiquées.`
          },
          {
            title: "Partie 3 : Troubles neurologiques diagnostiqués",
            content: `**Présentation clinique synthétique :**

SEP, SLA et myopathie, Guillain-Barré, AVC, Parkinson, Alzheimer, troubles cérébelleux.

**Objectif :**

Identifier les grandes lignes de rééducation spécifiques à chaque entité, signes cliniques et déficiences spécifiques.

Anticiper l'évolution des troubles`
          },
          {
            title: "Partie 4 : Dysfonctions et approche thérapeutique",
            content: `**Thèmes abordés :**

- Fatigue (1h), SAOS (30min), spasticité (30min), douleurs neuropathiques (1h)
- Cognition (2h)
- Pharmacologie (30min)
- Sarcopénie et ostéopénies (30min)
- Risque de chute (2h)`
          },
          {
            title: "Partie 5 : Comment organiser les séances & choisir les exercices",
            content: `**A. Profilage et individualisation**

- Focus & locus
- Fixation d'objectifs individualisés / avec le patient
- Communication motivationnelle (TCC)

**B. Planification des objectifs et dosage**

- Tâche – Réponse – Ajustement – Profilage
- Grilles pratiques et cas cliniques

**C. Choix des exercices par grands objectifs fonctionnels et prévention de chute**

- Mobilité articulaire et souplesse
- Renforcement musculaire
- Travail cardio-respiratoire
- Relevé du sol
- Équilibre postural

**D. Exercices cognitifs et moteurs combinés**

- Double tâche`
          }
        ]
      }
    ]
  }
};

export const physiomapsSection: PhysiomapsSection = {
  title: "Formations interactives Physiomaps",
  description: "Accédez à mes formations neurologiques interactives sur Physiomaps",
  url: "https://physiomaps.com/?no_header=true",
};