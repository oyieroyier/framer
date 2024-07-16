/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

// This component primarily deals with changing opacity.
const FadeUpBox = ({ variants }) => {
  return (
    <motion.div
      variants={variants}
      className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
    >
      <motion.div
        className="size-20 rounded-lg bg-stone-100"
        initial={{ opacity: 0, y: 100 }} // The box is invisible initially and is positioned 100px below the starting point. 
        animate={{ opacity: 1, y: 0 }} // The box is completely visible during animation and is restored to its default position.
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }} // The animation takes 1 second, uses easeInOut easing function, and starts after 0.2 seconds of the overall animation.
      ></motion.div>
      <motion.div
        className="size-20 rounded-full bg-stone-100"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "backInOut", delay: 0.5 }}
      ></motion.div>
    </motion.div>
  );
};

export default FadeUpBox;
