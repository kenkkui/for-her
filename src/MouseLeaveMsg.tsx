import { useEffect, useRef } from "react";

interface MouseProps {
  mouseOut: boolean;
}

export default function MouseLeaveMsg({ mouseOut }: MouseProps) {
  const element = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elem = element.current;

    if (elem) {
      const handlePointerMove = (e: PointerEvent) => {
        const { clientX: x, clientY: y } = e;

        elem.animate(
          {
            left: `${x + 10}px`,
            top: `${y - 30}px`,
          },
          {
            duration: 480,
            fill: "forwards",
          }
        );
      };

      document.body.onpointermove = handlePointerMove;

      return () => {
        document.body.onpointermove = null;
      };
    }
  }, []);

  return (
    <div
      className={`mouse-leave-msg ${mouseOut ? "active" : ""}`}
      tabIndex={-1}
      ref={element}
    >
      Hey where do u think ure going&gt;:(
    </div>
  );
}
