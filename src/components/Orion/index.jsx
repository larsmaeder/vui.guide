import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Orion = ({ steps }) => {
  const [displayQueue, setDisplayQueue] = useState(["1"]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const stepsMap = steps.reduce((acc, step) => {
    acc[step.id] = step;
    return acc;
  }, {});

  const getTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    if (currentIndex >= displayQueue.length) return;

    const currentStep = stepsMap[displayQueue[currentIndex]];

    const intervalId = setTimeout(() => {
      if (currentStep.end) {
        return;
      }

      if (currentStep.trigger) {
        setDisplayQueue([...displayQueue, currentStep.trigger]);
      }

      setCurrentIndex(currentIndex + 1);
    }, 2000);

    return () => clearTimeout(intervalId);
  }, [currentIndex, displayQueue, stepsMap]);

  return (
    <div>
      <h1>Monologue</h1>
      <div>
        {displayQueue.slice(0, currentIndex + 1).map((id, index) => {
          const step = stepsMap[id];
          return (
            <div key={step.id}>
              {index === 0 && <div>{getTime()} Orion:</div>}
              {step.message && <div>{step.message}</div>}
              {step.component && step.component}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Orion.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string,
      component: PropTypes.element,
      trigger: PropTypes.string,
      end: PropTypes.bool,
    })
  ).isRequired,
};

export default Orion;
