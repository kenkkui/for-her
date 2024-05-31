import { MouseLeave } from "../../types";
import MainContent from "../MainContent";
import Spline from "@splinetool/react-spline";

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
        <Spline scene="https://prod.spline.design/o3v1HPnOwXUx88B6/scene.splinecode" />
      </MainContent>
    </section>
  );
}
