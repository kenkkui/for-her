import { useEffect, useRef, useState } from "react";

const idleTime = 2400;
interface MouseProps {
  mouseOut: boolean;
}

export default function MouseLeaveMsg({ mouseOut }: MouseProps) {
  const [idle, setIdle] = useState(false);
  const element = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;

      if (element.current) {
        element.current.animate(
          {
            left: `${x + 10}px`,
            top: `${y - 30}px`,
          },
          {
            duration: 480,
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

  return (
    <div
      className={`mouse-leave-msg ${mouseOut || idle ? "active" : ""}`}
      tabIndex={-1}
      ref={element}
    >
      {!idle ? "Hey where do u think ure going>:(" : "Hey where are you:("}
    </div>
  );
}
