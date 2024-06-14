import ContentStructure from "../ContentSructure";
import BdayLetter from "../BdayLetter";

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
          <div id="arrow-one"></div>
        </h6>
      </section>

      <BdayLetter />
    </ContentStructure>
  );
}
