import { useRef, useEffect } from "react";

export default function YouHighlight() {
  const lineOneRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const lineOneElem = lineOneRef.current;
    if (lineOneElem) {
      const length = lineOneElem.getTotalLength();

      lineOneElem.style.setProperty("--path-length", `${length}`);
      lineOneElem.style.strokeDasharray = `${length} ${length}`;
      lineOneElem.style.strokeDashoffset = `${length}`;
    }
  }, []);

  return (
    <svg
      id="you-hightlight-svg"
      width="51"
      height="12"
      viewBox="0 0 51 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={lineOneRef}
        d="M44.4397 2.04875C36.2598 2.04875 24.9527 0.252429 17.7292 4.80052C16.0407 5.86364 13.021 9.45733 16.7753 9.82708C24.7395 10.6114 33.3027 10.2766 41.2843 9.86377C43.9882 9.72391 51.0384 9.21676 49.026 7.40552C48.1373 6.60575 44.4679 6.37636 44.1462 6.34151C37.067 5.5746 29.9044 5.23242 22.7925 4.98397C16.1791 4.75293 -3.65325 4.78648 2.94306 5.31418C6.17268 5.57255 9.50153 5.35087 12.7393 5.35087"
        stroke="#D6FFF8"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
