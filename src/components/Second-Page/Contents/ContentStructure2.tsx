import { useState, useRef } from "react";
import ContentStructure from "../ContentSructure";
import BdayLetter from "../BdayLetter";
import ArrowOne from "../../Svg-components/ArrowOne";
import ArrowTwo from "../../Svg-components/ArrowTwo";
import CatCake from "../../../assets/bdat-cats.gif";
import AudioPlayer from "../AudioPlayer";
import vanishAudio from "../../../assets/Vanish Sound Effect.mp3";

interface ContentStructure2Props {
  setSprite: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContentStructure2({
  setSprite,
}: ContentStructure2Props) {
  const [catCakeVanish, setCatCakeVanish] = useState(false);

  return (
    <ContentStructure id="content-2" linearBg>
      <section className="arrow-two-column">
        <ArrowTwo />
        <p>I also want to take the opportunity to tell you...</p>
      </section>

      <section className="title-column">
        <h6>
          <div id="number-one">
            <div className="number"></div>
            <div className="circle"></div>
          </div>
          SO, first of all
          <ArrowOne />
        </h6>
      </section>

      <div className="bday-image-column">
        <div
          className={`cat-cake-container`}
          onMouseOver={() => setSprite(true)}
          onMouseOut={() => setSprite(false)}
          onClick={() => setCatCakeVanish(true)}
        >
          <img
            id="cat-cake"
            className={`${catCakeVanish ? "vanished" : ""}`}
            src={CatCake}
            alt="Happy BDAY"
          />
          <AudioPlayer src={vanishAudio} state={catCakeVanish} />
        </div>
      </div>

      <BdayLetter setSprite={setSprite} />
    </ContentStructure>
  );
}
