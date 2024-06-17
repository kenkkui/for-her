import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./components/First-Page/FirstPage";
import SecondPage from "./components/Second-Page/SecondPage";
import MouseMsg from "./components/MouseMsg";

export default function App() {
  const [mouseOutContentOne, setMouseOutContentOne] = useState(false);

  return (
    <Router>
      <div className="App">
        <MouseMsg mouseOut={mouseOutContentOne} />

        <Routes>
          <Route
            path="/"
            element={<FirstPage setMouseOut={setMouseOutContentOne} />}
          />
          <Route path="/yes-i-am" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}
