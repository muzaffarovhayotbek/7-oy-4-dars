import React, { createContext, useState } from 'react';
import Card from './components/Card';

export const CounterContext = createContext(null);
function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <CounterContext.Provider value={{ counter, setCounter }}>
        <Card />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
