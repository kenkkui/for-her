import YesNoContainer from "./YesNoContainer";
import MainContent from "./MainContent";
interface FirstProps {
  handleMouseLeave: () => void;
  setMouseOut: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FirstPage({
  handleMouseLeave,
  setMouseOut,
}: FirstProps) {
  return (
    <section
      className="content-1"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setMouseOut(false)}
    >
      <MainContent
        src="https://media.tenor.com/JhVlbsQoCboAAAAi/cute-dancing.gif"
        alt="cutie"
      >
        <h1>Is this Kara?</h1>
      </MainContent>

      <YesNoContainer yesTo="/next" isButton />
    </section>
  );
}
