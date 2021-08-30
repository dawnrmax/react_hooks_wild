import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  const updateCounter = (e) => {
      const value = parseInt(e.target.value);
      if (! Number.isInteger(value)) {
          return;
      }
      setCount(value);
  }

  return (
    <div>
      <p id='counter'>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      <input onChange={updateCounter}></input>
    </div>
  );
}

export default Counter;