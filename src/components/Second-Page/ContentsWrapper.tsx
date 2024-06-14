import { useRef, useEffect } from "react";
import ContentStructure from "./ContentSructure";
import BdayLetter from "./BdayLetter";

import ArrowThree from "../Svg-components/ArrowThree";
import TextColumns from "./TextColumns";
import ContentStructure1 from "./Contents/ContentStructure1";
import ContentStructure2 from "./Contents/ContentStructure2";
import ContentStructure3 from "./Contents/ContentStructure3";
import ContentStructure4 from "./Contents/ContentStructure4";
import ContentStructure5 from "./Contents/ContentStructure5";

interface ContentWrapperProps {
  setError: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ContentWrapper({ setError }: ContentWrapperProps) {
  const contentsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const contentElem = contentsRef.current as HTMLElement;
    if (contentElem) {
      contentElem.addEventListener("scroll", handleScroll);
      return () => {
        contentElem.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  function handleScroll() {
    const element = contentsRef.current as HTMLElement;
    const { scrollTop, scrollHeight, clientHeight } = element;
    // Remove decimal for scrolltop, and minus one px for scroll height for some reason, i dont undertsand but if it work -- dont touch it
    if (Math.trunc(scrollTop) + clientHeight === scrollHeight - 1) {
      console.log("sa bottom na ako");
    }
  }

  return (
    <section className="contents-container" ref={contentsRef}>
      <div className="test"></div>
      <ContentStructure1 setError={setError} />
      <ContentStructure2 />
      <ContentStructure3 />
      <ContentStructure4 />
      <ContentStructure5 />
    </section>
  );
}
