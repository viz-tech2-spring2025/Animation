import React from "react";
import { useSpring, animated } from "react-spring";

//  an AnimatedStep component that receives the step's index and the current active step index
export const AnimatedStep = ({ stepIndex, currentStepIndex, children }) => {
  // Define spring properties that change when the step is active
  const springProps = useSpring({
    opacity: currentStepIndex === stepIndex ? 1 : 0.2,
    transform: currentStepIndex === stepIndex ? "scale(1.5)" : "scale(1)",
    config: { tension: 170, friction: 26 },
  });

  return (
    <animated.div
      style={{
        margin: "5vh 0",
        padding: "20px",
        border: "1px solid gray",
        ...springProps,
      }}
    >
      {children}
    </animated.div>
  );
};
