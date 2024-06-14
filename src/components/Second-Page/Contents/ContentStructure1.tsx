import ContentStructure from "../ContentSructure";
import YouHighlight from "../../Svg-components/YouHighlight";
import AudioPlayer from "../AudioPlayer";
import HeartGroup from "../../Svg-components/HeartGroup";

interface ContentSructureProps {
  setError: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ContentStructure1({ setError }: ContentSructureProps) {
  return (
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
          <AudioPlayer setError={setError} />
          <div className="hidden">
            KOZMO TOLD ME TO ADD&nbsp;
            <span>
              THIS
              <div id="arrow-kozmo"></div>
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
