import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function ArrowFive() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const squiggleRef = useRef<SVGPathElement | null>(null);
  const { ref: inViewRef, inView } = useInView();

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();

      path.style.setProperty("--path-length", `${length}`);
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = `${length}`;
    }

    const squiggle = squiggleRef.current;
    if (squiggle) {
      const length = squiggle.getTotalLength();

      squiggle.style.setProperty("--path-length", `${length}`);
      squiggle.style.strokeDasharray = `${length} ${length}`;
      squiggle.style.strokeDashoffset = `${length}`;
    }
  }, []);

  return (
    <div className="arrow-five-container" ref={inViewRef}>
      <svg
        width="166"
        height="101"
        viewBox="0 0 166 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="arrow-five"
        className={inView ? "in-view" : ""}
      >
        <path
          d="M3.15485 29.1723C10.9127 24.0268 19.2185 19.9603 27.8337 16.4027C46.7067 8.60915 71.5032 -0.616721 91.9918 6.86845C123.172 18.2595 128.473 58.5035 132.641 86.7908"
          stroke="#D6FFF8"
          stroke-width="3"
          stroke-linecap="round"
          ref={pathRef}
        />
        <path
          d="M112.702 1.64307C117.209 8.67473 126.673 20.6035 136.353 13.4031C136.414 13.3575 139.947 9.09172 137.656 8.61439C135.58 8.18191 134.217 14.1987 134.105 14.7062C131.529 26.3896 140.554 33.8535 150.621 37.5421C152.467 38.2187 155.788 39.5018 157.918 38.6497C160.32 37.6891 153.178 41.146 151.663 43.243C145.12 52.3034 148.354 68.0009 159.742 72.0079C164.024 73.5143 163.342 68.5746 161.892 66.7631C159.624 63.9281 155.553 63.1487 152.315 64.7759C144.455 68.7262 145.637 82.4057 145.213 89.5339C145.026 92.6855 144.953 95.8265 144.953 98.981"
          stroke="#D6FFF8"
          stroke-width="3"
          stroke-linecap="round"
          ref={squiggleRef}
        />
      </svg>
    </div>
  );
}
