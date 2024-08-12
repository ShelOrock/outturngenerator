import { useState } from "react";

const useStepper = stepLabels => {

  const steps = stepLabels.map((label, index) => ({
    id: index + 1,
    step: index + 1,
    label
  }));

  const [ activeStep, setActiveStep ] = useState(1);

  const incrementStep = () => {
    setActiveStep(activeStep + 1);
  };

  const decrementStep = () => {
    setActiveStep(activeStep - 1);
  };

  return {
    steps,
    activeStep,
    setActiveStep,
    incrementStep,
    decrementStep
  };
};

export default useStepper;
