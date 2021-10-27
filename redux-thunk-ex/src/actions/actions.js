import axios from "axios";
import { HIT_SERVER, NEGATIVE_RESPONSE, POSITIVE_RESPONSE } from "../constants/products";

export const ProductActions = ()=>{
    return async (dispatch)=>{
        dispatch({
            type:HIT_SERVER,
            loading:false,
            products:[],
            error:""
        });
        try{
            const {data} = await axios.get("http://localhost:8080/api/products");
            dispatch({
                type:POSITIVE_RESPONSE,
                loading:true,
                products:data,
                error:""
            })
        }catch(err){
            dispatch({
                type:NEGATIVE_RESPONSE,
                loading:true,
                products:[],
                error:err.message
            })
        }
    };
};