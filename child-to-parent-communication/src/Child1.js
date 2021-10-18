import React from "react";

function Child1(props){
    return(
        <React.Fragment>
            <button 
            onClick={()=> props.fun_one({"key1":"Hello_1"})}>
                Single Click
            </button>

            <button onDoubleClick={()=> props.fun_two({"key1":"Hello_2"})}>
                Double Click
            </button>
        </React.Fragment>
    )
}

export default Child1;