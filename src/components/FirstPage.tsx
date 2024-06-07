import { useState, useEffect } from "react";
import YesNoContainer from "./YesNoContainer";
import MainContent from "./MainContent";
import MouseLeaveMsg from "./MouseLeaveMsg";

const gifs = [
  "https://media.tenor.com/JhVlbsQoCboAAAAi/cute-dancing.gif",
  "https://media1.tenor.com/m/_ha2H2_hlhEAAAAC/wazowski-mike.gif",
  "https://media1.tenor.com/m/7XE8QSvmoL8AAAAC/el-gato-cat.gif",
];

const messages = [
  { message: "Is this Kara? :)", duration: 2200 },
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

  useEffect(() => {
    if (!isPressed) return;

    const timer = setTimeout(() => {
      setCurrentMessage((prev) => (prev + 1 === 4 ? prev : prev + 1));
    }, messages[currentMessage].duration);

    if (currentMessage === 1) {
      setCurrentImage(2);
    }
    if (currentMessage === messages.length - 1) {
      setCurrentImage(0);
    }

    return () => clearTimeout(timer);
  }, [isPressed, currentMessage]);

  function handleNoBtnClick() {
    setCurrentImage(1);
    setIsPressed(true);
  }

  function handleMouseLeave() {
    setTimeout(() => {
      setMouseOut(true);
    }, 400);
  }

  return (
    <>
      <MouseLeaveMsg mouseOut={mouseOut} />

      <section
        className="content first"
        onMouseLeave={handleMouseLeave}
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
