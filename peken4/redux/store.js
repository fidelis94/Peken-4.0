import {createStore} from 'redux';

const initialstate ={
    data : "halo"
}

const reducer =(state=initialstate,action)=>{
    if( action.type == "UBAHNAMA"){
         return {
             ...state,
             data : action.payload
         }
    }
    return state
}

export const store = createStore(reducer)