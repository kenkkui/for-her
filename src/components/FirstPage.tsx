import { Link } from "react-router-dom";

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
      <h1 onMouseEnter={() => setMouseOut(false)}>Is this Kara?</h1>

      <div className="btn-container">
        <Link
          data-btn-no="true"
          onMouseEnter={() => setMouseOut(false)}
          to="/okay"
        >
          No, i ain't wat😠
        </Link>
        <Link
          data-btn-yes="true"
          onMouseEnter={() => setMouseOut(false)}
          to="/next"
        >
          Yes, I am obvi💁🏻
        </Link>
      </div>
    </section>
  );
}
