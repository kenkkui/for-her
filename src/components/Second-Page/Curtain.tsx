interface CurtainProps {
  error: string[];
}

export default function Curtain({ error }: CurtainProps) {
  return (
    <div className="curtain">
      <p>{error}</p>
    </div>
  );
}
