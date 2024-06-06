import { useRef, useEffect } from "react";
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

  function handleClickNo() {
    if (noButtonRef.current) {
      noButtonRef.current.style.scale = "0.8";
      noButtonRef.current.style.opacity = "0.5";
    }

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
          No, i ain't wat😠
        </button>
      ) : (
        <Link
          to={noTo}
          data-btn-no="true"
          ref={noButtonRef as React.RefObject<HTMLAnchorElement>}
        ></Link>
      )}

      <Link data-btn-yes="true" to={yesTo} ref={yesButtonRef}>
        Yes, I am obvi💁🏻
      </Link>
    </div>
  );
}
