import * as Types from "../constants/ActionTypes"

const initialState = []

let findindex = (_id , data) =>{
    var result = -1;
    data.forEach((element:any,index:number) => {
        if(element.id === _id){
            result = index;
        }
    });
    return result;
}

const myReducer = (state = initialState, action:any) =>{
    switch(action.type) {
        case Types.REQUEST_API_QUESTIONS:
            state = action.payload.data
            return [
                ...state
            ]
        case Types.ACTION_ADD_QUESTION:
            state.push(action.payload.data)
            return [
                ...state,
            ]
        case Types.ACTION_DELETE_QUESTION:
            const _index = findindex(action.payload.id , state)
            state.splice(_index,1)
            return [
                ...state
            ]
        case Types.ACTION_EDIT_QUESTION:
            const idx = findindex(action.payload.data.id , state)
            state[idx] = action.payload.data
            return [
                ...state
            ]
        default:
            return [
                ...state
            ]
    }
}

export default myReducer