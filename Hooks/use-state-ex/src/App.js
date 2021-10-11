import React, { useState } from "react";

function App(){
  const arr = useState("ReactJS"); 
  return(
      <React.Fragment>
          {JSON.stringify(arr)}
      </React.Fragment>
    )
};

export default App;




// import React, { useState } from "react";
// function App(){
//     const [products,setProducts] = useState([
//         {"p_id":111,"p_name":"p_one","p_cost":10000},
//         {"p_id":222,"p_name":"p_two","p_cost":20000},
//         {"p_id":333,"p_name":"p_three","p_cost":30000},
//         {"p_id":444,"p_name":"p_four","p_cost":40000},
//         {"p_id":555,"p_name":"p_five","p_cost":50000}
//     ]);

//     const add_product = ()=>{
//         setProducts(
//             [...products,{"p_id":666,"p_name":"p_six","p_cost":60000}]
//         )  
//     };


//     return(
//       <React.Fragment>
//            <table border="1"
//                   align="center"
//                   cellPadding="10"
//                   cellSpacing="10">
//                 <thead>
//                   <tr>
//                     <th>P_ID</th>
//                     <th>P_NAME</th>
//                     <th>P_COST</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                 {products.map((element,index)=>(
//                     <tr key={index}>
//                         <td>{element.p_id}</td>
//                         <td>{element.p_name}</td>
//                         <td>{element.p_cost}</td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>

//             <button style={{marginLeft:600,marginTop:50}} onClick={add_product}>Add Record</button>
//       </React.Fragment>
//     )
// };

// export default App;
























// import React, { useState } from "react";

// function App(){
//   const [num,setNum] = useState(0);

//   const fun_one = (data)=>{
//       setNum( num+data );
//   };

//   return(
//     <React.Fragment>
//         <h1>Num : {num}</h1>
//         <button onClick={()=>fun_one(2)}>ClickMe</button>
//     </React.Fragment>
//   )
// }

// export default App;






















// import React, { useState } from "react";
// function App(){
//     const [sub,setSub] = useState("ReactJS");

//     const fun_one = ()=>{
//       setSub("ReactJS With JSX");
//     }


//     return(
//       <React.Fragment>
//           <h1>{sub}</h1>
//           <button onClick={fun_one}>Change</button>
//       </React.Fragment>
//     )
// };

// export default App;