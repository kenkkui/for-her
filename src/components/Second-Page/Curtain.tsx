import { useState, useEffect } from "react";

interface CurtainProps {
  error: string[];
  loading: boolean;
}

export default function Curtain({ error, loading }: CurtainProps) {
  const [curtainUp, setCurtainUp] = useState(false);

  useEffect(() => {
    if (!loading) {
      window.setTimeout(() => {
        setCurtainUp(true);
      }, 7350);
    }
  }, [loading]);

  return (
    <div className={`curtain ${curtainUp ? "active" : ""}`}>
      <div className="loading-done">
        <h1>hi, loading's done</h1>
      </div>
      <div className="subtext">
        <p>I advice plugging in the cable if your on a computer :&gt;</p>
      </div>
    </div>
  );
}
