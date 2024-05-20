import { MouseLeave } from "../types";
import MainContent from "./MainContent";

export default function SecondPage({
  handleMouseLeave,
  setMouseOut,
}: MouseLeave) {
  return (
    <section
      className="content second"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setMouseOut(false)}
    >
      <MainContent>
        <p>Flower for you :)</p>
      </MainContent>
    </section>
  );
}
