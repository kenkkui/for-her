import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { actionBtnVar } from "../App";

interface BtnContainerProps {
  yesTo: string;
  noBtnHandler: () => void;
  setActionBtnMouseOver: React.Dispatch<
    React.SetStateAction<{
      no: boolean;
      yes: boolean;
    }>
  >;
}

function YesNoContainer({
  yesTo,
  noBtnHandler,
  setActionBtnMouseOver,
}: BtnContainerProps) {
  const noButtonRef = useRef<HTMLButtonElement | null>(null);
  const yesButtonRef = useRef<HTMLAnchorElement | null>(null);
  const [pressCounter, setPressCounter] = useState(0);

  useEffect(() => {
    if (noButtonRef.current) {
      if (pressCounter > 1) {
        noButtonRef.current.style.display = "none";
      }
    }
  }, [pressCounter]);

  function handleClickNo() {
    if (noButtonRef.current) {
      noButtonRef.current.style.scale = "0.8";
    }

    setPressCounter((prev) => prev + 1);
    noBtnHandler();
  }

  function MouseOver(key: string) {
    setActionBtnMouseOver(() => {
      const newState = {
        ...actionBtnVar,
        [key]: true,
      };

      return newState;
    });
  }

  function MouseOut() {
    setActionBtnMouseOver(actionBtnVar);
  }

  return (
    <div className="btn-container">
      <button
        data-btn-no="true"
        ref={noButtonRef as React.RefObject<HTMLButtonElement>}
        onClick={handleClickNo}
        onMouseOver={() => MouseOver("no")}
        onMouseOut={MouseOut}
      >
        Nah, i ain't 😠
      </button>

      <Link
        data-btn-yes="true"
        to={yesTo}
        ref={yesButtonRef}
        onMouseOver={() => MouseOver("yes")}
        onMouseOut={MouseOut}
      >
        Yeah, I am 💁🏻
      </Link>
    </div>
  );
}

export default YesNoContainer;
