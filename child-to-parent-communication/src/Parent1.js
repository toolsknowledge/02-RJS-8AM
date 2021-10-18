import React, { useState } from "react";
import Child1 from "./Child1";

function Parent1(){

    const [data1,setData1] = useState({});
    const [data2,setData2] = useState({});

    const fun_one = (arg1)=>{
        setData1(arg1);
        
    };

    const fun_two = (arg1)=>{
        setData2(arg1);
    };

    return(
        <React.Fragment>
            <Child1 fun_one={fun_one} fun_two={fun_two}></Child1>
            <h1>{JSON.stringify(data1)}</h1>
            <h1>{JSON.stringify(data2)}</h1>
        </React.Fragment>
    )
}

export default Parent1;