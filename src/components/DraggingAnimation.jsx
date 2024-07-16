/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

// This component primary deals with animation when a user drags an element

const DraggingAnimation = ({ variants }) => {
  return (
    <motion.div
      variants={variants}
      className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
    >
      <motion.div
        className="size-1/3 cursor-grab rounded-3xl bg-orange-500"
        drag // Enables dragging
        dragConstraints={{ top: -200, left: 0, right: 0, bottom: 0 }} // Restricts dragging to the parent element
        dragTransition={{
          bounceStiffness: 600, // How much the element should bounce when being dragged
          bounceDamping: 10, // How much the element should bounce when released
        }}
      ></motion.div>
    </motion.div>
  );
};

export default DraggingAnimation;
