import React,{ Component } from "react";
import Child from "./Child";

class App extends Component{
    state = {
      name : "Ashok" 
    }
  constructor(){
      //constructor will execute at booting time
      //constructor will execute only once
      //we can set the state here
      super();
      console.log("parent constructor");
      this.state = {
         name : "AshokIT"
      }
    }


    //after constructor, componentWillMount hook will execute
    //change the state, before rendering
    //set the global parameters like width, height,......
    componentWillMount(){
        console.log("Parent componentWillMount");
        if(window.innerWidth<500){
          this.setState({
            innerWith : window.innerWidth
          })
        }
    }

    handleChange=()=>{
      this.setState({
        name : "AshokIT ReactJS"
      })
    }


    //render will execute after componentWillMount
    //keep the presentation logic
    //if change detected in state or props, it will re render once again
    //mandatory hook
    //never set the state here (leads to infinite loop)
    render(){
      console.log("Parent render");
      return(
        <React.Fragment>
            <h1>{this.state.name}</h1>
            <h1>{this.state.innerWith}</h1>
            <Child name={this.state.name}></Child>
            <button onClick={this.handleChange}>Change</button>
        </React.Fragment>
      )
    }

    //if component successfully rendered, then only this hook will execute
    //used to handke the side effects(Rest API Calls)
    //set the state based on side effect
    componentDidMount(){
        console.log("parent componentDidMount");
    }

    componentWillReceiveProps(){
      console.log("Parent componentWillReceiveProps");
    }

    shouldComponentUpdate(){
      return true;
    }

    componentDidUpdate(){}

    componentWillUpdate(){}

    componentWillUnmount(){}


};

export default App;
