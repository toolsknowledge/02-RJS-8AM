import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component{
    constructor(){
        super();
        this.state = {
            data : {}
        }
    }

    myFun = (arg1)=>{
        this.setState({
            data : arg1
        })
    };

    render(){
        return(
            <React.Fragment>
                <Child key1={this.myFun}></Child>
                <h1>{JSON.stringify(this.state.data)}</h1>
            </React.Fragment>
        )
    }
}

export default Parent;