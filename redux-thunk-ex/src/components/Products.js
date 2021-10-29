import React from "react";

function Products(props){
    return(
        <React.Fragment>
            {JSON.stringify(props.products)}
        </React.Fragment>
    )
}
export default Products;