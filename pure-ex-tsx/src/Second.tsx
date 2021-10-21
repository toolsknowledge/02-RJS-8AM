import React,{ Component, PureComponent } from "react";

interface IState{}

interface IProps{
    key1:number;
}

class Second extends PureComponent<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

    render(){
        console.log("unnecessarly rendering");
        return(
            <React.Fragment>
                <h1>Num. {this.props.key1}</h1>
            </React.Fragment>
        )
    }
};

export default Second;