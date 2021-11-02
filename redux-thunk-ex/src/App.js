import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ProductsActions} from "./actions/actions";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import Products from "./components/Products";
function App(){
    const result = useSelector(state=>state);
    const {loading,products,error} = result;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(ProductsActions());
    },[]);
    return(
        <React.Fragment>
           <div className="grid-container">
               <header className="row">
                   <div>
                       <a href="#" className="brand">AshokIT</a>
                   </div>
                   <div>
                       <a href="#">cart</a>
                       <a href="#">signin</a>
                   </div>
               </header>
               <main>
                     {loading?(<LoadingBox></LoadingBox>):(error === "Network Error"?(<MessageBox variant="danger">{error}</MessageBox>):(<Products products={products}></Products>))}
               </main>
               <footer className="row center">
                   copyright@ashokit.in
               </footer>
           </div>
        </React.Fragment>
    )
}
export default App;