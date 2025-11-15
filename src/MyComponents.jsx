import React,{useState} from "react";

function MyComponents() {

   const[name,setName]=useState("John Doe");
   const resetName=()=>{
      setName("hamza");
   }

   return (
     <div>
       <p>Name : {name}</p>
       <button onClick={resetName}>Reset</button>
     </div>
   );
}
export default MyComponents;