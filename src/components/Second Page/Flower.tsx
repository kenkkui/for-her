import { useEffect } from "react";
import Spline from "@splinetool/react-spline";

interface FlowerProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Flower({ setLoading, setError }: FlowerProps) {
  useEffect(() => {
    const loadScene = new Promise((resolve, reject) => {
      const sceneUrl =
        "https://prod.spline.design/o3v1HPnOwXUx88B6/scene.splinecode";

      fetch(sceneUrl)
        .then((response) => {
          if (response.ok) {
            resolve(undefined);
          } else {
            reject("Failed to load scene");
          }
        })
        .catch(() => reject("Failed to load scene"));
    });

    loadScene
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return (
    <Spline scene="https://prod.spline.design/o3v1HPnOwXUx88B6/scene.splinecode" />
  );
}
