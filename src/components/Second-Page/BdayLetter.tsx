import { useState } from "react";
import CatHappy from "../../assets/cat-happy.gif";
import AlienWtf from "../../assets/alien-wtf.png";
import vanishAudio from "../../assets/Vanish Sound Effect.mp3";
import AudioPlayer from "./AudioPlayer";

interface BdayLetterProps {
  setSprite: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BdayLetter({ setSprite }: BdayLetterProps) {
  const [catVanish, setCatVanish] = useState(false);
  const [alienVanish, setAlienVanish] = useState(false);

  const handleCatClick = () => {
    setCatVanish(true);
  };

  const handleAlienClick = () => {
    setAlienVanish(true);
  };

  return (
    <section className="bday-column">
      <div id="bday-letter">
        <h5>
          Happy Birthday&nbsp;
          <span>
            Kara
            <div
              className="cat-happy-container"
              onMouseOver={() => setSprite(true)}
              onMouseOut={() => setSprite(false)}
              onClick={handleCatClick}
            >
              <img
                src={CatHappy}
                alt="YIPPE"
                className={catVanish ? "vanished" : ""}
              />
              <AudioPlayer src={vanishAudio} state={catVanish} />
            </div>
          </span>
        </h5>

        <section className="letter">
          <main className="letter-body">
            <p>
              THIS IS MY<span>(kenzo)</span> B-DAY GIFT FOR YOU, as you know i
              like to code, so i decided to make you this, along with a small
              surprise — YOULL SEE WHEN URE AT THE BOTTOM OF THE PAGE JUST KEEP
              SCROLLING
            </p>
            <p>
              uhmmm I wish you a great day today, as today is a celebration of
              you UHMM yes happy birthday and i hope u get the things u wanna
              get, and as a friend, i hope you know that your presences’
              meaningful yesyesyes.
            </p>
            <p>
              We’ve been friends na for around a month, ata... yet anyways
              that’s no reason i shouldn’t make something for you
            </p>
            <p>
              YK TBH I DONT EVEN KNOW HOW TO MAKE SOME WISH YOU WELL LETTER, i
              fr just sing and gala nlng when theres bday. ISTG IF YOU CRINGE
              ITS NOT MY FAULT
              <div
                className="alien-wtf-container"
                onMouseOver={() => setSprite(true)}
                onMouseOut={() => setSprite(false)}
                onClick={handleAlienClick}
              >
                <img
                  id="alien-wtf"
                  className={alienVanish ? "vanished" : ""}
                  src={AlienWtf}
                  alt=">:("
                />
                <AudioPlayer src={vanishAudio} state={alienVanish} />
              </div>
            </p>
          </main>

          <aside className="author">
            Well anyways,
            <br />
            <span>Kenzo</span>
          </aside>
        </section>
      </div>
    </section>
  );
}
