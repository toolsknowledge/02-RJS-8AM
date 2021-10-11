import React, { useEffect, useState } from "react";

function Customers(){
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://www.w3schools.com/angular/customers.php").then((res)=>res.json()).then((posRes)=>{
            const {records} = posRes;
            setData(records);
        },(errRes)=>{
            console.log(errRes);
        });
    },[]);


    return(
        <React.Fragment>
            <h1>{JSON.stringify(data)}</h1>
        </React.Fragment>
    )
}

export default Customers;