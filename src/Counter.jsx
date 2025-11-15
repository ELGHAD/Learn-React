import React,{useState} from "react";

function Counter() {

  const[count,setCount]=useState(0);
  const increment=()=>{ 
    setCount(count+1);}

      const reset=()=>{ 
    setCount(count==0);}
      const decrement=()=>{ 
    setCount(count-1);}
 
return (
  
    <div>
      <h1>{count} </h1>
      <button onClick={increment}>+</button>
      <button onClick={reset}>0</button>
      <button onClick={decrement}>-</button>
    </div>
)
}
export default Counter;