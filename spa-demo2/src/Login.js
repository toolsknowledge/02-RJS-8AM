import React, { useState } from "react";
import Home from "./Home";

function Login(props){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const login = ()=>{
        if(email === "hr@ashokit.in" && password === "ashokit"){
            props.history.push("/home/Hello_1/Hello_2?param1=Hello_3");
        }else{
            alert("Login Fail");
        }
    };


    return(
        <React.Fragment>
            <fieldset>
                <legend>Login Form</legend>
                <label>Email</label>
                <input type="email"
                       name="email"
                       placeholder="Enter Email"
                       onChange={(event)=>setEmail(event.target.value)}></input>

                <br></br><br></br>
                <label>Password</label>
                <input type="password"
                        name="password"
                        placeholder="enter password"
                        onChange={(event)=>setPassword(event.target.value)}></input>

                <br></br><br></br>
                <button onClick={login}>Login</button>
            </fieldset>
        </React.Fragment>
    )




}
export default Login;

