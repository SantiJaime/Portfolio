import { useState } from "react";
import { motion } from "framer-motion";
import "../css/WaveText.css";
import PropTypes from "prop-types";

const WaveText = ({ text, menuOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const letters = text.split("");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { y: 0 },
    visible: {
      y: [0, -20, 0],
      transition: {
        duration: menuOpen ? 1.2 : 0.8,
        repeat: menuOpen ? Infinity : 0,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {!menuOpen ? (
        <motion.div
          className="wave-text-container"
          variants={container}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {letters.map((char, index) => (
            <motion.span
              key={index}
              className="font-bold wave-text-char text-gray-50"
              variants={child}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="wave-text-container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {letters.map((char, index) => (
            <motion.span
              key={index}
              className="font-bold wave-text-char text-gray-50"
              variants={child}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}
    </>
  );
};

WaveText.propTypes = {
  text: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool,
};

export default WaveText;
