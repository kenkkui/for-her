import Spline from "@splinetool/react-spline";
import { useRef, useEffect, useState } from "react";

interface FlowerProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  render: boolean;
}

export default function Flower({ setLoading, render }: FlowerProps) {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [elemVisible, setElemVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setElemVisible(entries[0].isIntersecting);
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }
  }, []);

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
        scene="https://prod.spline.design/o3v1HPnOwXUx88B6/scene.splinecode"
        onLoad={handleFlowerLoad}
      />
    </section>
  );
}
