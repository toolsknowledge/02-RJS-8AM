import React from "react";
import Rating from "./Rating";

function Products(props){
    console.log(props.products);
    return(
        <React.Fragment>
            <div className="row center">
                {props.products.map((prod)=>(
                    <div className="card" key={prod._id}>
                        <img src={prod.image} alt={prod.name} className="medium"></img>
                        <div className="card-body">
                            <h2>{prod.name}</h2>
                            <Rating rating={prod.rating} numReviews={prod.numReviews}></Rating>
                            <div className="price">
                                Price :  {prod.price}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}
export default Products;