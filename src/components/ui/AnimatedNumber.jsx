"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value, duration = 2, className }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration * 60); // Approximate frames for smooth animation
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setDisplayValue(Math.floor(start));
    }, 1000 / 60); // Update at ~60 FPS

    return () => clearInterval(interval);
  }, [value, duration]);

  return <motion.span className={className}>{displayValue}+</motion.span>;
};

export default AnimatedNumber;
