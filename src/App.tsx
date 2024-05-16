import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MouseLeaveMsg from "./components/MouseLeaveMsg";
import FirstPage from "./components/FirstPage";

export default function App() {
  const [mouseOut, setMouseOut] = useState(false);

  function handleMouseLeave() {
    setTimeout(() => {
      setMouseOut(true);
    }, 400);
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

        {/* <IdleDetect onIdle={handleIdle} />  */}
      </div>
    </Router>
  );
}
