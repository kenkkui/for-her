import { useState } from "react";
import YesNoContainer from "../YesNoContainer";
import MainContentFirstPage from "./MainContentFirstPage";
import MouseMsg from "../MouseMsg";

export const actionBtnVar = {
  no: false,
  yes: false,
};

function FirstPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [mouseOutContentOne, setMouseOutContentOne] = useState(false);
  const [actionBtnMouseOver, setActionBtnMouseOver] = useState(actionBtnVar);

  function handleNoBtnClick() {
    setCurrentImage(1);
    setIsPressed(true);
  }

  return (
    <>
      <MouseMsg
        mouseOut={mouseOutContentOne}
        actionBtnMouseOver={actionBtnMouseOver}
      />
      <section
        className="content first"
        onMouseLeave={() => setMouseOutContentOne(true)}
        onMouseEnter={() => setMouseOutContentOne(false)}
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
