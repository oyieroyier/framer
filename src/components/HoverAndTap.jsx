/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

// This component primary deals with animation when a user hovers over an element or taps on it, in our case a button.
const HoverAndTap = ({ variants }) => {
  return (
    <motion.div
      variants={variants}
      className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
    >
      <motion.button
        className="w-1/2 rounded-lg bg-emerald-600 py-4 text-2xl"
        whileTap={{ scale: 0.9 }} // The button shrinks by a scale of 0.9 when a user clicks.
        whileHover={{
          scale: 1.1, // The button grows by a scale of 1.1 when a user hovers over it.
          backgroundColor: "#d1d5db",
        }}
        transition={{
          bounceDamping: 50,
          bounceStiffness: 600,
        }}
      >
        Buy Now
      </motion.button>
    </motion.div>
  );
};

export default HoverAndTap;
