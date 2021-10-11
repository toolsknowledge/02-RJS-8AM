import React,{ Component } from "react";
import Second from "./Second";
class First extends Component{
    constructor(){
        super();
        this.state = {
            num : 0
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                num:0
            })
        },1000);
    }
    render(){
        return(
            <React.Fragment>
                <Second key1={this.state.num}></Second>
            </React.Fragment>
        )
    }
};
export default First;