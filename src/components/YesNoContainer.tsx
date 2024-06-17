import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BtnContainerProps {
  yesTo: string;
  noBtnHandler: () => void;
}

export default function YesNoContainer({
  yesTo,
  noBtnHandler,
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

  return (
    <div className="btn-container">
      <button
        data-btn-no="true"
        ref={noButtonRef as React.RefObject<HTMLButtonElement>}
        onClick={handleClickNo}
      >
        Nah, i ain't 😠
      </button>

      <Link data-btn-yes="true" to={yesTo} ref={yesButtonRef}>
        Yeah, I am 💁🏻
      </Link>
    </div>
  );
}
