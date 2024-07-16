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
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
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
