/* eslint-disable react-hooks/exhaustive-deps */
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const AnimateText = () => {
  const containerRef = useRef(null); // Create a ref for the container element we want to target.

  const isInView = useInView(containerRef, { once: true }); // The animation for the targeted container will only run when it is in view and only run once.

  const mainControls = useAnimation(); // Create a controls object for the main animation.

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"], // "start end" means that we will start tracking the element when it's beginning is at the end of the target container. "end end" means we will stop tracking it when its end reaches the end of the viewport.
  });

  const paragraphOneTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"],
  );

  const paragraphTwoTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"],
  );
  return (
    <section className="flex flex-col gap-10 text-center" ref={containerRef}>
      <motion.h1
        className="text-center text-5xl tracking-wide text-slate-100"
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.3 }}
      >
        Just Keep Scrolling
      </motion.h1>

      <motion.p
        className="m-auto w-3/4 text-2xl font-thin text-slate-100 lg:w-1/2 lg:text-4xl"
        style={{ translateX: paragraphOneTransform }}
      >
        Your bones don&apos;t break, mine do. That&apos;s clear. Your cells
        react to bacteria and viruses differently than mine. You don&apos;t get
        sick, I do. That&apos;s also clear. But for some reason, you and I react
        the exact same way to water. We swallow it too fast, we choke. We get
        some in our lungs, we drown. However unreal it may seem, we are
        connected, you and I. We&apos;re on the same curve, just on opposite
        ends.
      </motion.p>

      <motion.p
        className="m-auto w-3/4 text-2xl font-thin text-slate-100 lg:w-1/2 lg:text-4xl"
        style={{ translateX: paragraphTwoTransform }}
      >
        The path of the righteous man is beset on all sides by the iniquities of
        the selfish and the tyranny of evil men. Blessed is he who, in the name
        of charity and good will, shepherds the weak through the valley of
        darkness, for he is truly his brother&apos;s keeper and the finder of
        lost children. And I will strike down upon thee with great vengeance and
        furious anger those who would attempt to poison and destroy My brothers.
        And you will know My name is the Lord when I lay My vengeance upon thee.
      </motion.p>
    </section>
  );
};

export default AnimateText;
