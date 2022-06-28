import { React, useState } from 'react'
 
function Counter() {
    const [counter, setCounter] = useState(0);
 

    const increase = () => {
      setCounter(count => count+1);
    };
   
  
    const decrease = () => {
      setCounter(count => count-1);
    };
   
    
   
    return (
      <div className="counter">
        <h1>Counter</h1>
        <span className="counter__output">{counter}</span>
        <div className="btn__container">
          <button className="control__btn" onClick={increase}>+</button>
          <button className="control__btn" onClick={decrease}>-</button>
        </div>
      </div>
    );
}

export default Counter;