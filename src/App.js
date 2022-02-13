import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MusicPlayerTest from "./Pages/MusicPlayerTest";
import Home from "./Pages/Home";
import Dash from "./Pages/Dash";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dash />} />
        <Route path="/Player1.0" element={<Home />} />
        <Route path="/Player2.0" element={<MusicPlayerTest />} />
      </Routes>
    </Router>
  );
}

export default App;
