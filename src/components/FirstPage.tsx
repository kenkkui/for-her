import { useState } from "react";
import YesNoContainer from "./YesNoContainer";
import MainContent from "./MainContent";
import MouseLeaveMsg from "./MouseLeaveMsg";

const gifs = [
  "https://media.tenor.com/JhVlbsQoCboAAAAi/cute-dancing.gif",
  "https://media1.tenor.com/m/_ha2H2_hlhEAAAAC/wazowski-mike.gif",
  "https://media1.tenor.com/m/7XE8QSvmoL8AAAAC/el-gato-cat.gif",
];

const messages = [
  { message: "Is this Kara? :)", duration: 1800 },
  { message: ">:(", duration: 1000 },
  {
    message: "OFC IT IS, I WONT BE GIVING THIS TO ANYONE ELSE THAN YOU🤬",
    duration: 2000,
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

  function handleNoBtnClick() {
    debugger;
    if (currentMessage <= 2) {
      setTimeout(() => {
        setCurrentMessage((prev) => (prev += 1));

        handleNoBtnClick();
      }, messages[currentMessage].duration);
    } else {
      console.log("im bigger than 2");
    }
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
