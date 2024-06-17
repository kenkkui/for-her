import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./components/First-Page/FirstPage";
import SecondPage from "./components/Second-Page/SecondPage";
import MouseMsg from "./components/MouseMsg";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/yes-i-am" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}
