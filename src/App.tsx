import { useEffect, useState } from "react";
import MouseLeaveMsg from "./MouseLeaveMsg";

export default function App() {
  const [mouseOut, setMouseOut] = useState(false);

  function handleMouseLeave() {
    setTimeout(() => {
      setMouseOut(true);
    }, 800);
  }

  useEffect(() => {}, [mouseOut]);

  return (
    <div className="App">
      <section
        className="content"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setMouseOut(false)}
      >
        <h1 onMouseEnter={() => setMouseOut(false)}>Is this Kara?</h1>

        <div className="btn-container">
          <button data-btn-no="true" onMouseEnter={() => setMouseOut(false)}>
            No, i ain't wat😠
          </button>
          <button data-btn-yes="true" onMouseEnter={() => setMouseOut(false)}>
            Yes, I am obvi💁🏻
          </button>
        </div>
      </section>

      <MouseLeaveMsg mouseOut={mouseOut} />
    </div>
  );
}
