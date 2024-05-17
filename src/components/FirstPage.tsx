import YesNoContainer from "./YesNoContainer";
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
      <div>
        <h1>Is this Kara?</h1>
        <img
          src="https://media.tenor.com/JhVlbsQoCboAAAAi/cute-dancing.gif"
          alt="cutie"
        />
      </div>

      <YesNoContainer yesTo="/next" isButton />
    </section>
  );
}
