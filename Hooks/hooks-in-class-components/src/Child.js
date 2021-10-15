import React,{ Component } from "react";

class Child extends Component{
    constructor(props){
        console.log("child constructor")
        super(props);
    }

    componentWillMount(){
        console.log("child componentWillMount");
    }

    render(){
        console.log("child render");
        return(
            <React.Fragment>
                <h1>{this.props.name}</h1>
            </React.Fragment>
        )
    };

    componentDidMount(){
        console.log("child componentDidMount");
    }

    componentWillReceiveProps(){
        console.log("Child componentWillReceiveProps");
      }

      shouldComponentUpdate(){
          return true;
      }


};

export default Child;