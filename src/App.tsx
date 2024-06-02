import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/Second Page/SecondPage";

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
