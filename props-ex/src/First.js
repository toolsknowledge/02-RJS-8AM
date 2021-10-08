import React, { useState } from "react";
import Second from "./Second";
function First(){
    const [sub,setSub] = useState("ReactJS");
    const [num,setNum] = useState(100);
    const [flag,setFlag] = useState(true);
    const [obj,setObj] = useState({"sub_one":"ReactJS",
             "sub_two":"NodeJS",
             "sub_three":"MongoDB"});
    const [products,setproducts] = useState([{"p_id":111,"p_name":"p_one","p_cost":10000},
              {"p_id":222,"p_name":"p_two","p_cost":20000},
              {"p_id":333,"p_name":"p_three","p_cost":30000},
              {"p_id":444,"p_name":"p_four","p_cost":40000},
              {"p_id":555,"p_name":"p_five","p_cost":50000}]);
    return(
        <React.Fragment>
            <Second sub={sub}
                    num={num}
                    flag={flag}
                    obj={obj}
                    products={products}>Hello</Second>
            
        </React.Fragment>
    )



};
export default First;