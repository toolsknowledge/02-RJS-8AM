import React, { useEffect, useState } from "react";

function App(){
    const [age,setAge] = useState(0);
    const [retirement,setRetirement] = useState(false);

    useEffect(()=>{
        console.log("Retirement");
    },[retirement]);



    useEffect(()=>{
        console.log("I am born");
    },[]);

    const ageUp = ()=>{
      setAge(age+10);
    };

    useEffect(()=>{
       if(age>=70){
         setRetirement(true);
       }else{
          console.log("i am growing");  
       }
    });


    return(
       <React.Fragment>
          <h1>Age:{age}</h1>
          <button onClick={ageUp}>Age Up</button>
       </React.Fragment>
    )
}

export default App;