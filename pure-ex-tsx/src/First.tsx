import React,{ Component } from "react";
import Second from "./Second";

interface IState{
    num:number;
}

interface IProps{}

class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            num : 1
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                num : 1
            })
        },1000);
    };

    shouldComponentUpdate(){
        return false;
    }


    render(){
        console.log("Hello");
        return(
            <React.Fragment>
                <Second key1={this.state.num}></Second>
            </React.Fragment>
        )
    }



};

export default First;

