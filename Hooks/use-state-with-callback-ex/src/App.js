import React from "react";
import { useStateWithCallbackLazy } from "use-state-with-callback";

function App(){
  const [count,setCount] = useStateWithCallbackLazy(0);

  const handleClick = ()=>{
    setCount(count+1, (latestCount)=>{
        if(latestCount<20){
            console.log("thresold value not reached");
        }else{
          console.log("thresold value reached");
        }
    } );
  };


  return(
    <React.Fragment>
        <h1>Count:{count}</h1>
        <button onClick={handleClick}>Increment</button>
    </React.Fragment>
  )


}

export default App;