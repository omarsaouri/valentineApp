import React, { useEffect, useState } from "react";
import QuizQuestion from "../components/QuizQuestion";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";

function QuizPage() {
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [quizState, setQuizState] = useState("thinking");
  const [url, setUrl] = useState(
    "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png"
  );
  const [emojiState, setEmojiState] = useState("Thinking...");
  const [backgroundColor, setBackgroundColor] = useState("background");
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [disableGoNext, setDisableGoNext] = useState(true);
  const [disableBtns, setDisableBtns] = useState(false);
  const [questionsArray, _q] = useState([
    "When was the day we got back together ?",
    "What's my favourite part of your body ?",
    "What's the most thing I hate in this world ?",
    "How much do I love you ?",
    "What's the thing that u can do that makes me the happiest ?",
  ]);
  const [wrongAnswer1Array, _w1] = useState([
    "23/12/2022",
    "Your smile",
    "You",
    "A lot",
    "Complimenting me",
  ]);

  const [wrongAnswer2Array, _w2] = useState([
    "28/12/2022",
    "Your waist",
    "Lying",
    "A looooot",
    "Being proud of me",
  ]);

  const [wrongAnswer3Array, _w3] = useState([
    "25/12/2022",
    "Your hair",
    "Your ex",
    "So much ",
    "Giving me hugs",
  ]);

  const [rightAnswerArray, _wr] = useState([
    "26/12/2022",
    "Your eyes",
    "Ngirk :)",
    "Chwiya",
    "Cooking for me",
  ]);

  useEffect(() => {
    if (quizState === "wrong") {
      setUrl(
        "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Disappointed%20Face.png"
      );
      setEmojiState("You wrong. Try Again Baby");
      setBackgroundColor("error");
    } else if (quizState === "right") {
      setUrl(
        "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Partying%20Face.png"
      );
      setEmojiState("That's Right !!!");
      setBackgroundColor("success");
      setDisableGoNext(false);
      setDisableBtns(true);
    } else {
      setUrl(
        "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png"
      );
      setEmojiState("Thinking...");
      setBackgroundColor("background");
      setDisableGoNext(true);
      setDisableBtns(false);
    }
  }, [quizState]);

  const handleNextClick = () => {
    setQuizState("thinking");
    setQuestionNumber(questionNumber + 1);
    if (questionNumber === 5) {
      navigate("/valentine");
    }
  };

  return (
    <motion.div
      className={`bg-${backgroundColor} bg-opacity-50  md:w-1/2 sm:w-full  flex flex-col justify-center items-center gap-8 shadow-md rounded-xl p-10`}
      initial={{ y: 0 }}
      animate={
        triggerAnimation
          ? { x: [0, 20, -20, 0] }
          : quizState === "right"
          ? { y: [-40, 0, -40, 0] }
          : null
      }
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-copy-lighter font-extrabold text-lg text-shadow-lg">
          <span className="text-copy-light">{questionNumber}</span> / 5
        </p>
        <img src={url} width="100" height="100" />
        <h1 className="text-copy-light font-bold text-2xl">{emojiState}</h1>
      </div>
      <QuizQuestion
        question={questionsArray[questionNumber - 1]}
        wrongAnswer1={wrongAnswer1Array[questionNumber - 1]}
        wrongAnswer2={wrongAnswer2Array[questionNumber - 1]}
        wrongAnswer3={wrongAnswer3Array[questionNumber - 1]}
        rightAnswer={rightAnswerArray[questionNumber - 1]}
        setQuizState={setQuizState}
        setTriggerAnimation={setTriggerAnimation}
        disableBtns={disableBtns}
      />
      <button
        onClick={handleNextClick}
        disabled={disableGoNext}
        className="font-semibold bg-secondary-dark text-primary-content px-4 py-2 rounded shadow-md tracking-wide hover:bg-secondary hover:shadow-none transition-all duration-300 disabled:bg-secondary-light disabled:opacity-30"
      >
        Go next
      </button>
      {quizState === "right" && <ConfettiExplosion />}
    </motion.div>
  );
}

export default QuizPage;
