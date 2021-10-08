import React from "react";
import Fourth from "./Fourth";
function Third(props){
    return(
        <React.Fragment>

            <h1 style={{color:"red"}}>{props.children}</h1>


            <Fourth {...props}>ReactJS With JSX</Fourth>
        </React.Fragment>
    )
};
export default Third;