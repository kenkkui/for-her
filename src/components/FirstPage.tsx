import { useState } from "react";
import YesNoContainer from "./YesNoContainer";
import MainContent from "./MainContent";
import MouseLeaveMsg from "./MouseLeaveMsg";

export default function FirstPage() {
  const [mouseOut, setMouseOut] = useState(false);

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
        <MainContent
          src="https://media.tenor.com/JhVlbsQoCboAAAAi/cute-dancing.gif"
          alt="cutie"
        >
          <h1>Is this Kara?</h1>
        </MainContent>

        <YesNoContainer yesTo="/yes-i-am" isButton />
      </section>
    </>
  );
}
