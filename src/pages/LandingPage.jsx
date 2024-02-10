import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const ref = useRef(null);
  const [elementHeight, setElementHeight] = useState(0);
  const [crownClicked, setCrownClicked] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.clientHeight;
      setElementHeight(height);
      console.log(height);
    }
  }, []);

  return (
    <>
      <motion.div className="bg-background  md:w-1/2 sm:w-full flex flex-col justify-center items-center gap-8 shadow-md rounded-xl p-10">
        {!crownClicked ? (
          <h1 className="text-5xl font-bold text-copy text-center">
            Dear my princess <span className="text-primary-dark">Nihed</span>
          </h1>
        ) : (
          <h1 className="text-5xl font-bold text-copy text-center">Hold Up</h1>
        )}

        <h2 className="text-copy-lighter text-2xl font-semibold text-wrap text-center">
          {!crownClicked
            ? "This website is for you"
            : "You cant get the crown that easy, How would i know that you are the real Nihed ? HUH ??"}
        </h2>
        {crownClicked ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="bg-primary-dark text-primary-content font-bold py-5 px-10 text-2xl rounded-md drop-shadow-xl"
          >
            <Link to="/ready">
              <span className="text-shadow-sm shadow-gray-700">
                Get your Crown back
              </span>
            </Link>
          </motion.button>
        ) : null}
      </motion.div>

      <motion.div
        className="absolute flex flex-col items-center cursor-pointer"
        initial={{ y: -windowHeight }}
        ref={ref}
        animate={{
          y: windowHeight / 2 - elementHeight / 2,
        }}
        transition={{ duration: 3, ease: "linear", type: "spring", delay: 3 }}
        onClick={() => {
          setCrownClicked(true);
        }}
      >
        {!crownClicked ? (
          <motion.span
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{
              opacity: 1,
              visibility: "visible",
            }}
            transition={{
              duration: 2,
              ease: "linear",
              type: "spring",
              delay: 5,
            }}
            className="text-md bg-foreground p-3 rounded text-copy border  border-border w-72 text-center text-wrap"
          >
            Oops... You dropped your crown
            <span className="font-semibold text-secondary"> Click it</span> to
            take it back.
          </motion.span>
        ) : null}

        <motion.div
          className="text-7xl"
          animate={{
            x: crownClicked ? windowWidth / 2.5 : 0,
            opacity: crownClicked ? 0 : 1,
          }}
          transition={{ duration: 3, ease: "linear", type: "spring" }}
        >
          👑
        </motion.div>
      </motion.div>
    </>
  );
}

export default LandingPage;
