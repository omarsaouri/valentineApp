import React, { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import YesButton from "../components/YesButton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ValentinePage() {
  const [isExploding, setIsExploding] = useState(false);
  const buttonCount = 70;
  const [buttons, setButtons] = useState([]);
  const [showButtons, setShowButtons] = useState(true);
  const navigate = useNavigate();

  const randomPositions = Array.from({ length: buttonCount }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    rotate: `${Math.floor(Math.random() * 10)}deg`,
  }));

  for (let i = 0; i < buttonCount; i++) {
    const style = {
      position: "absolute",
      top: randomPositions[i].top,
      left: randomPositions[i].left,
      transform: `rotate(${randomPositions[i].rotate})`,
    };
    buttons.push(<YesButton key={i} style={style} />);
  }

  const handleClick = () => {
    setIsExploding(true);
    setShowButtons(false);

    setTimeout(() => {
      setIsExploding(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="bg-background md:w-3/4 sm:w-full   flex flex-col justify-center items-center gap-4 shadow-md rounded-xl p-10">
        <h1 className="text-copy font-bold text-3xl text-center">
          Good job Princess I'm so proud of you
        </h1>
        <h2 className="text-copy-lighter font-semibold text-lg text-center ">
          Now answer the most important question of them all
        </h2>
        <p className="text-copy-lighter font-medium text-sm text-center  opacity-50">
          Hint : You have to search the answer, Move the no buttons to find it
        </p>

        <h3 className="text-4xl mt-10 font-extrabold text-center text-copy tracking-wider">
          Will you be my valentine ?
        </h3>
        <motion.div className="relative w-1/3 h-20 flex">
          {showButtons && buttons}
          <motion.button
            className="absolute top-1/2 left-1/3  bg-secondary px-3 py-1  rounded text-secondary-content shadow-xl self-center"
            onClick={handleClick}
            animate={showButtons ? { y: -10 } : null}
            transition={{
              repeat: showButtons && Infinity,
              duration: 0.4,
              repeatType: "reverse",
              type: "tween",
            }}
            whileTap={{ scale: 0.7 }}
          >
            Yeeees
          </motion.button>
        </motion.div>
        {!showButtons && (
          <button
            className=" bg-primary-dark text-primary-content px-3 py-1 self-end rounded"
            onClick={() => {
              navigate("/final");
            }}
          >
            Next
          </button>
        )}
      </div>
      {isExploding && <ConfettiExplosion />}
    </div>
  );
}

export default ValentinePage;
