import ContentStructure1 from "./Contents/ContentStructure1";
import ContentStructure2 from "./Contents/ContentStructure2";
import ContentStructure3 from "./Contents/ContentStructure3";
import ContentStructure4 from "./Contents/ContentStructure4";
import ContentStructure5 from "./Contents/ContentStructure5";

interface ContentWrapperProps {
  setError: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ContentWrapper({ setError }: ContentWrapperProps) {
  return (
    <>
      <section className="contents-container">
        <ContentStructure1 setError={setError} />
        <ContentStructure2 />
        <ContentStructure3 />
        <ContentStructure4 />
        <ContentStructure5 />
      </section>
    </>
  );
}
