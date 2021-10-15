import React,{ useContext } from "react";
import { globalContext } from "../context/context";

function Login(){
    const {setUserName,setProfile} = useContext(globalContext);
    return(
        <React.Fragment>
            <fieldset>
                <legend>Login</legend>
                <input type="text" onChange={(event)=>{setUserName(event.target.value)}}></input>
                <br></br>
                <button onClick={()=>{setProfile(true)}}>Login</button>
            </fieldset>
        </React.Fragment>
    )
}
export default Login;
