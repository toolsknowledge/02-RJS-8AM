import React,{ Component } from "react";
import Second from "./Second";
class First extends Component{
    constructor(props){
        super(props);
        this.state = {
            num : 1
        }
    }

    componentDidMount(){
       setInterval(()=>{
           this.setState({
               num:this.state.num+1
           })
       },1000);
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

