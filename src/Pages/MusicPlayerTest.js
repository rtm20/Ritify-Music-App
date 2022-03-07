import React, { Component } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

import TumhoToh from "../assets/TumhoToh.mp3";
import AnkheinVillen from "../assets/AnkheinVillen.mp3";
import Retromashup from "../assets/Retromashup.mp3";
import Ranjha from "../assets/Ranjha.mp3";
import Kabhitumheyaad from "../assets/Kabhitumheyaad.mp3";
import CastleofglassLP from "../assets/CastleofglassLP.mp3";
import DilBerparwah from "../assets/DilBerparwah.mp3";
import Kasoor from "../assets/Kasoor.mp3";
import NewDivideLP from "../assets/NewDivideLP.mp3";
import Someoneyouloved from "../assets/Someoneyouloved.mp3";
import InstrumentalJindMahi from "../assets/InstrumentalJindMahi.mp3";
import Intersteller from "../assets/Intersteller.mp3";

import Pic from "../assets/ritesh.jpg";
import TrackList from "./TrackList";

const audioList1 = [
  {
    name: "Tum Ho Toh(Rock On)",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc: TumhoToh,
  },
  {
    name: "Ankhein Villen",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc: AnkheinVillen,
  },
  {
    name: "Retro mashup",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc: Retromashup,
  },
  {
    name: "Ranjha-(sheershah)",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc: Ranjha,
  },
  {
    name: "Kabhi tumhe yaad",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc: Kabhitumheyaad,
  },
  {
    name: "Dil Beparwaah (Prateek Kuhad)",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc: DilBerparwah,
  },
  {
    name: "Kasoor (Prateek Kuhad)",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc: Kasoor,
  },
  {
    name: "Castle of glass (Linkin Park)",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc:  CastleofglassLP,
  },
  {
    name: "New Divide (Linkin Park)",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc:  NewDivideLP,
  },
  {
    name: "Someone You Loved (Lewis Capaldi)",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc: Someoneyouloved,
  },
  {
    name: "Instrumental- Jind Mahi Electro",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc:  InstrumentalJindMahi,
  },
  {
    name: "Intersteller Theme Cover",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc: Intersteller,
  },
];

const audioList2 = [
  {
    name: "Tum Ho Toh(Rock On)",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc: TumhoToh,
  },
  {
    name: "Ankhein Villen",
    singer: "Ritesh Meena",
    cover: Pic,
    musicSrc: AnkheinVillen,
  },
];
const audioList3 = [
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
  },
  {
    name: 'Bedtime Stories',
    singer: 'Jay Chou',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
  },
  {
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover:
      'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc:
      'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
  },
]

const audioList4 = [
  {
    name: 'Bedtime Stories',
    singer: 'Jay Chou',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
  },
]

const options = {
  audioLists: audioList1,
  defaultPlayIndex: 0,
  theme: "auto",
  bounds: "body",
  quietUpdate: false,
  clearPriorAudioLists: false,
  autoPlayInitLoadPlayList: false,
  preload: false,
  glassBg: true,
  remember: true,
  remove: false,
  defaultPosition: {
    right: "100px",
    top: "400px",
  },
  defaultPlayMode: "order",
  mode: "full",
  once: false,
  autoPlay: false,
  toggleMode: false,
  showMiniModeCover: true,
  showMiniProcessBar: false,
  drag: true,
  seeked: true,
  showMediaSession: true,
  showProgressLoadBar: true,
  showPlay: true,
  showReload: true,
  showDownload: true,
  showPlayMode: false,
  showThemeSwitch: true,
  showLyric: true,
  showDestroy: true,
  extendsContent: null,
  defaultVolume: 1,
  playModeShowTime: 600,
  loadAudioErrorPlayNext: true,
  autoHiddenCover: false,
  spaceBar: true,
  panelVisibl:true,
  responsive: false,
  mobileMediaQuery: "(max-width: 1024px)",
  volumeFade: {
    fadeIn: 1000,
    fadeOut: 1000,
  },
  restartCurrentOnPrev: false,
  // https://github.com/SortableJS/Sortable#options
  sortableOptions: {},

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    // console.log("audio lists change:", currentPlayId, audioLists, audioInfo);
  },

  onDestroyed(currentPlayId, audioLists, audioInfo) {
    document.location.href = "/";
  },
  onAudioListsPanelChange(panelVisible) {
    console.log('audio lists panel visible:', panelVisible)
  },
  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log('audio lists change:', currentPlayId, audioLists, audioInfo)
  },


  


};

export default class MusicPlayerTest extends Component {
  constructor(props) {
    super(props);
    this.audio = {};
  }
  state = {
    unmount: false,
    params: {
      ...options,
      getAudioInstance: (audio) => {
        this.audio = audio;
      },
    },
  };

  updateParams = (params) => {
    const data = {
      ...this.state.params,
      ...params,
    };
    this.setState({
      params: data,
    });
  };
  onChangeToFirstAudioList = () => {
    this.updateParams({
      clearPriorAudioLists: true,
      quietUpdate: false,
      audioLists: audioList1,
    })
  }

  onChangeToSecondAudioList = () => {
    this.updateParams({
      clearPriorAudioLists: true,
      quietUpdate: false,
      audioLists: audioList2,
    })
  }

  

  render() {
    const { params } = this.state;
    return (
      <>
        <div
          style={{
            backgroundImage: `url(require("/blast.jpg"))`,
            height: "600px",
          }}
        >
          <div className="container">
            <h1 style={{ textAlign: "center", color: "ActiveCaption" }}>
              "Mobile Mode"
            </h1>
            <br />
            <h3 style={{ textAlign: "center", color: "ActiveCaption" }}>
              Specially designed for Mobile Screens!!
            </h3>
            <br />
            <section className="settings">
          <button type="button" onClick={this.onChangeToFirstAudioList}>
            change to first audio list ({audioList1.length})
          </button>
          <button type="button" onClick={this.onChangeToSecondAudioList}>
            change to second audio list ({audioList2.length})
          </button>
          </section>
            <TrackList />
            <ReactJkMusicPlayer
              {...params}
              onThemeChange={(theme) => {
                //console.log("onThemeChange: ", theme);
                this.updateParams({ theme });
              }}
              onModeChange={(mode) => {
                // console.log("onModeChange: ", mode);
                this.updateParams({ mode });
              }}
              onPlayModeChange={(playMode) => {
                // console.log("onPlayModeChange: ", playMode);
                this.updateParams({ playMode });
              }}
              onPlayIndexChange={(playIndex) => {
                // console.log("onPlayIndexChange: ", playIndex);
                this.updateParams({ playIndex });
              }}
            />
          </div>
        </div>
      </>
    );
  }
}
