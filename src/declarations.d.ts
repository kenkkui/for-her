declare module "@splinetool/react-spline" {
  import * as React from "react";

  interface SplineProps {
    scene: string;
    onLoad?: (spline: SplineInstance) => void;
    onError?: (error: Error) => void;
    [key: string]: any;
  }

  interface SplineInstance {s
    play: () => void;
    pause: () => void;
    stop: () => void;
    [key: string]: any;
  }

  const Spline: React.FC<SplineProps>;

  export default Spline;
}
