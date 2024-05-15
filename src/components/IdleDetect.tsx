import { useEffect, useRef } from "react";

interface IdleDetectProps {
  onIdle: () => void;
  idleTime?: number;
}

export default function IdleDetect({
  onIdle,
  idleTime = 3000,
}: IdleDetectProps) {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handlePointerMove = () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        onIdle();
      }, idleTime);
    };

    document.body.onpointermove = handlePointerMove;

    return () => {
      document.body.onpointermove = null;
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [idleTime, onIdle]);

  return null;
}
