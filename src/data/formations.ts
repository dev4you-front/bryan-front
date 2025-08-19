import { Formation, ConfItem, FormationsData, PhysiomapsSection } from "@/types";

export const formationsData: FormationsData = {
  sport: {
    formations: [
      {
        title: "Comment prendre en charge les lésions des ischio-jambiers",
        description: "Formation avec conférences et podcast sur les pathologies sportives des ischio-jambiers.",
        videos: [
          {
            src: "https://www.youtube.com/embed/QPdA4npgKck",
            title: "Comment prendre en charge les lésions des ischio-jambiers",
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
        title: "Troubles neurologiques en musculo-squelettique",
        description: "Pour enfin savoir faire un VRAI bilan neuro mais surtout savoir quoi en faire.",
        video: "https://www.youtube.com/embed/VVLn86-t-Sg",
      },
    ],
  },
  vasculaire: {
    formations: [
      {
        title: "Troubles vasculaires : Trier pour savoir quand traiter !",
        description: "Formation accessible en e-learning sur la plate-forme Physio-learning. Actuellement : V2.",
      },
    ], 
    videos: [ // Commented out to remove the video carousel
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
    ], // End of commented out videos
  },
};

export const physiomapsSection: PhysiomapsSection = {
  title: "Formations interactives Physiomaps",
  description: "Accédez à mes formations neurologiques interactives sur Physiomaps",
  url: "https://physiomaps.com/?no_header=true",
};