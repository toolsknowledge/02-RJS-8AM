import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Childtwo from "./Childtwo";

function Pagetwo(props){
    return(
        <React.Fragment>
            <Router>
                <h1 style={{color:"green"}}>{props.match.params.msg1}.....{props.match.params.msg2}.....{props.match.params.msg3}</h1>
                <NavLink to="/child_two"
                         activeStyle={{color:"red"}}
                         exact={true} strict>
                    Child_Two
                </NavLink>
                <br></br><br></br>
                <Route path="/child_two" component={Childtwo} exact={true} strict></Route>
            </Router>
        </React.Fragment>
    )
}

export default Pagetwo;