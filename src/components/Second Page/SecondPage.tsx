import { useState, useEffect, useRef } from "react";
import Flower from "./Flower";
import Curtain from "./Curtain";
import ContentWrapper from "./ContentWrapper";

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
      <Curtain error={error} />
      <ContentWrapper setError={setError} />
      <Flower setLoading={setLoading} />
    </section>
  );
}
