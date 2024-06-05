import { useState, useEffect, useRef } from "react";
import Flower from "./Flower";
import Spline from "@splinetool/react-spline";

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
      <div className="curtain">
        <h1>{error}</h1>
      </div>

      <section className="intro"></section>

      <Flower setLoading={setLoading} render={render} />
    </section>
  );
}
