import Spline from "@splinetool/react-spline";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface FlowerProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  render: boolean;
}

export default function Flower({ setLoading, render }: FlowerProps) {
  const { ref: textRef, inView: elemVisible, entry } = useInView();

  function handleFlowerLoad() {
    setLoading(false);
  }

  return (
    <section className="flower-page">
      {render && (
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
      )}

      <Spline
        id="spline-flower"
        scene="https://prod.spline.design/WLNXFsN8lrlPl9Kp/scene.splinecode"
        onLoad={handleFlowerLoad}
      />
    </section>
  );
}
