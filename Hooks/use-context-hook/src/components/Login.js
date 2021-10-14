import React, { useContext } from "react";
import { myContext } from "../context/myContext";

function Login(){

    const { setUserName,setShowProfile } = useContext(myContext);


    return(
        <React.Fragment>
             <fieldset>
                 <legend>Login</legend>
                 <input type="text"
                        placeholder="User Name"
                        onChange={(event)=> setUserName(event.target.value)}></input>
                 <br></br><br></br>
                 <input type="password"
                        placeholder="Enter Password"></input>
                 <br></br><br></br>
                 <button onClick={()=> setShowProfile(true)}>Login</button>
             </fieldset>
        </React.Fragment>
    )
}
export default Login;