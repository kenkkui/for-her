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
    duration: 5600,
  },
  { message: "okay now answer me:>, are you kara" },
];

export default function FirstPage() {
  const [mouseOut, setMouseOut] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  function handleMouseLeave() {
    setTimeout(() => {
      setMouseOut(true);
    }, 400);
  }

  let counter = 0;
  function handleNoBtnClick() {
    if (counter === 0) {
      setCurrentImage(1);
    }
    counter += 1;
    setTimeout(() => {
      setCurrentMessage((prev) => (prev + 1 === 4 ? prev : prev + 1));
      handleNoBtnClick();
    }, messages[currentMessage].duration);
  }

  useEffect(() => {
    if (currentMessage === 1) {
      setCurrentImage(2);
    }
    if (currentMessage === messages.length - 1) {
      setCurrentImage(0);
    }
  }, [currentMessage]);

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
