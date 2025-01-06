import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(10);

  const increaseBy = (value: number) => {
    // setCounter(counter + value);
    // setCounter( (current) => current + value);
    setCounter(Math.max(value + counter, 0));
  };

  return (
    <>
      <h3 className="text-2xl">
        Contador: <small className="font-bold">{counter}</small>{" "}
      </h3>

      <div>
        <button
          onClick={() => increaseBy(1)}
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700 "
        >
          +1
        </button>

        <button
          onClick={() => increaseBy(-1)}
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700 "
        >
          -1
        </button>
      </div>
    </>
  );
};
