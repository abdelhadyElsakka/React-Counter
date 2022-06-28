import { React, useState } from 'react'
import Decrease from './decrease';
import Increase from './increase'; 
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
          <Increase increase={increase}/>
          <Decrease decrease={decrease}/>
        </div>
      </div>
    );
}

export default Counter;