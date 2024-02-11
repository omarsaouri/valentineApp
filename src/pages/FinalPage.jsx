import React from "react";
import image from "../assets/IMG_0588.png";
import { motion } from "framer-motion";
import { VscDebugRestart } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function FinalPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-background  w-3/4 flex flex-col justify-center items-center gap-4 shadow-md rounded-xl p-5">
      <h1 className="font-bold text-3xl text-copy tracking-wider text-center">
        Here is your crown back princess
      </h1>

      <div className="w-72 bg-secondary-dark bg-opacity-10 shadow-xl flex flex-col items-center rounded-lg">
        <motion.p
          className="text-8xl z-20 -mb-9"
          animate={{ y: -5 }}
          transition={{
            repeat: Infinity,
            duration: 0.4,
            repeatType: "reverse",
            type: "tween",
          }}
        >
          👑
        </motion.p>
        <img src={image} alt="pic" />
      </div>
      <div className="text-copy-lighter font-semibold text-lg text-center ">
        I love you so much amira dyali, and i will always be here for you. ❤️
      </div>
      <motion.button
        className="flex gap-1 items-center p-2 rounded-md text-primary-content font-semibold bg-primary-dark"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          navigate("/");
        }}
      >
        <VscDebugRestart />
        <span>Restart</span>
      </motion.button>
    </div>
  );
}

export default FinalPage;
