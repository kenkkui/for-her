import ContentStructure from "../ContentSructure";
import TextColumns from "../TextColumns";
import ArrowThree from "../../Svg-components/ArrowThree";
import AlienAwkward from "../../../assets/alien-awkward.png";
import SharkCry from "../../../assets/shark-cry.png";

export default function ContentStructure4() {
  return (
    <ContentStructure id="content-4" redBg>
      <TextColumns>
        <div>
          <ArrowThree />
          <img src={AlienAwkward} alt="yeah..." />
          I’ve actually been meaning to tell you that, i have developped some
          sorta kinda small weenie itti bittie feelings for you.
          <div className="oval-blur"></div>
        </div>
      </TextColumns>

      <TextColumns>
        <p>
          I didn’t know how to tell you that, especially that I’ll be leaving
          the country, well i wont no more... and it’s already summer break.
          <img src={SharkCry} alt=":(" />
        </p>
      </TextColumns>
    </ContentStructure>
  );
}
