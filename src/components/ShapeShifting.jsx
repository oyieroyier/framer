/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

// This component primarily deals with using Framer to alter scale, rotation and playing with the border radius.

const ShapeShifting = ({ variants }) => {
  return (
    <motion.div
      variants={variants}
      className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
    >
      <motion.div
        className="size-1/3 bg-rose-400 shadow-md"
        animate={{
          scale: [1, 2, 2, 1], // Scale from 1 to 2, then back to 1. This creates a pulsing effect.
          rotate: [0, 90, 180, 270, 360], // Rotate by 90 degrees in each direction.
          borderRadius: ["10%", "50%", "0%", "10%"], // Change the border radius to create a shape shifting effect.
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity, // Repeat the animation indefinitely.
          repeatDelay: 0.2,
        }}
      ></motion.div>
    </motion.div>
  );
};

export default ShapeShifting;
