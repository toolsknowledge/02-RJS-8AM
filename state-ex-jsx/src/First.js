import React,{ Component } from "react";
class First extends Component{
    constructor(){
        super();
        this.state = {
            products:[
                {"p_id":1,"p_name":"p_one","p_cost":100},
                {"p_id":2,"p_name":"p_two","p_cost":200},
                {"p_id":3,"p_name":"p_three","p_cost":300},
                {"p_id":4,"p_name":"p_four","p_cost":400},
                {"p_id":5,"p_name":"p_five","p_cost":500}
            ],
            obj : {sub_one:"ReactJS",sub_two:"NodeJS",sub_three:"MongoDB"},
            arr : ["ReactJS","NodeJS","MongoDB","VueJS","Angular13"],
            boolData : true,
            numData : 100,
            strData : "ReactJS"
        };
    };

    render(){
        return(
            <React.Fragment>
                <table border="1"
                       cellPadding="10px"
                       cellSpacing="10px">
                    <tr>
                        <th>P_ID</th>
                        <th>P_NAME</th>
                        <th>P_COST</th>
                    </tr>
                    {this.state.products.map((element,index)=>(
                        <tr key={index}>
                            <td>{element.p_id}</td>
                            <td>{element.p_name}</td>
                            <td>{element.p_cost}</td>
                        </tr>
                    ))}
                    
                </table>


                <h1>{JSON.stringify(this.state.obj)}</h1>
                {
                    this.state.arr.map((element,index)=>(
                        <h1 key={index}>{element}</h1>
                    ))
                }
                <h1>{JSON.stringify(this.state.boolData)}</h1>
                <h1>{this.state.numData}</h1>
                <h1>{this.state.strData}</h1>
            </React.Fragment>
        )
    }
};
export default First;