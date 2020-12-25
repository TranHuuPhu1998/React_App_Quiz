import * as Types from "../constants/ActionTypes"

const initialState = []

const myReducer = (state = initialState, action:any) =>{
    switch(action.type) {
        case Types.REQUEST_API_LISTLESSON:
            state = action.payload.data
            return [...state]; 
        default:
            return [
                ...state
            ]
    }
}

export default myReducer