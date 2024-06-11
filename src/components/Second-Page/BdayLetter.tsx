import CatHappy from "../../assets/cat-happy.gif";
import CatCake from "../../assets/bdat-cats.gif";
import AlienWtf from "../../assets/alien-wtf.png";

export default function BdayLetter() {
  return (
    <section className="bday-column">
      <div id="bday-letter">
        <img src={CatCake} alt="Happy BDAY" />
        <h5>
          Happy Birthday&nbsp;
          <span>
            Kara
            <img src={CatHappy} alt="YIPPE" />
          </span>
        </h5>

        <section className="letter">
          <main className="letter-body">
            <p>
              THIS IS MY<span>(kenzo)</span> B-DAY GIFT FOR YOU, as you know i
              like to code, so i decided to make you this, along with a small
              surprise — YOULL SEE WHEN URE AT THE BOTTOM OF THE PAGE
            </p>
            <p>
              uhm I wish you a great day today, since today is a celebration of
              you! UHMM yes happy birthday and eh i hope u get the things u
              wanna get and uh as a friend, i hope you know that your presences’
              meaningful yes.
            </p>
            <p>
              We’ve been friends na for around a month, ata... yet anyways
              that’s no reason i shouldn’t make something for you
            </p>
            <p>
              YK TBH I DONT EVEN KNOW HOW TO MAKE SOME WISH YOU WELL LETTER, i
              fr just sing and gala nlng when theres bday. ISTG IF YOU CRINGE
              ITS NOT MY FAULT
              <img className="alien-wtf" src={AlienWtf} alt=">:(" />
            </p>
          </main>

          <aside className="author">
            Well anyways,
            <br />
            <span>
              Kenzo
              <div id="arrow-two"></div>
            </span>
          </aside>
        </section>
      </div>
    </section>
  );
}
