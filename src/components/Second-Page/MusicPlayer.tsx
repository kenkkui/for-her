import { useRef, useEffect, useState } from "react";
import OnlyAboutLoveImg from "../../assets/only-about-love.jpg";
import OnlyAboutLove from "../../assets/grentperez - (Only) About Love (Official Lyric Video).mp3";
import MusicAboutSVG from "./MusicAboutSVG";

interface MusicPlayerProps {
  setError: React.Dispatch<React.SetStateAction<string[]>>;
  setMouseOverMusic: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MusicPlayer({
  setError,
  setMouseOverMusic,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          setError((prev) => [...prev, error.message]);
        });
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, [isPlaying]);

  function handleAudioPause() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            setError((prev) => [...prev, error.message]);
          });
      }
    }
  }

  return (
    <div
      id="music"
      className={isPlaying ? "playing" : ""}
      onMouseOver={() => setMouseOverMusic(true)}
      onMouseOut={() => setMouseOverMusic(false)}
      onClick={() => setMouseOverMusic(false)}
    >
      <div className="music-image" onClick={handleAudioPause}>
        <div className="action-btn">{isPlaying ? "Pause" : "Play"}</div>
        <img src={OnlyAboutLoveImg} alt="(Only) About Love" />
      </div>
      <audio ref={audioRef}>
        <source src={OnlyAboutLove} />
        GIRL HOW DOES UR BROWSER NOT SUPPPORT MP3 (your browser does not support
        mp3 files)
      </audio>
      <MusicAboutSVG isPlaying={isPlaying} />
    </div>
  );
}
