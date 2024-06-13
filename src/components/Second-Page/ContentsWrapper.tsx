import { useRef, useEffect } from "react";
import ContentStructure from "./ContentSructure";
import AudioPlayer from "./AudioPlayer";
import BdayLetter from "./BdayLetter";
import AngPogi from "../../assets/ang-pogi.png";
import CatEvil from "../../assets/cat-evil-laugh.png";

interface ContentWrapperProps {
  setError: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ContentWrapper({ setError }: ContentWrapperProps) {
  const lineOneRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (lineOneRef.current) {
      const length = lineOneRef.current.getTotalLength();

      lineOneRef.current.style.setProperty("--path-length", `${length}`);
      lineOneRef.current.style.strokeDasharray = `${length} ${length}`;
      lineOneRef.current.style.strokeDashoffset = `${length}`;
    }
  }, []);

  return (
    <section className="contents-container">
      <ContentStructure id="content-1">
        <div className="line-scroll">
          <div className="scroll-indicator"></div>
        </div>

        <section className="title-column">
          <div className="title-container">
            <h4>
              HI KARA
              <div id="exclamation"></div>
            </h4>

            <p className="subtitle">
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
                      ref={lineOneRef}
                      d="M44.4397 2.04875C36.2598 2.04875 24.9527 0.252429 17.7292 4.80052C16.0407 5.86364 13.021 9.45733 16.7753 9.82708C24.7395 10.6114 33.3027 10.2766 41.2843 9.86377C43.9882 9.72391 51.0384 9.21676 49.026 7.40552C48.1373 6.60575 44.4679 6.37636 44.1462 6.34151C37.067 5.5746 29.9044 5.23242 22.7925 4.98397C16.1791 4.75293 -3.65325 4.78648 2.94306 5.31418C6.17268 5.57255 9.50153 5.35087 12.7393 5.35087"
                      stroke="#D6FFF8"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </span>
            </p>
          </div>
        </section>

        <section className="shark-column">
          <div id="shark-boom">
            <div id="woah-frame"></div>
          </div>
        </section>

        <section className="cat-column">
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

        <section className="text-column">
          <p className="text">
            I coded and designed everything BASTA I DID EVERYTHING , so please
            pelaes easpleapl pretty pleaese take your time and read this :&gt;
            <svg
              width="54"
              height="43"
              viewBox="0 0 54 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.571 13.4253C24.4965 12.56 24.783 11.0656 25.3027 9.9541C25.8871 8.70417 26.5268 7.48372 27.0879 6.2224C27.187 5.9996 27.6728 4.37073 28.0367 4.28668C28.3601 4.21197 29.1642 11.2941 29.2224 11.7476C29.6774 15.2932 30.2171 18.8294 31.022 22.3136"
                stroke="#D6FFF8"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M23 13.371C21.017 13.7744 18.9959 13.2583 17.0099 13.0898C14.5095 12.8777 11.8519 12.6721 9.34028 12.7003C7.80647 12.7175 10.4887 14.6635 10.6494 14.7866C14.6046 17.816 19.709 19.2963 24.3685 20.8621C26.7387 21.6586 29.1202 22.6571 31.3484 23.7272"
                stroke="#D6FFF8"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M42.3438 16.5341C42.1127 15.085 43.1597 13.9393 44.0248 12.8885C44.8765 11.8541 45.7315 10.816 46.6243 9.81667C47.0115 9.38317 47.7897 8.26523 48.434 8.11639C48.7651 8.03992 47.7459 13.8314 47.69 14.1617C47.094 17.6803 47.0592 21.2007 47.0352 24.757"
                stroke="#D6FFF8"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M41.5011 16.9149C41.2058 16.6271 40.7664 16.4931 40.3969 16.3427C38.6855 15.6461 36.9556 14.9974 35.2553 14.2731C34.1258 13.792 33.016 13.2828 31.9276 12.7151C31.6952 12.5939 31.216 12.2185 31.4579 12.7409C31.719 13.3046 32.1225 13.7236 32.594 14.1226C34.1875 15.4714 35.9721 16.6713 37.7013 17.834C40.8182 19.9297 44.0883 21.691 47.0487 24.0093"
                stroke="#D6FFF8"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M20.9928 34.4952C20.6511 33.0161 20.3095 31.5371 19.9678 30.058C19.6307 28.5986 19.2936 27.1391 18.9565 25.6797C18.837 25.1627 18.7176 24.6457 18.5982 24.1287C18.5574 23.952 18.2952 23.5814 18.4757 23.5986C18.5114 23.6019 19.6796 25.4977 19.7358 25.5617C20.8546 26.8381 22.1351 27.984 23.2919 29.2281C25.4583 31.5579 27.9006 33.5409 30.2092 35.7166"
                stroke="#D6FFF8"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M20.4767 36.2896C17.4679 36.9846 14.4376 37.6166 11.452 38.4052C10.1432 38.751 8.90128 39.1714 7.65299 39.6861C7.29498 39.8337 6.12139 40.1284 7.26646 40.251C15.06 41.0857 23.1171 38.4716 30.6308 36.736"
                stroke="#D6FFF8"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </p>
        </section>
      </ContentStructure>

      <ContentStructure id="content-2" linearBg>
        <section className="title-column">
          <h6>
            <div id="number-one">
              <div className="number"></div>
              <div className="circle"></div>
            </div>
            SO, first of all
            <div id="arrow-one"></div>
          </h6>
        </section>

        <BdayLetter />
      </ContentStructure>

      <ContentStructure id="content-3" redBg>
        <section className="opportunity-column">
          <p>I also want to take the opportunity to tell you...</p>
        </section>

        <img id="pogi-png" src={AngPogi} alt="Yes" />

        <section className="secondly-column">
          <p className="text">
            <p>WELL I am...</p>
            <h6>
              but secondly
              <div id="number-two">
                <div className="number"></div>
                <div className="circle"></div>
              </div>
            </h6>
          </p>
        </section>

        <img id="cat-evil" src={CatEvil} alt="NYEHEHEHAH" />
      </ContentStructure>
      <ContentStructure id="content-4">
        <div className="section yes"></div>
      </ContentStructure>
    </section>
  );
}
