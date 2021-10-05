import React, { useState } from "react";

function Third(){
    const [sub,setSub] = useState("ReactJS");
    return(
        <React.Fragment>
           <h1>{sub}</h1>
           <button>ClickMe</button>
        </React.Fragment>
    )
}

export default Third;