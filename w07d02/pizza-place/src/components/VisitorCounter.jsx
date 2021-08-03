import {useState} from 'react';

const VisitorCounter = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((prev) => prev + 1);
    setCounter((latestValueForState) => latestValueForState + 1);
    setCounter((latestValueForState) => latestValueForState + 1);
  };

  return (
    <div>
      <h2>Visitor Counter</h2>
      <h2>Num visitors: {counter}</h2>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
};

export default VisitorCounter;
