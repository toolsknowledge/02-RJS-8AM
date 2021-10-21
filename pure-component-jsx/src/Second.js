import React,{ Component, PureComponent } from "react";
class Second extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        console.log("Hello");
        return(
            <React.Fragment>
                <h1>Num. {this.props.key1}</h1>
            </React.Fragment>
        )
    }
};
export default Second;