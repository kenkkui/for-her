import Flower from "./Flower";
import { useState, useEffect, useRef } from "react";

export default function SecondPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [render, setRender] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      if (loading) {
        setError("KARA YOUR INTERNET SLOW");
      }
    }, 3000);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!loading && timerRef.current) {
      window.clearTimeout(timerRef.current);

      window.setTimeout(() => {
        setRender(true);
      }, 200);
    }
  }, [loading]);

  return (
    <section className={`second-page ${render ? "active" : null}`}>
      <div className="curtain">{error}</div>

      {render && (
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

      <Flower setLoading={setLoading} setError={setError} />
    </section>
  );
}
