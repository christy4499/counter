import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  const [range, setRange] = useState("")
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  console.log(range);
  return (
    <>
      <div className='d-flex align-items-center  justify-content-center w-100 mt-5 flex-column'>
   <h1 style={{fontsize:'90px'}}>{count}</h1>
  <div className='mt-5 justify-content-evenly'>
  
  <button onClick={()=>dispatch(decrement())} className='btn btn-warning p-3'>Decrement</button>
  <button  onClick={()=>dispatch(reset())} className='btn btn-warning p-3 ms-3'>Reset</button>
  <button onClick={()=>dispatch(increment())} className='btn btn-warning p-3 ms-3'>Increment</button>
  
  
  </div>
      </div>
      <div className='mt-5 w-100'>
        <input onChange={(e)=>setRange(e.target.value)} type="text" className='form-control ' placeholder='enter the range' style={{borderColor:'blue'}}/>
      </div>
    </>
    
  )
}

export default Counter