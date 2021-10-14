import React, { useContext } from "react";
import { myContext } from "../context/myContext";
function Profile(){

    const { username } = useContext(myContext);

    return(
        <React.Fragment>
            <h1>{username}</h1>
        </React.Fragment>
    )
}

export default Profile;