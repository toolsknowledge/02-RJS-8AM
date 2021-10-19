import React from "react";

function Childone(props){
    return(
        <React.Fragment>
            <h2 style={{color:"red"}}>{props.match.params.wish}</h2>
        </React.Fragment>
    )
}

export default Childone;