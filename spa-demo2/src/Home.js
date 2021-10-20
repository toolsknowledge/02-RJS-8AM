import React from "react";

function Home(props){
    return(
        <React.Fragment>
            <h1>{props.match.params.wish}.....
            {props.match.params.wish1}....
            {props.location.search.split("=")[1]}</h1>
        </React.Fragment>
    )
};

export default Home;