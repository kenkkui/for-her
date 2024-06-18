import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./components/First-Page/FirstPage";
import SecondPage from "./components/Second-Page/SecondPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/for-her" element={<FirstPage />} />
          <Route path="/for-her/yes-i-am" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}
