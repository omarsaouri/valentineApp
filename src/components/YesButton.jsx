import { motion } from "framer-motion";
import React, { useState } from "react";

function YesButton({ setIsExploding, style }) {
  return (
    <motion.button
      style={style}
      className="bg-copy text-secondary-content px-3 py-1 z-10 rounded"
      drag
      dragConstraints={{ top: 0, bottom: 200 }}
    >
      No
    </motion.button>
  );
}

export default YesButton;
