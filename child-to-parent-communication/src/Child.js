import React, { Component } from "react";
class Child extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
               <button 
                    onClick={()=> this.props.key1({"sub_one":"ReactJS","sub_two":"NodeJS","sub_three":"MongoDB"})}>
                    Click Me
                </button> 
            </React.Fragment>
        )
    }
};
export default Child;