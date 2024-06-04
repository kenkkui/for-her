import Spline from "@splinetool/react-spline";

interface FlowerProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Flower({ setLoading, setError }: FlowerProps) {
  function handleFlowerLoad() {
    setLoading(false);
  }

  return (
    <Spline
      id="spline-flower"
      scene="https://prod.spline.design/o3v1HPnOwXUx88B6/scene.splinecode"
      onLoad={handleFlowerLoad}
    />
  );
}
