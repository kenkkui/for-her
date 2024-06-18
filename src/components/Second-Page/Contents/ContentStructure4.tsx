import { useState } from "react";
import ContentStructure from "../ContentSructure";
import TextColumns from "../TextColumns";
import ArrowThree from "../../Svg-components/ArrowThree";
import AlienAwkward from "../../../assets/alien-awkward.png";
import SharkCry from "../../../assets/shark-cry.png";
import vanishSFX from "../../../assets/Vanish Sound Effect.mp3";
import AudioPlayer from "../AudioPlayer";

interface ContentStructure4Props {
  setSprite: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContentStructure4({
  setSprite,
}: ContentStructure4Props) {
  const [alienVanish, setAlienVanish] = useState(false);
  const [sharkVanish, setSharkVanish] = useState(false);

  return (
    <ContentStructure id="content-4" redBg>
      <TextColumns>
        <div>
          <ArrowThree />
          <div className="oval-blur"></div>
          I’ve actually been meaning to tell you that, i have developped some
          sorta kinda small weenie itti bittie feelings for you.
          <div
            className="alien-awkward-container"
            onMouseOver={() => setSprite(true)}
            onMouseOut={() => setSprite(false)}
            onClick={() => setAlienVanish(true)}
          >
            <AudioPlayer src={vanishSFX} state={alienVanish} />
            <img
              id="alien-awkward"
              className={alienVanish ? "vanished" : ""}
              src={AlienAwkward}
              alt="yeah..."
            />
          </div>
        </div>
      </TextColumns>

      <TextColumns>
        <p>
          I didn’t know how to tell you that, especially that I’ll be leaving
          the country, well i wont no more... and it’s already summer break.
          <div
            className="shark-cry-container"
            onMouseOver={() => setSprite(true)}
            onMouseOut={() => setSprite(false)}
            onClick={() => setSharkVanish(true)}
          >
            <AudioPlayer src={vanishSFX} state={sharkVanish} />
            <img
              id="shark-cry"
              className={sharkVanish ? "vanished" : ""}
              src={SharkCry}
              alt=":("
            />
          </div>
        </p>
      </TextColumns>
    </ContentStructure>
  );
}
