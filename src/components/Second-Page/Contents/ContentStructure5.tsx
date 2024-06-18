import { useState } from "react";
import ContentStructure from "../ContentSructure";
import TextColumns from "../TextColumns";
import PusheenCool from "../../../assets/pusheen-cool.png";
import FlowerContainer from "../FlowerContainer";
import ArrowFive from "../../Svg-components/ArrowFive";
import ContinueSvg from "../../Svg-components/ContinueSvg";
import AudioPlayer from "../AudioPlayer";
import vanishSFX from "../../../assets/Vanish Sound Effect.mp3";

interface ContentStructure5Props {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMouseOverScrollBtn: React.Dispatch<React.SetStateAction<boolean>>;
  setMouseOverFlower: React.Dispatch<React.SetStateAction<boolean>>;
  setSprite: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContentStructure5({
  setLoading,
  setMouseOverScrollBtn,
  setMouseOverFlower,
  loading,
  setSprite,
}: ContentStructure5Props) {
  const [pusheenVanish, setPusheenVanish] = useState(false);

  return (
    <section className="content-5-container">
      <ContentStructure id="content-5" redBg>
        <TextColumns>
          <div>
            <div
              className="pusheen-cool-container"
              onClick={() => setPusheenVanish(true)}
              onMouseOver={() => setSprite(true)}
              onMouseOut={() => setSprite(false)}
            >
              <img
                id="pusheen-cool"
                src={PusheenCool}
                className={pusheenVanish ? "vanished" : ""}
                alt="Cool"
              />
              <AudioPlayer src={vanishSFX} state={pusheenVanish} />
            </div>
            <p>
              Nonetheless, I just want to share this with you along with the
              feeling of needing to let it out cuz yeah.
            </p>
            <br />
            <p>
              I was fully aware — and I still am, about your concerns over rs,
              and i still remember how you said they scare you 😭, yet I still
              just developed these feelings over you.
            </p>
          </div>
        </TextColumns>

        <TextColumns hidden>
          <p>
            IT’S SCOOPER AWKWARD CODING THIS OUT OMFG HEABNDHJASDBSADJHASBDKAS
          </p>
        </TextColumns>

        <TextColumns>
          <p>
            Anyways didn’t want this to be long,
            <br />
            just in short, gusto <span>kita</span>.
          </p>
        </TextColumns>

        <section className="continue-column">
          <ContinueSvg />
          <ArrowFive />
        </section>
      </ContentStructure>

      <aside className="white-space"></aside>

      <section className="flower-container">
        <FlowerContainer
          loading={loading}
          setMouseOverFlower={setMouseOverFlower}
          setLoading={setLoading}
          setMouseOverScrollBtn={setMouseOverScrollBtn}
        />
      </section>
    </section>
  );
}
