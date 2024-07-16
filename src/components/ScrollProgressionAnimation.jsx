/* eslint-disable react/prop-types */
import { motion, useScroll } from "framer-motion";

// Similar to web pages which have a bar showing you how much you have scrolled on the page/how much of the blog you have read.

const ScrollProgressionAnimation = ({ variants }) => {
  // useScroll hook is used to track the scrolling information of the component
  const { scrollYProgress: completionProgress } = useScroll();

  return (
    <motion.div
      variants={variants}
      className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
    >
      <div className="aspect-square w-40 rounded-xl bg-gray-50/20">
        {/*
					The container div does not have motion tag because it is not being actively animated.
					
					The animation is in the child component below which has the motion tag. */}

        <motion.div
          className="size-full origin-bottom bg-gray-400"
          style={{ scaleY: completionProgress }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollProgressionAnimation;
