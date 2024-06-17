import ContentStructure from "../ContentSructure";
import AngPogi from "../../../assets/ang-pogi.png";
import CatEvil from "../../../assets/cat-evil-laugh.png";

export default function ContentStructure3() {
  return (
    <ContentStructure id="content-3" redBg>
      {/* <section className="opportunity-column">

      </section> */}

      <img id="pogi-png" src={AngPogi} alt="Yes" />

      <section className="secondly-column">
        <div className="text">
          <p>WELL I am...</p>
          <h6>
            but secondly
            <div id="number-two">
              <div className="number"></div>
              <div className="circle"></div>
            </div>
          </h6>
        </div>
      </section>

      <img id="cat-evil" src={CatEvil} alt="NYEHEHEHAH" />
    </ContentStructure>
  );
}
