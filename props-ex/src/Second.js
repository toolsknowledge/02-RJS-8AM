import React, { useState } from "react";
import Third from "./Third";
function Second(props){
    const [msg,setMsg] = useState("Hello");
    return(
        <React.Fragment>
           
           <p style={{color:"red"}}>{props.children}</p>

            <Third {...props}
                   key6={msg}>Welcome</Third>


        </React.Fragment>
    )
}
export default Second;