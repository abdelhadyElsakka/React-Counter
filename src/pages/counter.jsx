import { React } from 'react'
import Decrease from '../Compnents/decrease';
import Increase from '../Compnents/increase'; 
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'
function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
    return (
      <div className="counter bg-black mt-1 p-5 text-white" >
        <h1 className='p-5'>Support Me</h1>
        <span className="counter__output p-5">{count}$</span>
        <div className="btn__container p-2">
          <Increase increase={() => dispatch(increment())}/>
          <Decrease decrease={() => dispatch(decrement())}/>
        </div>
      </div>
    );
}

export default Counter;