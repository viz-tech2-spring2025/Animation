import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import { AnimatedStep } from "./AnimatedStep";

const ScrollamaSpring = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // Callback fires when a Step enters the viewport.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div
      style={{
        margin: "50vh 0",
        border: "2px dashed skyblue",
        padding: "10px",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          border: "1px solid orchid",
          padding: "10px",
          background: "white",
          zIndex: 10,
        }}
      >
        I'm sticky. The current triggered step index is: {currentStepIndex}
      </div>
      <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
        {[1, 2, 3, 4].map((value, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div
              style={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AnimatedStep
                stepIndex={stepIndex}
                currentStepIndex={currentStepIndex}
              >
                I'm a Scrollama Step {value} of index {stepIndex}
              </AnimatedStep>
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default ScrollamaSpring;
