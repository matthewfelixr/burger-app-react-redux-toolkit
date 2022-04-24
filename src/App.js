import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Burger from "./Components/Burger/Burger";
import Product from "./Components/Product/Product";
import counterSlice from "./store/counter";

function App() {

  const count = useSelector (store => store.counter.count)
  const dispatch =useDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>dispatch(counterSlice.actions.increment())}>Increment</button>
      <button onClick={()=>dispatch(counterSlice.actions.decrement())}>decrement</button>
      <button onClick={()=>dispatch(counterSlice.actions.increaseByNumber(5))}>Increase by 5</button>
      <button onClick={()=>dispatch(counterSlice.actions.increaseByNumber(10))}>Increase by 10</button>
      <hr/>
      <Burger/>
      <hr/>
      <Product/>
    </div>
  );
}

export default App;
