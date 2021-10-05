import React,{ Component } from "react";
class Second extends Component{
    constructor(){
        super();
        this.state = {
            num : 0
        }
    }

    increment = ()=>{
        if(this.state.num !=10){
            this.setState({
                num : ++this.state.num
            })
        }
    };

    decrement = ()=>{
        if(this.state.num != 0){
            this.setState({
                num : --this.state.num
            })
        }
    
    };
   

    render(){
        return(
            <React.Fragment>
                 <div className="btn btn-group">
                    <button className="btn btn-danger"
                            onClick={this.increment}>+</button>
                    <button className="btn btn-success">{this.state.num}</button>
                    <button className="btn btn-danger"
                            onClick={this.decrement}>-</button>
                 </div>
            </React.Fragment>
        )
    }
}
export default Second;