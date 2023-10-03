import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/app/features/counter/counterSlice';
import { checkedDecrement, checkedIncrement } from './redux/app/features/theme/themeSpanSlice';
import { getCountry } from './redux/app/features/countApi/countrySlice';

function App() {
  const dispatch = useDispatch()
const {counter} = useSelector(state => state.counter)
const {country} = useSelector(state => state.country)
useEffect(()=>{
  dispatch(getCountry())
},[])
console.log("country",country)  
  return (
    <div className="App">
        <span onClick={()=> dispatch(decrement())} 
        style={{
          padding:"10px",
          backgroundColor:"blue",
          borderRadius:"10px",
          color:"white",
          margin:"5px",
          cursor:"pointer"
        }}
        >-</span>
        <span>{counter}</span>
        <span onClick={()=> dispatch(increment())}
         style={{
          padding:"10px",
          backgroundColor:"red",
          borderRadius:"10px",
          color:"white",
          margin:"5px",
          cursor:"pointer"
        }}
        >+</span>



          <button onClick={()=> dispatch(checkedDecrement())}>Theme decrement</button>
            <div> salam</div>
          <button onClick={()=> dispatch(checkedIncrement())}>Theme increment</button>

    </div>
  );
}

export default App;
