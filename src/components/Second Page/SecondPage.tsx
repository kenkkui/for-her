import { useState, useEffect, useRef } from "react";
import Flower from "./Flower";
import Curtain from "./Curtain";
import ContentWrapper from "./Contents/ContentWrapper";
import ContentStructure2 from "./ContentSructure-2";

export default function SecondPage() {
  const [loading, setLoading] = useState(false);
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
      {/* <ContentWrapper setError={setError} /> */}
      <ContentStructure2 />
      {/* <Flower setLoading={setLoading} /> */}
    </section>
  );
}
