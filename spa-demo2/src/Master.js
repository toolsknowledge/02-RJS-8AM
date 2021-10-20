import React from "react";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
function Master(){
    return(
        <React.Fragment>
            <Router>
                <Route path="/" component={Login} exact={true} strict></Route>
                <Route path="/home/:wish/:wish1" component={Home} exact={true} strict></Route>
            </Router>
        </React.Fragment>
    )
}
export default Master;