import * as Types from "../constants/ActionTypes";
import callApi from "../util/index";

//------------------QUESTIONS-----------------------//

export const GetDataRequestApiQuestion = (data)=> {
    return {
        type: Types.REQUEST_API_QUESTIONS,
        payload:{
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