import { useState, useRef } from "react";
import ContentStructure from "../ContentSructure";
import BdayLetter from "../BdayLetter";
import ArrowOne from "../../Svg-components/ArrowOne";
import ArrowTwo from "../../Svg-components/ArrowTwo";
import CatCake from "../../../assets/bdat-cats.gif";
import vanishAudio from "../../../assets/Vanish Sound Effect.mp3";

interface ContentStructure2Props {
  setSprite: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContentStructure2({
  setSprite,
}: ContentStructure2Props) {
  return (
    <ContentStructure id="content-2" linearBg>
      <section className="arrow-two-column">
        <ArrowTwo />
        <p>I also want to take the opportunity to tell you...</p>
      </section>

      <div className="bday-image-column">
        <div className="cat-cake-container">
          <img id="cat-cake" src={CatCake} alt="Happy BDAY" />
        </div>
      </div>

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

      <BdayLetter setSprite={setSprite} />
    </ContentStructure>
  );
}
