import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function ArrowOne() {
  const { ref: inViewRef, inView } = useInView();
  const pathRef = useRef<SVGPathElement | null>(null);
  const tipRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();

      path.style.setProperty("--path-length", `${length}`);
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = `${length}`;
    }

    const tip = tipRef.current;
    if (tip) {
      const length = tip.getTotalLength();

      tip.style.setProperty("--path-length", `${length}`);
      tip.style.strokeDasharray = `${length} ${length}`;
      tip.style.strokeDashoffset = `${length}`;
    }
  }, []);

  return (
    <div className="arrow-one-container" ref={inViewRef}>
      <svg
        id="arrow-one"
        className={inView ? "in-view" : ""}
        width="452"
        height="344"
        viewBox="0 0 452 344"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.7971 83.3455C47.9505 80.7504 66.8531 86.4809 75.3745 90.0118C100.188 100.293 125.473 109.45 151.016 117.749C170.442 124.06 189.919 129.702 210.383 131.29C231.688 132.943 256.329 132.267 273.511 117.7C287.949 105.46 298.111 81.7597 283.703 65.6601C273.538 54.302 257.001 53.2785 242.905 55.7684C186.577 65.7183 176.496 131.972 196.102 177.59C214.294 219.919 248.685 249.591 287.546 272.34C317.836 290.073 348.951 311.75 380.95 321.75"
          stroke="#D6FFF8"
          stroke-width="2"
          stroke-linecap="round"
          ref={pathRef}
        />
        <path
          d="M373.507 302.363C373.637 303.187 374.564 304.07 375.047 304.693C376.63 306.731 378.219 308.772 379.937 310.699C382.248 313.291 384.287 316.08 386.462 318.783C387.998 320.692 389.742 322.442 391.217 324.395C391.669 324.993 392.318 325.386 391.506 325.887C389.29 327.254 386.953 328.473 384.672 329.727C381.279 331.592 377.787 333.278 374.354 335.069C372.522 336.025 370.212 336.819 368.829 338.399"
          stroke="#D6FFF8"
          stroke-width="2"
          stroke-linecap="round"
          ref={tipRef}
        />
      </svg>
    </div>
  );
}
