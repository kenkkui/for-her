import { useEffect, useRef } from "react";

export default function ArrowThree() {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();

      path.style.setProperty("--path-length", `${length}`);
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = `${length}`;
    }
  }, []);

  return (
    <svg
      id="arrow-three"
      width="420"
      height="225"
      viewBox="0 0 420 225"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.51463 3C1.80627 37.1528 26.9217 63.4595 55.1096 77.4534C77.2859 88.4628 105.623 94.9474 130.323 91.1573C138.495 89.9034 150.858 85.0158 150.625 74.4159C150.355 62.0958 136.183 57.1882 126.508 58.8047C106.602 62.1306 92.6147 81.0944 86.176 99.7753C77.6062 124.64 90.9834 145.279 110.77 158.9C153.31 188.183 205.597 192.977 253.771 178.396C282.476 169.708 308.533 155.523 339.204 156.428C380.321 157.64 399.697 185.083 417.5 222"
        stroke="#D6FFF8"
        strokeWidth="3"
        strokeLinecap="round"
        ref={pathRef}
      />
    </svg>
  );
}
