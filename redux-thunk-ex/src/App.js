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
            {loading?(<LoadingBox></LoadingBox>):(error === "Network Error"?(<MessageBox variant="danger">{error}</MessageBox>):(<Products products={products}></Products>))}
        </React.Fragment>
    )
}
export default App;