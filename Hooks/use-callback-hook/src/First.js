import React, { useCallback, useState } from "react";
import Second from "./Second";

function First(){

    const [num,setNum] = useState(0);

    const my_fun = useCallback(()=>{
        setNum((num)=>num-5)
    },[setNum]);


    return(
        <React.Fragment>
            <Second key1={my_fun}></Second>
            <h1>{num}</h1>
        </React.Fragment>
    )
};

export default First;