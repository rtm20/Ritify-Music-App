import TumhoToh from "./TumhoToh.mp3";
import AnkheinVillen from "./AnkheinVillen.mp3";
import Retromashup from "./Retromashup.mp3";
import Ranjha from "./Ranjha.mp3";
import Kasoor from "./Kasoor.mp3";
import CastleofglassLP from "./CastleofglassLP.mp3";
import DilBerparwah from "./DilBerparwah.mp3";
import NewDivideLP from "./NewDivideLP.mp3";
import Someoneyouloved from "./Someoneyouloved.mp3";
import Kabhitumheyaad from "./Kabhitumheyaad.mp3";


const data = {
  audioPlayer: new Audio(),
  tracks: [
    {
      id:"1",
      name: "Tum Ho Toh (Rock On) - Ritesh",
      file: TumhoToh,
    },
    {
      id:"2",
      name: "Ankhein Cover - Ritesh",
      file: AnkheinVillen,
    },
    {
      id:"3",
      name: "Retro Lofi Mashup - Ritesh",
      file: Retromashup,
    },
    {
      id:"4",
      name: "Ranjha Cover - Ritesh",
      file: Ranjha,
    },
    {
      id:"5",
      name: "Kabhi Tumhe Yaad - Ritesh",
      file: Kabhitumheyaad,
    },
    {
      id:"6",
      name: "Dil Beparwaah (Prateek Kuhad) - Ritesh",
      file: DilBerparwah,
    },
    {
      id:"7",
      name: "Kasoor (Prateek Kuhad) - Ritesh",
      file: Kasoor,
    },
    {
      id:"8",
      name: "Castle of glass (Linkin Park) - Ritesh",
      file: CastleofglassLP,
    },
    {
      id:"9",
      name: "New Divide (Linkin Park) - Ritesh",
      file: NewDivideLP,
    },
    {
      id:"10",
      name: "Someone You Loved (Lewis Capaldi) - Ritesh",
      file: Someoneyouloved,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};
export default data;
