import { useState, useRef } from "react";

import ContentStructure from "../ContentSructure";
import YouHighlight from "../../Svg-components/YouHighlight";
import HeartGroup from "../../Svg-components/HeartGroup";
import ArrowOne from "../../Svg-components/ArrowKozmo";
import VanishSFX from "../../../assets/Vanish Sound Effect.mp3";
import MusicPlayer from "../MusicPlayer";
import AudioPlayer from "../AudioPlayer";

interface ContentSructureProps {
  setError: React.Dispatch<React.SetStateAction<string[]>>;
  setMouseOverMusic: React.Dispatch<React.SetStateAction<boolean>>;
  setSprite: React.Dispatch<React.SetStateAction<boolean>>;
  curtainUp: boolean;
}

export default function ContentStructure1({
  setError,
  setMouseOverMusic,
  setSprite,
  curtainUp,
}: ContentSructureProps) {
  const [sharkVanish, setSharkVanish] = useState(false);
  const vanishRef = useRef<HTMLAudioElement | null>(null);

  function handleSharkClick() {
    setSharkVanish(true);

    const audio = vanishRef.current;
    if (audio) {
      audio.volume = 0.1;
      audio.play();
    }
  }

  return (
    <ContentStructure id="content-1" className={curtainUp ? "active" : ""}>
      <section className="title-column">
        <div className="title-container">
          <h4>
            HI KARA
            <div id="exclamation"></div>
          </h4>

          <div className="subtitle">
            Since you’re obviously reading this, this is just a short web i made
            for&nbsp;
            <span>
              you.
              <div id="you-highlight">
                <YouHighlight />
              </div>
            </span>
          </div>
        </div>
      </section>

      <section className="shark-column">
        <div
          id="shark-boom"
          className={sharkVanish ? "vanished" : ""}
          onClick={handleSharkClick}
          onMouseOver={() => setSprite(true)}
          onMouseOut={() => setSprite(false)}
        >
          <AudioPlayer src={VanishSFX} state={sharkVanish} />
          <div id="woah-frame"></div>
        </div>
      </section>

      <section className="cat-column">
        <div className="cat">
          <MusicPlayer
            setError={setError}
            setMouseOverMusic={setMouseOverMusic}
          />
          <div className="hidden">
            KOZMO TOLD ME TO ADD&nbsp;
            <span>
              THIS
              <ArrowOne />
              <div id="kozmo-encircle"></div>
            </span>
          </div>
        </div>
      </section>

      <section className="text-column">
        <div className="text">
          <p>
            I coded and designed everything BASTA I DID EVERYTHING , so please
            pelaes easpleapl pretty pleaese take your time and read this :&gt;
            <HeartGroup />
          </p>
        </div>
      </section>

      <section className="overlay-column">
        <div className="overlay">
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </section>
    </ContentStructure>
  );
}
