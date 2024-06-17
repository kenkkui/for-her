import ContentStructure from "../ContentSructure";
import BdayLetter from "../BdayLetter";
import ArrowOne from "../../Svg-components/ArrowOne";
import ArrowTwo from "../../Svg-components/ArrowTwo";

export default function ContentStructure2() {
  return (
    <ContentStructure id="content-2" linearBg>
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

      <BdayLetter />

      <section className="arrow-two-column">
        <ArrowTwo />
        <p>I also want to take the opportunity to tell you...</p>
      </section>
    </ContentStructure>
  );
}
