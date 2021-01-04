import * as Types from "../constants/ActionTypes";
import callApi from "../util/index";

//------------------QUESTIONS-----------------------//

export const GetDataRequestApiQuestion = (data)=> {
    return {
        type: Types.REQUEST_API_QUESTIONS,
        payload: {
            data
        }
    };
}

export const RequestApiQuestion = () =>{
    return dispatch => {
        return callApi('questions' , 'GET' , null).then((res:any)=>{
            if(res.data){
                dispatch(GetDataRequestApiQuestion(res.data));
            }
        })
        
    }
}

//--------POST--------//

export const GetDataRequestApiQuestionPOST = (data) =>{
    return {
        type: Types.ACTION_ADD_QUESTION,
        payload: {
            data
        }
    };
}

export const RequestApiQuestionPOST = (data) =>{
    return dispatch => {
        return callApi('questions' , 'POST' , data).then((res:any)=>{
            if(res.data){
                dispatch(GetDataRequestApiQuestionPOST(res.data))
            }
        })
    }
}

//--------PATCH-----------//

export const GetDataRequestApiQuestionPUT = (data) =>{
    return {
        type: Types.ACTION_ADD_QUESTION,
        payload: {
            data
        }
    };
}

export const RequestApiQuestionPUT = (data) =>{
    return dispatch => {
        return callApi(`questions/${data.id}` , 'PUT',data).then((res:any) =>{
            if(res.state === 200){
                dispatch(GetDataRequestApiQuestionPUT(data))
            }
        })
    }
}

//--------DELETE----------//

export const GetDataRequestApiQuestionDELETE = (id) =>{
    return {
        type : Types.ACTION_DELETE_QUESTION,
        payload :{
            id
        }
    }
}

export const RequestApiQuestionDELETE = (id) =>{
    return dispatch =>{
        
        return callApi(`questions/${id}` , 'DELETE' , null).then((res:any) =>{
            if(res.status === 200) {
                dispatch(GetDataRequestApiQuestionDELETE(id))
            }
        })
    }
}

//------------------LISTLESSON-----------------------//

export const GetDataRequestApiListLesson = (data)=> {
    // console.log("GetDataRequestApiListLesson -> data", data)
    return {
        type: Types.REQUEST_API_LISTLESSON,
        payload:{
            data
        }
    };
}

export const RequestApiListLesson = () =>{
    return dispatch => {
     
        return callApi('listlesson' , 'GET' , null).then((res:any)=>{
            // console.log("RequestApiListLesson -> res", res)
            if(res.data){
                dispatch(GetDataRequestApiListLesson(res.data));
            }
        })
        
    }
}

//------------------CATEROGY-----------------------//

export const GetDataRequestApiCaterory = (data)=> {
    return {
        type: Types.REQUEST_API_CATEROGY,
        payload:{
            data
        }
    };
}

export const RequestApiCategory = () =>{
    return dispatch => {
        return callApi('category' , 'GET' , null).then((res:any)=>{
            if(res.data){
                dispatch(GetDataRequestApiCaterory(res.data));
            }
        })
        
    }
}