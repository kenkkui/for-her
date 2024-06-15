import ContentStructure from "./ContentSructure";
import ContentStructure1 from "./Contents/ContentStructure1";
import ContentStructure2 from "./Contents/ContentStructure2";
import ContentStructure3 from "./Contents/ContentStructure3";
import ContentStructure4 from "./Contents/ContentStructure4";
import ContentStructure5 from "./Contents/ContentStructure5";
import SingularHeart from "../Svg-components/SingularHeart";
import Flower from "./Flower";

interface ContentWrapperProps {
  setError: React.Dispatch<React.SetStateAction<string[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const textFlowerOne = "Flower for you";

export default function ContentWrapper({
  setError,
  setLoading,
}: ContentWrapperProps) {
  return (
    <>
      <section className="contents-container">
        <ContentStructure1 setError={setError} />
        <ContentStructure2 />
        <ContentStructure3 />
        <ContentStructure4 />
        <ContentStructure5 />
      </section>

      <section className="flower-container">
        <ContentStructure id="flower-content" beigeBg>
          <section className="cat-flower-column">
            <div id="flower-cat">
              <div className="flower-text-one">
                <SingularHeart />
                {textFlowerOne.split("").map((letter, idx) => {
                  return <span key={idx}>{letter}</span>;
                })}
              </div>
              <div className="text-container">
                ANYWAYS BACK TO YOUR BDAY, magscroll ka lang and u will see what
                i made
                <div id="arrow-four"></div>
              </div>
            </div>
          </section>
        </ContentStructure>
        <Flower setLoading={setLoading} />
      </section>
    </>
  );
}
