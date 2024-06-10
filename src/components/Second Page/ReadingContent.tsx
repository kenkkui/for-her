import { useRef, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";

interface ReadingContentProps {
  setError: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ReadingContent({ setError }: ReadingContentProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();

      pathRef.current.style.setProperty("--path-length", `${length}`);
      pathRef.current.style.strokeDasharray = `${length} ${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
    }
  }, []);

  return (
    <section className="reading-content">
      <div className="outer-most-section">
        <div className="content">
          <h4>
            HI KARA
            <div id="exclamation"></div>
            <p>
              Since you’re obviously reading this, this is just a short web i
              made for&nbsp;
              <span>
                you.
                <div id="you-highlight">
                  <svg
                    width="51"
                    height="12"
                    viewBox="0 0 51 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      ref={pathRef}
                      d="M44.4397 2.04875C36.2598 2.04875 24.9527 0.252429 17.7292 4.80052C16.0407 5.86364 13.021 9.45733 16.7753 9.82708C24.7395 10.6114 33.3027 10.2766 41.2843 9.86377C43.9882 9.72391 51.0384 9.21676 49.026 7.40552C48.1373 6.60575 44.4679 6.37636 44.1462 6.34151C37.067 5.5746 29.9044 5.23242 22.7925 4.98397C16.1791 4.75293 -3.65325 4.78648 2.94306 5.31418C6.17268 5.57255 9.50153 5.35087 12.7393 5.35087"
                      stroke="#D6FFF8"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </span>
            </p>
          </h4>
        </div>

        <div className="outer-section">
          <div className="content">
            <section id="kozmo">
              <div className="cat">
                <AudioPlayer setError={setError} />
                <p className="hidden">
                  KOZMO TOLD ME TO ADD&nbsp;
                  <span>
                    THIS
                    <div id="arrow-kozmo"></div>
                    <div id="kozmo-encircle"></div>
                  </span>
                </p>
              </div>
            </section>
          </div>

          <div className="inner-section">
            <div className="content">
              <div id="shark-boom">
                <div id="woah-frame"></div>
              </div>
            </div>

            <div className="inner-most-section">
              <div className="outer-core-section">
                <div className="core-section"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
