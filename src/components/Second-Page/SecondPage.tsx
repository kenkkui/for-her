import { useState, useEffect, useRef } from "react";
import Curtain from "./Curtain";
import ContentWrapper from "./ContentsWrapper";
import MouseMsg from "../MouseMsg";
import { defaultSprite } from "../../data";
// import { spriteInterface } from "../../types/types";

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
  const [sprite, setSprite] = useState(defaultSprite);

  const [curtainUp, setCurtainUp] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!loading) {
      window.setTimeout(() => {
        setCurtainUp(true);
      }, 7350);
    }
  }, [loading]);

  useEffect(() => {
    if (curtainUp) {
      setTimeout(() => {
        setIsActive(true);
      }, 400);
    }
  }, [curtainUp]);

  return (
    <section
      className={`second-page ${!loading ? "page-loaded" : ""} ${
        isActive ? "active" : ""
      }`}
    >
      <section className="mouse-msg-container">
        <div className="mouse-msg-limit">
          <MouseMsg
            mouseOverFlower={mouseOverFlower}
            mouseOverMusic={mouseOverMusic}
            mouseOverScrollBtn={mouseOverScrollBtn}
            sprite={sprite}
          />
        </div>
      </section>

      <Curtain error={error} loading={loading} curtainUp={curtainUp} />

      <ContentWrapper
        setSprite={setSprite}
        loading={loading}
        setError={setError}
        setLoading={setLoading}
        setMouseOverMusic={setMouseOverMusic}
        setMouseOverScrollBtn={setMouseOverScrollBtn}
        setMouseOverFlower={setMouseOverFlower}
      />
    </section>
  );
}
