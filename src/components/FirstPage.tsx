import YesNoContainer from "./YesNoContainer";
import MainContent from "./MainContent";
import { MouseLeave } from "../types";

export default function FirstPage({
  handleMouseLeave,
  setMouseOut,
}: MouseLeave) {
  return (
    <section
      className="content first"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setMouseOut(false)}
    >
      <MainContent
        src="https://media.tenor.com/JhVlbsQoCboAAAAi/cute-dancing.gif"
        alt="cutie"
      >
        <h1>Is this Kara?</h1>
      </MainContent>

      <YesNoContainer yesTo="/yes-i-am" isButton />
    </section>
  );
}
