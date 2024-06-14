import { ReactNode } from "react";

interface TextColumnsProps {
  hidden?: boolean;
  children: ReactNode;
}

export default function TextColumns({ hidden, children }: TextColumnsProps) {
  return (
    <section className={`text-column ${hidden ? "hidden" : ""}`}>
      {children}
    </section>
  );
}
