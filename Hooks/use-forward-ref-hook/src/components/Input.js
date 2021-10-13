import React from "react";
function Input({type,placeholder,onKeyDown},ref){
    return(
        <React.Fragment>
            <input type={type}
                    placeholder={placeholder}
                    onKeyDown={onKeyDown}
                    ref={ref}></input>
        </React.Fragment>
    )
};
const demoComponent = React.forwardRef(Input);
export default demoComponent;