import Spline from "@splinetool/react-spline";
import { useInView } from "react-intersection-observer";

interface FlowerProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Flower({ setLoading }: FlowerProps) {
  const { ref: textRef, inView: elemVisible } = useInView();

  return (
    <section className="flower-page">
      <div
        className={`text-wrapper ${elemVisible ? "active" : ""}`}
        ref={textRef}
      >
        <p>Here's a lily i made,</p>
        <p>
          IT TOOK <strong>SCOOPER</strong> LONG
        </p>
        <p>but worth it </p>
      </div>

      <Spline
        id="spline-flower"
        scene="https://prod.spline.design/o3v1HPnOwXUx88B6/scene.splinecode"
        onLoad={() => setLoading(false)}
      />
    </section>
  );
}
