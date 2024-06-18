import React, { useEffect, useRef, useState } from "react";
import MainContent from "../MainContent";
import { gifs, messages } from "../../data";

interface MainContentFirstPageProps {
  isPressed: boolean;
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
}

export default function MainContentFirstPage({
  isPressed,
  setCurrentImage,
  currentImage,
}: MainContentFirstPageProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const msgTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPressed) return;

    if (currentMessage < 3) {
      msgTimer.current = setTimeout(() => {
        setCurrentMessage((prev) => prev + 1);
      }, messages[currentMessage].duration);
    }

    if (currentMessage === 1) {
      setCurrentImage(2);
    } else if (currentMessage === messages.length - 1) {
      setCurrentImage(0);
    }

    return () => {
      if (msgTimer.current) {
        clearTimeout(msgTimer.current);
        msgTimer.current = null;
      }
    };
  }, [isPressed, currentMessage, setCurrentImage]);

  return (
    <MainContent src={gifs[currentImage]} alt="cutie">
      <h1>{messages[currentMessage].message}</h1>
    </MainContent>
  );
}
