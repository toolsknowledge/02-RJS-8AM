
/*
    import React,{ Component } from "react";
    import axios from "axios";

    class GetEx extends Component{
        constructor(){
            super();
            this.state = {
                records : []
            }
        }

        componentDidMount(){
            // axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{
            //     const { data } = posRes;
            //     const { records } = data;
            //     this.setState({
            //         records : records
            //     })
            // },(errRes)=>{
            //     console.log(errRes);
            // })

            fetch("https://www.w3schools.com/angular/customers.php").then(res=>res.json()).then((posRes)=>{
                const { records }  = posRes;
                this.setState({
                    records : records
                })
            },(errRes)=>{
                console.log(errRes);
            })




        }

        render(){
            return(
            <React.Fragment>
                <table border="1"
                        cellPadding="10"
                        cellSpacing="10">
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Country</th>
                        </tr>
                        {this.state.records.map((element,index)=>(
                            <tr key={index}>
                                <td>{element.Name}</td>
                                <td>{element.City}</td>
                                <td>{element.Country}</td>
                            </tr>
                        ))}
                </table>
            </React.Fragment> 
            )
        }


    }

    export default GetEx;
*/


import React, { useEffect, useState } from "react";
import axios from "axios";

function GetEx(){
    const [records,setRecords] = useState([]);
    useEffect(()=>{
        
        fetch("https://www.w3schools.com/angular/customers.php").then((res)=>{
            return res.json()
        }).then((posRes)=>{
            const { records } = posRes;
            setRecords(records);
        },(errRes)=>{
            console.log(errRes);
        })

        
        // axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{
        //     const { data } = posRes;
        //     const { records } = data;
        //     setRecords(records)
        // },(errRes)=>{
        //     console.log(errRes);
        // })
    })
    return(
        <React.Fragment>
            <h1>{JSON.stringify(records)}</h1>
        </React.Fragment>
    )
}
export default GetEx;



















