import TumhoToh from "./TumhoToh.mp3";
import AnkheinVillen from "./AnkheinVillen.mp3";
import Retromashup from "./Retromashup.mp3";
import Ranjha from "./Ranjha.mp3";
import Kabhitumheyaad from "./Kabhitumheyaad.mp3";

const data = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Tum Ho Toh (Rock On) - Ritesh",
      file: TumhoToh,
    },
    {
      name: "Ankhein Cover - Ritesh",
      file: AnkheinVillen,
    },
    {
      name: "Retro Lofi Mashup - Ritesh",
      file: Retromashup,
    },
    {
      name: "Ranjha Cover - Ritesh",
      file: Ranjha,
    },
    {
      name: "Kabhi Tumhe Yaad - Ritesh",
      file: Kabhitumheyaad,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};
export default data;
