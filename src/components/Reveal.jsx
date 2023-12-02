import React, { useRef, useEffect } from "react";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";

function Reveal(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  var displayedCounter = 0;
  var delayAmount = 0.3;

  useEffect(() => {
    if (isInView) {
      displayedCounter++;
      mainControls.start("visible");
    }
    if (displayedCounter > 2) {
      delayAmount = 0.4;
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: delayAmount }}
      >
        {props.children}
      </motion.div>
    </div>
  );
}
export default Reveal;
