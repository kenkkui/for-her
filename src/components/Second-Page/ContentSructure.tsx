import { ReactNode } from "react";

interface ContentSructureProps {
  children: ReactNode;
  id: string;
  linearBg?: boolean;
  redBg?: boolean;
  beigeBg?: boolean;
  className?: string;
}

// Do not change var below
const columnsNum = 12;

export default function ContentStructure({
  children,
  id,
  linearBg,
  redBg,
  beigeBg,
  className,
}: ContentSructureProps) {
  const columns = Array.from({ length: columnsNum }, (_, i) => {
    return <div className="column" key={i}></div>;
  });

  return (
    <section id={id} className={`content-wrapper ${className}`}>
      <section className="content-structure">{children}</section>

      <section
        className={`content-structure-background ${
          linearBg ? "linear-bg" : ""
        } ${redBg ? "red-bg" : ""} ${beigeBg ? "beige-bg" : ""}`}
      >
        {columns}
      </section>
    </section>
  );
}
