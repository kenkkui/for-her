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
  const element = useRef<HTMLDivElement | null>(null);
  const mouseMsgRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const { pageX: x, pageY: y } = e;

      if (element.current) {
        element.current.animate(
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

      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIdle(true);
      }, idleTime);

      setIdle(false);
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
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
  }, [mouseOut, idle, actionBtnMouseOver]);

  return (
    <div
      className={`mouse-leave-msg 
        ${mouseOut ? "mouse-out" : ""} 
        ${idle ? "idle" : ""}
        ${actionBtnMouseOver.no ? "over-no" : ""}
        ${actionBtnMouseOver.yes ? "over-yes" : ""}
      `}
      ref={element}
    >
      <div className="mouse-msg" ref={mouseMsgRef}></div>
    </div>
  );
}
