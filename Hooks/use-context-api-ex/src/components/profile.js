import React,{useContext} from "react";
import { globalContext } from "../context/context";
function Profile(){
    const { username } = useContext(globalContext);
    return(
        <React.Fragment>
            <h1>{username}</h1>
        </React.Fragment>
    )
}
export default Profile;