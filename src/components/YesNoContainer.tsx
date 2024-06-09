import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BtnContainerProps {
  yesTo: string;
  noTo?: string;
  setPageState?: React.Dispatch<
    React.SetStateAction<{
      page: number;
      currentMessage: number;
      currentLetter: number;
      showing: boolean;
    }>
  >;
  noBtnHandler: () => void;
  isButton: boolean;
}

export default function YesNoContainer({
  yesTo,
  noTo = "/404",
  isButton,
  noBtnHandler,
}: BtnContainerProps) {
  const noButtonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(
    null
  );
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

  return (
    <div className="btn-container">
      {isButton ? (
        <button
          data-btn-no="true"
          ref={noButtonRef as React.RefObject<HTMLButtonElement>}
          onClick={handleClickNo}
        >
          Nah, i ain't 😠
        </button>
      ) : (
        <Link
          to={noTo}
          data-btn-no="true"
          ref={noButtonRef as React.RefObject<HTMLAnchorElement>}
        ></Link>
      )}

      <Link data-btn-yes="true" to={yesTo} ref={yesButtonRef}>
        Yeah, I am 💁🏻
      </Link>
    </div>
  );
}
