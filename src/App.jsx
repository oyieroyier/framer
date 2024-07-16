import { motion } from "framer-motion";
import FadeUpBox from "./components/FadeUpBox";
import ShapeShifting from "./components/ShapeShifting";
import HoverAndTap from "./components/HoverAndTap";

const staggerAnimation = {
  hidden: { opacity: 0 }, // Make the section hidden. The property names can be anything, as long as they is used in the initial and animate attributes.

  visible: {
    opacity: 1, // Make the section visible
    transition: {
      // Add a transition to the animation
      staggerChildren: 0.25, // Display each child 0.25 seconds after the previous
    },
  },
};

const fadeAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function App() {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      {/* motion.section tells your application that this section will be animated */}
      <motion.section
        variants={staggerAnimation}
        initial="hidden" // Which of the variants do you want the page to load with
        animate="visible" // What state in the variants object should the page be in when the animation is done
        className="grid gap-10 p-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {/*
				  	For each child, we don't need the initial and animate properties because in Framer, they inherit the behavior from the parent.
				 */}
        <FadeUpBox variants={fadeAnimation} />
        <ShapeShifting variants={fadeAnimation} />
        <HoverAndTap variants={fadeAnimation} />
        <motion.div
          variants={fadeAnimation}
          className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
        ></motion.div>
        <motion.div
          variants={fadeAnimation}
          className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
        ></motion.div>
        <motion.div
          variants={fadeAnimation}
          className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
        ></motion.div>
      </motion.section>
    </div>
  );
}
