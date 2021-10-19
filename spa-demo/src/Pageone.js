import React from "react";
import { BrowserRouter as Router, Route,NavLink } from "react-router-dom";
import Childone from "./Childone";

function Pageone(props){
    return(
        <React.Fragment>
            <Router>
                <h1 style={{color:"red"}}>{props.match.params.msg}</h1>
                <NavLink to="/child_one/welcome" activeStyle={{color:"red"}} exact={true} strict>Child_One</NavLink>
                <br></br><br></br>
                <Route path="/child_one/:wish" component={Childone} exact={true} strict></Route>
            </Router>
        </React.Fragment>
    )
}

export default Pageone;