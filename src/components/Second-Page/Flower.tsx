import Spline from "@splinetool/react-spline";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, ReactNode, forwardRef } from "react";

interface FlowerProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  forwardedRef: React.RefObject<HTMLElement>;
}

export default function Flower({ setLoading, forwardedRef }: FlowerProps) {
  const { ref: text1Ref, inView: text1Visible } = useInView();
  const [text1State, setText1State] = useState(false);

  useEffect(() => {
    if (text1Visible && !text1State) {
      setText1State(true);
    }
  }, [text1Visible, text1State]);

  const { ref: text2Ref, inView: text2Visible } = useInView();
  const [text2State, setText2State] = useState(false);

  useEffect(() => {
    if (text2Visible && !text2State) {
      setText2State(true);
    }
  }, [text2State, text2Visible]);

  return (
    <section id="flower-page" ref={forwardedRef}>
      <div
        className={`text-container ${text1State ? "active" : ""}`}
        ref={text1Ref}
      >
        <p>Here's a lily i made,</p>
        <p>
          IT TOOK <strong>SCOOPER</strong> LONG
        </p>
        <p>but it's worth it SYEMPRE</p>
      </div>

      <div
        className={`text-container ${text2Visible ? "active" : ""}`}
        ref={text2Ref}
      >
        <p>okay here are the actual flowers for you</p>
      </div>

      <Spline
        id="spline-flower"
        scene="https://prod.spline.design/o3v1HPnOwXUx88B6/scene.splinecode"
        onLoad={() => setLoading(false)}
      />
    </section>
  );
}
