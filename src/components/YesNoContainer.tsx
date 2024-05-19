import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface BtnContainerProps {
  yesTo: string;
  noTo?: string;
  isButton: boolean;
}

export default function YesNoContainer({
  yesTo,
  noTo = "/404",
  isButton,
}: BtnContainerProps) {
  const noButtonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(
    null
  );
  const yesButtonRef = useRef<HTMLAnchorElement | null>(null);

  function handleClickNo() {
    if (noButtonRef.current) {
      const computedStyle = window.getComputedStyle(noButtonRef.current);
      const currOpacity = computedStyle.getPropertyValue("opacity");
      if (currOpacity < "0.2") {
        noButtonRef.current.style.display = "none";
        if (yesButtonRef.current) {
          yesButtonRef.current.style.scale = "1.6";
        }
      }

      noButtonRef.current.style.opacity = String(
        parseFloat(currOpacity) - 0.25
      );

      noButtonRef.current.style.transform = "translateY(0)";
    }
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

      <Link data-btn-yes="true" to="/next" ref={yesButtonRef}>
        Yes, I am obvi💁🏻
      </Link>
    </div>
  );
}
