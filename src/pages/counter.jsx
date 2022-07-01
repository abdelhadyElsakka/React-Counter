import { React, useState } from 'react'
import Decrease from '../Compnents/decrease';
import Increase from '../Compnents/increase'; 
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'
function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
    return (
      <div className="counter">
        <h1>Counter</h1>
        <span className="counter__output">{count}</span>
        <div className="btn__container">
          <Increase increase={() => dispatch(increment())}/>
          <Decrease decrease={() => dispatch(decrement())}/>
        </div>
      </div>
    );
}

export default Counter;