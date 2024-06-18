import ContentStructure1 from "./Contents/ContentStructure1";
import ContentStructure2 from "./Contents/ContentStructure2";
import ContentStructure3 from "./Contents/ContentStructure3";
import ContentStructure4 from "./Contents/ContentStructure4";
import ContentStructure5 from "./Contents/ContentStructure5";

interface ContentWrapperProps {
  loading: boolean;
  setError: React.Dispatch<React.SetStateAction<string[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMouseOverMusic: React.Dispatch<React.SetStateAction<boolean>>;
  setMouseOverScrollBtn: React.Dispatch<React.SetStateAction<boolean>>;
  setMouseOverFlower: React.Dispatch<React.SetStateAction<boolean>>;
  setSprite: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContentWrapper({
  setError,
  setLoading,
  setMouseOverMusic,
  setMouseOverScrollBtn,
  setMouseOverFlower,
  loading,
  setSprite,
}: ContentWrapperProps) {
  return (
    <>
      <section className="contents-container">
        <ContentStructure1
          setError={setError}
          setMouseOverMusic={setMouseOverMusic}
          setSprite={setSprite}
        />
        <ContentStructure2 setSprite={setSprite} />
        <ContentStructure3 />
        <ContentStructure4 />
        <ContentStructure5
          loading={loading}
          setLoading={setLoading}
          setMouseOverScrollBtn={setMouseOverScrollBtn}
          setMouseOverFlower={setMouseOverFlower}
        />
      </section>
    </>
  );
}
