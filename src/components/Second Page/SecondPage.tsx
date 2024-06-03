import Flower from "./Flower";
import { useState } from "react";

export default function SecondPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <section className="second-page">
      <div className="curtain"></div>
      <div className="text-wrapper">
        <p>Here's a lily i made,</p>
        <p>
          IT TOOK <strong>SCOOPER</strong> LONG
        </p>
        <p>but worth it </p>
      </div>

      <Flower setLoading={setLoading} setError={setError} />
    </section>
  );
}
