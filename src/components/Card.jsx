import React, { useContext } from 'react';
import { CounterContext } from '../App';

function Card() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={(e) => setCounter(counter + 1)}>ok</button>
    </div>
  );
}

export default Card;
