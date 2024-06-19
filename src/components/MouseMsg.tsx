import { useEffect, useRef, useState } from "react";
// import { spriteInterface } from "../types/types";

const idleTime = 3200;
interface MouseProps {
  mouseOut?: boolean;
  actionBtnMouseOver?: {
    no: boolean;
    yes: boolean;
  };
  mouseOverMusic?: boolean;
  mouseOverScrollBtn?: boolean;
  mouseOverFlower?: boolean;
  sprite?: boolean;
}

function MouseMsg({
  mouseOut,
  actionBtnMouseOver,
  mouseOverMusic,
  mouseOverScrollBtn,
  mouseOverFlower,
  sprite,
}: MouseProps) {
  const [idle, setIdle] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  const mouseMsgContainerRef = useRef<HTMLDivElement | null>(null);
  const mouseMsgRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;

      updateElementPosition(x, y);
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

    const resetTimer = () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIdle(true);
      }, idleTime);

      setIdle(false);
    };

    const handleMouseDown = () => {
      setMouseDown(true);
    };

    const handleMouseUp = () => {
      setMouseDown(false);
    };

    document.body.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
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
      } else if (actionBtnMouseOver?.no) {
        text.innerHTML = "no if not yes";
      } else if (actionBtnMouseOver?.yes) {
        text.innerHTML = "yes if not no";
      } else if (mouseOverMusic) {
        text.innerText = "Press mee, if u wanna listen to grentperez!";
      } else if (mouseOverScrollBtn) {
        text.innerHTML = "yesyesyes";
      } else if (mouseOverFlower) {
        text.innerHTML = "Grab me to orbit aroundd!";
      } else if (sprite) {
        text.innerHTML = "POOOF";
      } else {
        text.innerHTML = "";
      }
    }
  }, [
    mouseOut,
    idle,
    actionBtnMouseOver,
    mouseOverMusic,
    mouseOverScrollBtn,
    mouseOverFlower,
    sprite,
  ]);

  return (
    <div
      className={`mouse-leave-msg ${mouseDown ? "mouse-down" : ""} ${
        mouseOut ? "mouse-out" : ""
      }  ${idle ? "idle" : ""} ${actionBtnMouseOver?.no ? "over-no" : ""} ${
        actionBtnMouseOver?.yes ? "over-yes" : ""
      } ${mouseOverMusic ? "over-music" : ""} ${
        mouseOverScrollBtn ? "over-scroll-btn" : ""
      } ${mouseOverFlower ? "over-flower" : ""}  ${sprite ? "over-sprite" : ""}
      `}
      ref={mouseMsgContainerRef}
    >
      <div className="mouse-msg" ref={mouseMsgRef}></div>
    </div>
  );
}

export default MouseMsg;
