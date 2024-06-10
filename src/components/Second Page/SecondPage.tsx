import { useState, useEffect, useRef } from "react";
import Flower from "./Flower";
import ReadingContent from "./ReadingContent";

export default function SecondPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string[]>([]);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      if (loading) {
        setError((prev) => [...prev, "KARA YOUR INTERNET SLOW"]);
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
    }
  }, [loading]);

  return (
    <section className={`second-page ${!loading ? "active" : null}`}>
      <div className="curtain">
        <p>{error}</p>
      </div>

      <ReadingContent setError={setError} />
      <Flower setLoading={setLoading} />
    </section>
  );
}
