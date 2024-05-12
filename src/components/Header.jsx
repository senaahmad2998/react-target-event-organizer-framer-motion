import { useState } from "react";

import NewChallenge from "./NewChallenge.jsx";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
      {/* 
      AnimatePresence is a fragment wrapper to detect an dissaperence of an element
      so it will detect exit props in motion element and run the animation when the element is remove from the DOM
      it will animate modal exit
    */}
      <AnimatePresence>
        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      </AnimatePresence>

      <header id="main-header">
        <h1>Your Challenges</h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, mass: 0.5 }}
          onClick={handleStartAddNewChallenge}
          className="button"
        >
          Add Challenge
        </motion.button>
      </header>
    </>
  );
}
