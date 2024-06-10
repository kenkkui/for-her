import { useState, useEffect, useRef } from "react";
import Flower from "./Flower";
import Content1 from "./Contents/Content-1";
import Content2 from "./Contents/Content-2";
import Curtain from "./Curtain";

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
      <Content1 setError={setError} />
      <Flower setLoading={setLoading} />
    </section>
  );
}
