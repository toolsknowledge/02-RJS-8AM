import React from "react";

function Rating(props){
    console.log(props);
    return(
        <React.Fragment>
             <div className="rating">
                 <span className={props.rating>=1?'fa fa-star':
                                  props.rating>=0.5?'fa fa-star-half-o':
                                  'fa fa-star-o'}></span>
                 <span className={props.rating>=2?'fa fa-star':
                                  props.rating>=1.5?'fa fa-star-half-o':
                                  'fa fa-star-o'}></span>
                <span className={props.rating>=3?'fa fa-star':
                                  props.rating>=2.5?'fa fa-star-half-o':
                                  'fa fa-star-o'}></span>
                <span className={props.rating>=4?'fa fa-star':
                                  props.rating>=3.5?'fa fa-star-half-o':
                                  'fa fa-star-o'}></span>
                <span className={props.rating>=5?'fa fa-star':
                                  props.rating>=4.5?'fa fa-star-half-o':
                                  'fa fa-star-o'}></span>
                <span>Num Reviews : {props.numReviews}</span>
             </div>
        </React.Fragment>
    )
}

export default Rating;