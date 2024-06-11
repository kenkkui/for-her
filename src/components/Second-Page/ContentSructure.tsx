import { ReactNode } from "react";

interface ContentSructureProps {
  children: ReactNode;
  id: string;
}

// Do not change var below
const columnsNum = 12;

export default function ContentStructure({
  children,
  id,
}: ContentSructureProps) {
  const columns = Array.from({ length: columnsNum }, (_, i) => {
    return <div className="column" key={i}></div>;
  });

  return (
    <section id={id} className="content-wrapper">
      <section className="content-structure">{children}</section>

      <section className="content-structure-background">{columns}</section>
    </section>
  );
}
