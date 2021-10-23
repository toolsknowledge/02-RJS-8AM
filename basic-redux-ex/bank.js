const { createStore } = require("redux");

const initialState = {
    bal : 10000
};

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "WITHDRAW":
            return{
               ...state,
               bal : state.bal-action.value  
            }
        case "DEPOSIT":
            return{
                ...state,
                bal : state.bal+action.value
            }
        default:
            return state;
    }
};

const store = createStore(reducer);

store.subscribe(()=>{
    console.log( store.getState() );
})

store.dispatch({type:"WITHDRAW",value:1000});
store.dispatch({type:"DEPOSIT",value:5000});