import { useState, useEffect, useRef } from "react";
import YesNoContainer from "../YesNoContainer";
import MainContent from "./MainContent";
import MouseLeaveMsg from "../MouseLeaveMsg";

const gifs = [
  "https://media.tenor.com/JhVlbsQoCboAAAAi/cute-dancing.gif",
  "https://media1.tenor.com/m/_ha2H2_hlhEAAAAC/wazowski-mike.gif",
  "https://media1.tenor.com/m/7XE8QSvmoL8AAAAC/el-gato-cat.gif",
];

const messages = [
  { message: "", duration: 2200 },
  { message: ">:(", duration: 1800 },
  {
    message: "OFC IT IS, I WONT BE GIVING THIS TO ANYONE ELSE BUTT YOU🤬",
    duration: 3600,
  },
  { message: "okay now answer me:>, are you kara" },
];

export default function FirstPage() {
  const [mouseOut, setMouseOut] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
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
  }, [isPressed, currentMessage]);

  function handleNoBtnClick() {
    setCurrentImage(1);
    setIsPressed(true);
  }

  return (
    <>
      <MouseLeaveMsg mouseOut={mouseOut} />

      <section
        className="content first"
        onMouseLeave={() => setMouseOut(true)}
        onMouseEnter={() => setMouseOut(false)}
      >
        <MainContent src={gifs[currentImage]} alt="cutie">
          <h1>{messages[currentMessage].message}</h1>
        </MainContent>

        <YesNoContainer
          yesTo="/yes-i-am"
          // setPageState={setPageState}
          noBtnHandler={handleNoBtnClick}
          isButton
        />
      </section>
    </>
  );
}
