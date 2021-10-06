//state in functional components
//useState() is the hook, used to define the state.
/*
    Syntax
    ------
    const [variable,function] = useState(data);
*/

import React, { useState } from "react";

function Third(){
    const [sub,setSub] = useState("ReactJS");

    const myFun = ()=>{
        setSub("ReactJS With useState hook");
    };

    return(
        <React.Fragment>
            <h1>{sub}</h1>
            <button onClick={myFun}>Click Me</button>
        </React.Fragment>
    )
}

export default Third;




