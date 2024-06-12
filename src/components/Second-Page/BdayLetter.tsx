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
              <svg
                id="arrow-two"
                width="1095"
                height="290"
                viewBox="0 0 1095 290"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M137.327 269.243C134.292 265.051 131.268 260.966 128.398 256.661C126.805 254.271 122.177 248.158 124.989 248.747C131.905 250.197 139.444 255.167 145.769 258.041C151.571 260.679 157.421 263.222 163.18 265.956C167.82 268.157 160.195 269.438 158.188 270.217C144.462 275.544 130.978 281.361 117.602 287.507"
                  stroke="#D6FFF8"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M1092.95 24.7407C1092.95 46.3048 1094.38 65.7997 1081.81 84.8314C1056.56 123.059 1014.5 149.616 967.771 156.701C932.339 162.074 896.71 156.875 861.817 150.556C808.284 140.86 755.477 127.636 703.095 113.454C603.967 86.6158 504.278 61.9819 404.639 36.9182C343.217 21.4675 283.351 5.10045 219.444 2.88952C193.58 1.9947 166.842 2.23969 141.461 7.66947C115.681 13.1847 93.1977 26.0954 72.8818 41.755C54.7469 55.7335 37.0245 71.4911 23.9477 90.0097C10.343 109.276 4.02766 131.378 2.32566 154.368C0.12223 184.131 8.95175 207.96 33.3512 227.774C50.4442 241.655 65.0635 248.679 85.879 256.397C103.78 263.035 119.485 264.322 137.748 267.494"
                  stroke="#D6FFF8"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </aside>
        </section>
      </div>
    </section>
  );
}
