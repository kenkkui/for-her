import { useEffect, useRef, useState } from "react";

const idleTime = 2400;
interface MouseProps {
  mouseOut: boolean;
  actionBtnMouseOver: {
    no: boolean;
    yes: boolean;
  };
}

export default function MouseMsg({ mouseOut, actionBtnMouseOver }: MouseProps) {
  const [idle, setIdle] = useState(false);
  const mouseMsgContainerRef = useRef<HTMLDivElement | null>(null);
  const mouseMsgRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const { pageX: x, pageY: y } = e;

      updateElementPosition(x, y);
      resetTimer();
    };

    const handleScroll = () => {
      if (mouseMsgContainerRef.current) {
        const { x, y } = getCursorPosition();
        updateElementPositionScroll(x, y);
      }

      resetTimer();
    };

    const updateElementPosition = (x: number, y: number) => {
      const element = mouseMsgContainerRef.current;
      if (element) {
        element.animate(
          {
            left: `${x + 10}px`,
            top: `${y - 30}px`,
          },
          {
            easing: "ease-out",
            duration: 1200,
            fill: "forwards",
          }
        );
      }
    };

    const updateElementPositionScroll = (x: number, y: number) => {
      const element = mouseMsgContainerRef.current;
      if (element) {
        element.animate(
          {
            left: `${x - 8}px`,
            top: `${y - 8}px`,
          },
          {
            easing: "ease-out",
            duration: 2500,
            fill: "forwards",
          }
        );
      }
    };

    const resetTimer = () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIdle(true);
      }, idleTime);

      setIdle(false);
    };

    const getCursorPosition = () => {
      return {
        x: window.scrollX + window.innerWidth / 2,
        y: window.scrollY + window.innerHeight / 2,
      };
    };

    document.body.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("scroll", handleScroll);

      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const text = mouseMsgRef.current;

    if (text) {
      if (idle) {
        text.innerHTML = "Hey why did you leave :(";
      } else if (mouseOut) {
        text.innerHTML = "Hey where do you think you're going >:(";
      } else if (actionBtnMouseOver.no) {
        text.innerHTML = "no if not yes";
      } else if (actionBtnMouseOver.yes) {
        text.innerHTML = "yes if not no";
      } else {
        text.innerHTML = "";
      }
    }
  }, [mouseOut, idle, actionBtnMouseOver, setscrolling]);

  return (
    <div
      className={`mouse-leave-msg 
        ${mouseOut ? "mouse-out" : ""} 
        ${idle ? "idle" : ""}
        ${actionBtnMouseOver.no ? "over-no" : ""}
        ${actionBtnMouseOver.yes ? "over-yes" : ""}
      `}
      ref={mouseMsgContainerRef}
    >
      <div className="mouse-msg" ref={mouseMsgRef}></div>
    </div>
  );
}
