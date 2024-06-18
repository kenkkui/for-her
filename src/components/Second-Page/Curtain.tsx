interface CurtainProps {
  error: string[];
  loading: boolean;
  curtainUp: boolean;
}

export default function Curtain({ error, loading, curtainUp }: CurtainProps) {
  return (
    <div className={`curtain ${curtainUp ? "active" : ""}`}>
      {!loading ? (
        <>
          <div className="loading-done">
            <h1>hi, loading's done</h1>
          </div>
          <div className="subtext">
            <p>I advice plugging in the cable if your on a computer :&gt;</p>
          </div>
        </>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}
