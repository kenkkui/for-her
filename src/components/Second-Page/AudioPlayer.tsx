import { useEffect, useRef } from "react";

interface AudioPlayerProps {
  src: string;
  state: boolean;
}

export default function AudioPlayer({ src, state }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (state) {
      audioPlay();
    }
  }, [state]);

  function audioPlay() {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.play();
    }
  }

  return (
    <audio ref={audioRef}>
      <source src={src} />
    </audio>
  );
}
