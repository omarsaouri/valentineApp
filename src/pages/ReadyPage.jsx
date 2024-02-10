import { motion } from "framer-motion";
import React, { useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function ReadyPage() {
  const [textArray, _] = useState([
    "Are you ready ?",
    "Are you sure you are ready ?",
    "Are you sure you are sure that you are ready ?",
    "Ok one last thing, Do you u love me ?",
    "You sure u love me ?",
    "OKAY FINE, mat3sbich liya ahbiba",
  ]);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [showGoButton, setShowGoButton] = useState(false);
  const [noBtnClicked, setNoBtnClicked] = useState(false);
  const navigate = useNavigate();

  const handleNoClick = () => {
    setNoBtnClicked(true);
  };

  const handleYesClick = () => {
    if (clickCount <= 4) {
      setClickCount(clickCount + 1);
      setTextArrayIndex(textArrayIndex + 1);
      if (clickCount === 4) {
        setShowGoButton(true);
      }
    }
  };

  const handleRestartClick = () => {
    window.location.reload();
  };

  const handleGoClick = () => {
    navigate("/quiz");
  };

  return (
    <div className="bg-background  md:w-1/2 sm:w-full flex flex-col justify-center items-center gap-8 shadow-md rounded-xl p-10">
      {!noBtnClicked ? (
        <>
          <h1 className="text-5xl font-bold text-copy text-center">
            {textArray[textArrayIndex]}
          </h1>

          {clickCount === 0 ? (
            <h2 className="text-center font-semibold text-copy-lighter text-lg">
              You need to answer to my
              <span className="text-copy-light"> Questions</span> correctly to
              get your <span className="text-copy-light">Crown</span> back
              princess. 🧐
            </h2>
          ) : null}
          {showGoButton ? (
            <motion.button
              className="bg-primary-dark text-primary-content font-bold py-3 px-7 text-2xl rounded-md drop-shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleGoClick}
            >
              Start
            </motion.button>
          ) : (
            <div className="flex gap-10">
              <motion.button
                className="bg-success text-success-content px-10 py-3 text-xl rounded-lg shadow"
                onClick={handleYesClick}
                whileHover={{ y: -3 }}
                animate={
                  clickCount === 1
                    ? { scale: 1.2 }
                    : clickCount === 2
                    ? { scale: 1.4 }
                    : clickCount === 3
                    ? { scale: 1.6 }
                    : clickCount === 4
                    ? { scale: 1.8 }
                    : { scale: 1 }
                }
              >
                YES
              </motion.button>
              <motion.button
                className="bg-error text-error-content px-10 py-3 text-xl rounded-lg shadow"
                whileHover={{ y: -3 }}
                onClick={handleNoClick}
              >
                NO
              </motion.button>
            </div>
          )}
        </>
      ) : (
        <>
          <h1 className="text-6xl">😔</h1>
          <h2 className="text-3xl font-bold text-copy text-center">
            OK RIGL, we did all this for nothing.
          </h2>
          <motion.button
            className="flex gap-1 items-center p-2 rounded-md text-primary-content font-semibold bg-primary-dark"
            onClick={handleRestartClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <VscDebugRestart />
            <span>Restart</span>
          </motion.button>
        </>
      )}
    </div>
  );
}

export default ReadyPage;
