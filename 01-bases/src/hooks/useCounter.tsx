import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState<number>(10);

  const increaseBy = (value: number) => {
    // setCounter(counter + value);
    // setCounter( (current) => current + value);
    setCounter(Math.max(value + counter, 0));
  };

  return {
    //Properties
    counter,

    //Actions
    increaseBy,
  };
};
