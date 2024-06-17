import Spline from "@splinetool/react-spline";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";

interface FlowerProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMouseOverFlower: React.Dispatch<React.SetStateAction<boolean>>;
  forwardedRef: React.RefObject<HTMLElement>;
}

function Flower({ setLoading, forwardedRef, setMouseOverFlower }: FlowerProps) {
  const { ref: text1Ref, inView: text1Visible } = useInView();
  const [text1State, setText1State] = useState(false);
  const flowerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (flowerRef.current) {
      flowerRef.current?.firstChild?.addEventListener("mouseover", () =>
        setMouseOverFlower(true)
      );
      flowerRef.current?.firstChild?.addEventListener("mouseout", () =>
        setMouseOverFlower(false)
      );
      flowerRef.current?.firstChild?.addEventListener("click", () =>
        setMouseOverFlower(false)
      );
    }

    return () => {
      flowerRef.current?.firstChild?.removeEventListener("mouseover", () =>
        setMouseOverFlower(true)
      );
      flowerRef.current?.firstChild?.removeEventListener("mouseout", () =>
        setMouseOverFlower(false)
      );
    };
  }, []);

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

  function loadingDone() {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }

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
        ref={flowerRef}
        id="spline-flower"
        scene="https://prod.spline.design/o3v1HPnOwXUx88B6/scene.splinecode"
        onLoad={loadingDone}
      />
    </section>
  );
}

export default Flower;
