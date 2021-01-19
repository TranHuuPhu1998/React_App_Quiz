import * as Types from "../constants/ActionTypes"

const initialState = []

const findIndex = (id , state) =>{
    var _rsIndex = -1;
    state.forEach((element,index) => {
        if(element.id === id){
            _rsIndex = index
        }
    });
    return _rsIndex
}

const myReducer = (state = initialState, action:any) =>{
    switch(action.type) {
        case Types.REQUEST_API_LISTLESSON:
            state = action.payload.data
            return [...state]; 
        case Types.ACTION_DELETE_LESSON:
            const index = findIndex(action.payload.id , state);
            state.splice(index , 1)
            return [
                ...state
            ]
        case Types.ACTION_EIDT_LESSON:
            const index_2 = findIndex(action.payload.data.id , state);
            state[index_2] = action.payload.data
            return [
                ...state
            ]
        case Types.ACTION_ADD_LESSON:
            state.push(action.payload.data)
            return [...state]
        default:
            return [
                ...state
            ]
    }
}

export default myReducer