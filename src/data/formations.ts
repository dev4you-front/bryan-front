import { FormationsData, PhysiomapsSection } from "@/types";

export const formationsData: FormationsData = {
  sport: {
    formations: [
      {
        title: "",
        description: "Approche pratique et fondée sur les preuves pour la prise en charge des lésions des ischio-jambiers.",
        videos: [
          {
            src: "https://www.youtube.com/embed/QPdA4npgKck",
            title: "Comment ne plus se BLESSER aux ISCHIOS - Interview avec Bryan Littré, Kiné du sport",
          },
          {
            src: "https://www.youtube.com/embed/VVLn86-t-Sg",
            title: "Troubles neurologiques en musculo-squelettique",
          },
          {
            src: "https://www.youtube.com/embed/E4kTrmriU64",
            title: "Bryan LITTRE - La douleur chronique",
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
            title: "Troubles neurologiques en musculo-squelettique : Réussir ses bilans et savoir quoi en faire - Partie 1",
          },
          {
            src: "https://www.youtube.com/embed/BdSFGH50mC0",
            title: "Troubles neurologiques en musculo-squelettique : Réussir ses bilans et savoir quoi en faire - Partie 2",
          },
          {
            src: "https://www.youtube.com/embed/68jl8g9OP10?start=764",
            title: "Troubles neurologiques en musculo-squelettique : Réussir ses bilans et savoir quoi en faire - Partie 3",
          },
          {
            src: "https://www.youtube.com/embed/BBPKLrgUiJY",
            title: "Troubles neurologiques en musculo-squelettique : Réussir ses bilans et savoir quoi en faire - Partie 4",
          },
          {
            src: "https://www.youtube.com/embed/NGuEx26DybM?start=2402",
            title: "Troubles neurologiques en musculo-squelettique : Réussir ses bilans et savoir quoi en faire - Partie 5",
          },
          {
            src: "https://www.youtube.com/embed/Xl3fjP2xnOw",
            title: "Troubles neurologiques en musculo-squelettique : Réussir ses bilans et savoir quoi en faire - Partie 6",
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
            title: "Troubles vasculaires avec Bryan et Olivia",
          },
          {
            src: "https://www.youtube.com/embed/wJkIQ_0tExc",
            title: "Troubles vasculaires : Trier pour savoir quand traiter !",
          },
          {
            src: "https://www.youtube.com/embed/dAsUCdMmZNc?start=2833",
            title: "Formation troubles vasculaires - Partie avancée",
          },
        ],
      },
    ], 
  },
};

export const physiomapsSection: PhysiomapsSection = {
  title: "Formations interactives Physiomaps",
  description: "Accédez à mes formations neurologiques interactives sur Physiomaps",
  url: "https://physiomaps.com/?no_header=true",
};