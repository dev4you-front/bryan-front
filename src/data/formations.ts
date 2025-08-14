import { Formation, ConfItem } from "@/types";

export const formationsData = {
  sport: {
    formations: [
      {
        title: "Comment prendre en charge les lésions des ischio-jambiers",
        description: "Formation avec conférences et podcast sur les pathologies sportives des ischio-jambiers.",
        video: "https://www.youtube.com/embed/QPdA4npgKck",
      },
    ] as Formation[],
  },
  neuro: {
    formations: [
      {
        title: "Troubles neurologiques en musculo-squelettique",
        description: "Pour enfin savoir faire un VRAI bilan neuro mais surtout savoir quoi en faire.",
        video: "https://www.youtube.com/embed/VVLn86-t-Sg",
      },
    ] as Formation[],
  },
  vasculaire: {
    formations: [
      {
        title: "Troubles vasculaires : Trier pour savoir quand traiter !",
        description: "Formation accessible en e-learning sur la plate-forme Physio-learning. Actuellement : V2.",
        video: "", // Vidéo maintenant gérée par le carrousel
      },
    ] as Formation[],
    videos: [
      {
        src: "https://www.youtube.com/embed/wJkIQ_0tExc",
        title: "Troubles vasculaires : Trier pour savoir quand traiter ! - Nouvelle présentation",
      },
      {
        src: "https://www.youtube.com/embed/O0bjv3zgy2Q",
        title: "Bryan LITTRE et Matthieu GONZALES BANDRES - Les blessures en course et réflexion autour d'une étude",
      },
    ] as ConfItem[],
  },
};

export const physiomapsSection = {
  title: "Formations interactives Physiomaps",
  description: "Accédez à mes formations neurologiques interactives sur Physiomaps",
  url: "https://physiomaps.com/?no_header=true",
};