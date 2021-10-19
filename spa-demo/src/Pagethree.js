import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Childthree from "./Childthree";
function Pagethree(){
    return(
        <React.Fragment>
            <Router>
                <h1 style={{color:"blue"}}>Page Three !!!</h1>
                <NavLink to="/child_three" 
                         activeStyle={{color:"red"}}
                         exact={true}
                         strict>Child_Three</NavLink>
                <br></br><br></br>
                <Route path="/child_three" component={Childthree} exact={true} strict></Route>
            </Router>
        </React.Fragment>
    )
}
export default Pagethree;