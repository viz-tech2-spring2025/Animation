import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import {animated, useSpring} from "react-spring"

const ScrollamaDemo = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const springProps = useSpring({
    tranform: 
  })


  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div style={{ margin: "50vh 0", border: "2px dashed skyblue" }}>
      <div style={{ position: "sticky", top: 0, border: "1px solid orchid" }}>
        I'm sticky. The current triggered step index is: {currentStepIndex}
      </div>
      <Scrollama offset={0.2} onStepEnter={onStepEnter} debug>
        {["Tina", "Max", "Lindsey", "Alora"].map((data, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <animated.div
              style={{
                margin: "20vh 0",
                border: "4px solid red",
                // opacity: currentStepIndex === stepIndex ? 1 : 0.2,
              }}
            >
              I'm a Scrollama Step {data} of index {stepIndex}
            </animated.div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default ScrollamaDemo;
