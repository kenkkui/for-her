import { useEffect, useRef } from "react";

export default function ArrowTwo() {
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
      width="1090"
      height="195"
      viewBox="0 0 1090 195"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="arrow-two"
    >
      <path
        d="M1086.96 2.5C1090.39 35 1088.64 70.4931 1071.79 100.223C1049.37 139.803 1006.04 160.919 962.105 165.192C881.26 173.054 797.524 151.755 719.328 134.015C623.256 112.22 528.599 84.7812 432.502 63.0795C368.759 48.6841 304.735 32.9831 240.145 22.8514C182.311 13.7795 112.58 6.76215 58.1801 34.0482C29.1766 48.596 11.2079 74.021 6.48701 105.855C3.40149 126.662 -2.79042 165.192 6.48696 192.5"
        stroke="#D6FFF8"
        stroke-width="3"
        stroke-linecap="round"
        ref={pathRef}
      />
    </svg>
  );
}
