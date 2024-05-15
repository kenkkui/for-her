import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MouseLeaveMsg from "./components/MouseLeaveMsg";
import FirstPage from "./components/FirstPage";
import IdleDetect from "./components/IdleDetect";

export default function App() {
  const [mouseOut, setMouseOut] = useState(false);
  const [idle, setIdle] = useState(false);

  function handleMouseLeave() {
    setTimeout(() => {
      setMouseOut(true);
    }, 800);
  }

  function handleIdle() {
    console.log("i havnt move in 3 secmsoxsnm");
    setIdle(true);
  }

  function resetIdle() {
    setIdle(false);
  }

  return (
    <Router>
      <div className="App">
        <MouseLeaveMsg mouseOut={mouseOut} />

        <Routes>
          <Route
            path="/"
            element={
              <FirstPage
                setMouseOut={setMouseOut}
                handleMouseLeave={handleMouseLeave}
              />
            }
          />
        </Routes>

        {/* <IdleDetect onIdle={handleIdle} /> */}
      </div>
    </Router>
  );
}
