import { useRef, useState, useEffect } from "react";
import ContentStructure from "./ContentSructure";
import SingularHeart from "../Svg-components/SingularHeart";
import Flower from "./Flower";
import { useInView } from "react-intersection-observer";

interface FlowerContainerProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMouseOverScrollBtn: React.Dispatch<React.SetStateAction<boolean>>;
  setMouseOverFlower: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FlowerContainer({
  setLoading,
  setMouseOverScrollBtn,
  setMouseOverFlower,
  loading,
}: FlowerContainerProps) {
  const flowerPageRef = useRef<HTMLElement | null>(null);
  const { ref: flowerText, inView: flowerTextView } = useInView();
  const { ref: cat, inView: catView } = useInView();
  const { ref: text, inView: textView } = useInView();

  const [flowerViewed, setFlowerViewed] = useState(false);
  const [catViewed, setCatViewed] = useState(false);
  const [textViewed, setTextViewed] = useState(false);

  useEffect(() => {
    if (flowerTextView) {
      setFlowerViewed(true);
    }

    if (catView) {
      setCatViewed(true);
    }

    if (textView) {
      setTextViewed(true);
    }
  }, [textView, catView, flowerTextView]);

  function handleButtonScroll() {
    flowerPageRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <ContentStructure id="flower-content" beigeBg>
        <section className="cat-flower-column">
          <div className="cat-flower-container" ref={cat}>
            <div id="cat-flower" className={catViewed ? "in-view" : ""}></div>

            <div
              className={`flower-text-one ${flowerViewed ? "in-view" : ""}`}
              ref={flowerText}
            >
              <span>Flower</span>
              <div className="divider"></div>
              <span>for</span>
              <div className="divider"></div>
              <span>
                you
                <SingularHeart />
              </span>
            </div>
            <div
              className={`text-container ${textViewed ? "in-view" : ""}`}
              ref={text}
            >
              ANYWAYS BACK TO YOUR BDAY, WAG MAGSCROLL, just press this button
              for a better experience :) and u will see what i made
              <div id="arrow-four"></div>
              <button
                className="scroll-button"
                onClick={handleButtonScroll}
                onMouseOver={() => setMouseOverScrollBtn(true)}
                onMouseOut={() => setMouseOverScrollBtn(false)}
              >
                Click, for the better experience or maybe not and just scroll
              </button>
            </div>
          </div>
        </section>
      </ContentStructure>

      <div className="white-space"></div>

      <Flower
        loading={loading}
        setLoading={setLoading}
        forwardedRef={flowerPageRef}
        setMouseOverFlower={setMouseOverFlower}
      />
    </>
  );
}
