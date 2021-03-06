import axios from "axios";
import { PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../constants/products";

export const ProductsActions = ()=>{
    return async (dispatch)=>{
        dispatch({
            type:PRODUCTS_LOADING,
            loading:true,
            products:[],
            error:""
        });
        try{
            const {data} = await axios.get(`http://rjs8am-env.eba-pksbewfd.us-east-2.elasticbeanstalk.com/api/products`);
            dispatch({
                type:PRODUCTS_LOADING_SUCCESS,
                loading:false,
                products:data,
                error:""
            });
        }catch(err){
            dispatch({
                type:PRODUCTS_LOADING_FAIL,
                loading:false,
                error:err.message,
                products:[]
            });
        }
    }
};