import React from "react";
import TrackList from "./TrackList";
import PlayerControls from "./PlayerControls";
import Footer from "../components/Footer";
import Header from "../components/Header";



export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <PlayerControls />
        <TrackList />
      </div>
      <Footer />
    </div>
  );
}
