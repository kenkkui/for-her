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
                width="1036"
                height="306"
                viewBox="0 0 1036 306"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M224.205 288.976C222.424 286.391 220.603 283.833 218.862 281.221C217.35 278.953 212.805 273.69 215.53 273.753C220.256 273.863 224.081 277.812 228.169 280.187C229.849 281.163 237.704 285.578 240.003 287.712C242.392 289.932 234.634 291.569 231.558 292.653C222.057 296.002 212.829 299.68 203.524 303.453"
                  stroke="#D6FFF8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M1032.27 35.4996C1033.21 49.0953 1034.9 56.4723 1030.68 70.1355C1023.63 93.003 1007.59 112.671 988.52 126.617C950.263 154.591 898.591 156.59 853.259 151.406C802.895 145.646 753.451 130.977 704.358 118.864C640.881 103.2 576.966 89.3172 513.917 71.9466C445.309 53.0442 377.343 33.3627 307.403 19.6531C265.68 11.4745 223.52 4.41872 180.97 2.61805C148.381 1.23887 113.329 2.2532 82.3825 14.1068C50.1005 26.472 23.3256 48.8662 10.3941 81.5111C-3.72737 117.16 1.55862 157.366 23.0713 189.211C50.857 230.342 96.4457 253.682 141.807 269.462C169.777 279.192 194.994 281.487 223.417 286.101"
                  stroke="#D6FFF8"
                  stroke-width="2"
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
