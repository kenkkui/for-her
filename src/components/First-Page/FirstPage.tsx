import React, { useState } from "react";
import YesNoContainer from "../YesNoContainer";
import MainContentFirstPage from "./MainContentFirstPage";

interface FirstPageProps {
  setMouseOut: React.Dispatch<React.SetStateAction<boolean>>;
  setActionBtnMouseOver: React.Dispatch<
    React.SetStateAction<{
      no: boolean;
      yes: boolean;
    }>
  >;
}

function FirstPage({ setMouseOut, setActionBtnMouseOver }: FirstPageProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  function handleNoBtnClick() {
    setCurrentImage(1);
    setIsPressed(true);
  }

  return (
    <>
      <section
        className="content first"
        onMouseLeave={() => setMouseOut(true)}
        onMouseEnter={() => setMouseOut(false)}
      >
        <MainContentFirstPage
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          isPressed={isPressed}
        />

        <YesNoContainer
          yesTo="/yes-i-am"
          noBtnHandler={handleNoBtnClick}
          setActionBtnMouseOver={setActionBtnMouseOver}
        />
      </section>
    </>
  );
}

export default FirstPage;
