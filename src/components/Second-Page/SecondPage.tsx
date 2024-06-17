import { useState, useEffect, useRef } from "react";
import Curtain from "./Curtain";
import ContentWrapper from "./ContentsWrapper";
import MouseMsg from "../MouseMsg";

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

  const [mouseOverMusic, setMouseOverMusic] = useState(false);
  const [mouseOverScrollBtn, setMouseOverScrollBtn] = useState(false);
  const [mouseOverFlower, setMouseOverFlower] = useState(false);

  return (
    <section className={`second-page ${!loading ? "page-loaded" : ""}`}>
      <section className="mouse-msg-container">
        <div className="mouse-msg-limit">
          <MouseMsg
            mouseOverFlower={mouseOverFlower}
            mouseOverMusic={mouseOverMusic}
            mouseOverScrollBtn={mouseOverScrollBtn}
          />
        </div>
      </section>

      <Curtain error={error} loading={loading} />

      <ContentWrapper
        setError={setError}
        setLoading={setLoading}
        setMouseOverMusic={setMouseOverMusic}
        setMouseOverScrollBtn={setMouseOverScrollBtn}
        setMouseOverFlower={setMouseOverFlower}
      />
    </section>
  );
}
