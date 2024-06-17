import ContentStructure from "../ContentSructure";
import YouHighlight from "../../Svg-components/YouHighlight";
import AudioPlayer from "../AudioPlayer";
import HeartGroup from "../../Svg-components/HeartGroup";
import ArrowOne from "../../Svg-components/ArrowKozmo";

interface ContentSructureProps {
  setError: React.Dispatch<React.SetStateAction<string[]>>;
  setMouseOverMusic: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContentStructure1({
  setError,
  setMouseOverMusic,
}: ContentSructureProps) {
  return (
    <ContentStructure id="content-1">
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
        <div id="shark-boom">
          <div id="woah-frame"></div>
        </div>
      </section>

      <section className="cat-column">
        <div className="cat">
          <AudioPlayer
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
        <p className="text">
          I coded and designed everything BASTA I DID EVERYTHING , so please
          pelaes easpleapl pretty pleaese take your time and read this :&gt;
          <HeartGroup />
        </p>
      </section>
    </ContentStructure>
  );
}
