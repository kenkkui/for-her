import { useRef, ReactNode } from "react";
import ContentStructure from "./ContentSructure";
import SingularHeart from "../Svg-components/SingularHeart";
import Flower from "./Flower";

const textFlowerOne = "Flower for you";

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

  function handleButtonScroll() {
    flowerPageRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <ContentStructure id="flower-content" beigeBg>
        <section className="cat-flower-column">
          <div id="flower-cat">
            <div className="flower-text-one">
              <SingularHeart />
              {textFlowerOne.split("").map((letter, idx) => {
                return <span key={idx}>{letter}</span>;
              })}
            </div>
            <div className="text-container">
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
