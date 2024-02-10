import { motion } from "framer-motion";
import React, { useState } from "react";

function QuizQuestion({
  question,
  wrongAnswer1,
  wrongAnswer2,
  wrongAnswer3,
  rightAnswer,
  setQuizState,
  setTriggerAnimation,
  disableBtns,
}) {
  const handleWrongAnswer = () => {
    setQuizState("wrong");
    setTriggerAnimation(true);

    setTimeout(() => {
      setTriggerAnimation(false);
    }, 1000);
  };

  const handleRightAnswer = () => {
    setQuizState("right");
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="font-bold text-3xl text-copy tracking-wider text-center">
        {question}
      </h1>
      <div className="grid grid-cols-2 gap-x-20 gap-y-10">
        <motion.button
          className="font-semibold bg-primary-dark text-primary-content px-4 py-2 rounded shadow-md tracking-wide hover:bg-primary hover:shadow-none transition-all duration-300 disabled:bg-copy disabled:opacity-40"
          onClick={handleWrongAnswer}
          whileTap={{ scale: 0.7 }}
          disabled={disableBtns}
        >
          {wrongAnswer1}
        </motion.button>
        <motion.button
          className="font-semibold bg-primary-dark text-primary-content px-4 py-2 rounded shadow-md tracking-wide hover:bg-primary hover:shadow-none transition-all duration-300 disabled:bg-copy disabled:opacity-40"
          onClick={handleWrongAnswer}
          whileTap={{ scale: 0.7 }}
          disabled={disableBtns}
        >
          {wrongAnswer2}
        </motion.button>
        <motion.button
          className="font-semibold bg-primary-dark text-primary-content px-4 py-2 rounded shadow-md tracking-wide hover:bg-primary hover:shadow-none transition-all duration-300 disabled:bg-copy disabled:opacity-40"
          onClick={handleWrongAnswer}
          whileTap={{ scale: 0.7 }}
          disabled={disableBtns}
        >
          {wrongAnswer3}
        </motion.button>
        <motion.button
          className="font-semibold bg-primary-dark text-primary-content px-4 py-2 rounded shadow-md tracking-wide hover:bg-primary hover:shadow-none transition-all duration-300 disabled:bg-copy disabled:opacity-40"
          onClick={handleRightAnswer}
          whileTap={{ scale: 0.7 }}
          disabled={disableBtns}
        >
          {rightAnswer}
        </motion.button>
      </div>
    </div>
  );
}

export default QuizQuestion;
