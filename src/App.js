import React from "react";
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <PlayerControls />
          <TrackList />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
