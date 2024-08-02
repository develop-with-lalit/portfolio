import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

import "./App.css";
import DigitalResume from "./pages/DigitalResume";
import MiniGames from "./pages/MiniGames";
import CardMatching from "./pages/CardMatching";
import StonePaperScissors from "./pages/StonePaperScissors";
import WordGuess from "./pages/WordGuess";
// import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <>
      {/* <ComingSoon /> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/mini-games" element={<MiniGames />} />
            <Route
              path="/mini-games/card-matching"
              element={<CardMatching />}
            />
            <Route
              path="/mini-games/stone-paper-scissors"
              element={<StonePaperScissors />}
            />
            <Route path="/mini-games/word-guess" element={<WordGuess />} />

            <Route path="/digital-resume" element={<DigitalResume />} />
            <Route index path="/" element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
