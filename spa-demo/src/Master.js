import React from "react";
import Pagethree from "./Pagethree";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import {BrowserRouter as Router, NavLink,Route}  from "react-router-dom";

function Master(){
    return(
        <React.Fragment>
            <Router>
                <NavLink to="/page_one/hello_1" 
                         activeStyle={{color:"red"}}
                         exact={true} strict
                         style={{marginRight:100}}>PAGE_ONE</NavLink>
                <NavLink to="/page_two/hello_1/hello_2/hello_3" 
                         activeStyle={{color:"red"}}
                         exact={true} strict
                         style={{marginRight:100}}>PAGE_TWO</NavLink>
                <NavLink to="/page_three" 
                         activeStyle={{color:"red"}}
                         exact={true} strict
                         style={{marginRight:100}}>PAGE_THREE</NavLink>

                <br></br>
                <Route path="/page_one/:msg" component={Pageone} exact={true} strict></Route>
                <Route path="/page_two/:msg1/:msg2/:msg3" component={Pagetwo} exact={true} strict></Route>
                <Route path="/page_three" component={Pagethree} exact={true} strict></Route>
            </Router>
        </React.Fragment>
    )
}
export default Master;