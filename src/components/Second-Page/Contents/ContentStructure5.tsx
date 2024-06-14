import ContentStructure from "../ContentSructure";
import TextColumns from "../TextColumns";
import PusheenCool from "../../../assets/pusheen-cool.png";

export default function ContentStructure5() {
  return (
    <ContentStructure id="content-5" redBg>
      <TextColumns>
        <div>
          <img src={PusheenCool} alt="Cool" />
          <p>
            Nonetheless, I just want to share this with you along with the
            feeling of needing to let it out cuz yeah.
          </p>
          <br />
          <p>
            I was fully aware — and I still am, about your concerns over rs, and
            i still remember how you said they scare you 😭, yet I still just
            developed these feelings over you.
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
    </ContentStructure>
  );
}
