import { useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

export default function useObserveGroup() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }

    return function () {
      controls.stop("animate");
    };
  }, [controls, inView]);

  return { ref, controls };
}
