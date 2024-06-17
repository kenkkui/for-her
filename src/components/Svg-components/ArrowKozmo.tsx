import { useRef, useEffect } from "react";

export default function ArrowOne() {
  const arrowRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const arrow = arrowRef.current;
    if (arrow) {
      const length = arrow.getTotalLength();

      arrow.style.setProperty("--path-length", `${length}`);
      arrow.style.strokeDasharray = `${length} ${length}`;
      arrow.style.strokeDashoffset = `${length}`;
    }
  }, []);

  return (
    <svg
      id="arrow-kozmo"
      width="370"
      height="125"
      viewBox="0 0 370 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M362.898 66.4099C362.898 80.8729 347.621 90.7927 336.624 97.6099C328.988 102.343 320.357 105.357 311.939 108.363C303.108 111.517 294.458 114.854 285.375 117.209C269.12 121.423 252.165 120.758 235.502 120.758C213.936 120.758 192.044 117.262 171.275 111.409C160.64 108.412 150.246 104.278 139.784 100.735C130.14 97.4696 120.656 93.8878 111.391 89.6642C92.9877 81.2744 75.0658 72.2058 58.2612 60.9009C54.9108 58.647 51.6323 56.4146 48.6734 53.6439C45.7949 50.9484 43.399 47.8318 40.41 45.248C36.5369 41.9001 34.4597 38.3026 31.3254 34.2565C28.5997 30.7378 25.7345 27.1974 22.7706 23.8742C20.8937 21.7697 18.8974 19.5583 18.2151 16.829"
        stroke="#D6FFF8"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M17.7384 17.7825C14.5127 19.1265 12.0743 25.4777 10.6668 28.2443C10.5054 28.5614 7.61969 36.2809 7.32959 32.7998C6.86986 27.283 7.25014 21.5898 7.25014 16.0609C7.25014 12.5584 6.91843 8.72954 7.35608 5.22834C7.66471 2.75932 11.6814 5.4776 12.5472 5.864C20.3467 9.34474 28.3921 11.8346 36.3312 14.922"
        stroke="#D6FFF8"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
}
