import Flower from "./Flower";
import { useState, useEffect } from "react";

export default function SecondPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [render, setRender] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      setRender(true);
    }, 1500);
  }, []);

  return (
    <section className="second-page">
      <div className={`curtain ${!loading && render ? "active" : null}`}></div>

      {!loading && render && (
        <>
          <div className="text-wrapper">
            <p>Here's a lily i made,</p>
            <p>
              IT TOOK <strong>SCOOPER</strong> LONG
            </p>
            <p>but worth it </p>
          </div>
        </>
      )}

      {!loading && !render && <p>YOUR INTERNET NOT WOKRING GIRL</p>}

      <Flower setLoading={setLoading} setError={setError} />
    </section>
  );
}
