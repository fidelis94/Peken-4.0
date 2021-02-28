import * as ACTION_TYPE from './ActionType';




export const counter_add =()=>{
    return(dispatch)=>{
        dispatch({
            type :ACTION_TYPE.COUNTER_PLUS
        })
    }
}

export const counter_minus = ()=>{
    return(dispatch)=>{
        type: ACTION_TYPE.COUNTER_MINUS
    }
}

export const add_list =(payload)=>{
    console.log('ADD_LIST')
    return(dispatch)=>{
        type:ACTION_TYPE.ADD_LIST,
        payload
    }
}