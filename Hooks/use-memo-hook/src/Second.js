import React from "react";

export default React.memo((props)=>{
    console.log("Hello");
    return(
        <React.Fragment>
            <h5>{props.key1}</h5>
        </React.Fragment>
    )
})
