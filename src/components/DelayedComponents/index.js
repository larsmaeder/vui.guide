import * as React from "react";

const DelayedComponents = ({ components, delay }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    let intervalId;
    if (currentIndex < components.length) {
      intervalId = setInterval(() => {
        setCurrentIndex(currentIndex + 1);
      }, delay);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [currentIndex, components.length, delay]);

  return (
    <div>
      {components.slice(0, currentIndex).map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
};

export default DelayedComponents;
