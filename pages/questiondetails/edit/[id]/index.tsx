import React from 'react'
import {useState} from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import './styles.scss'

import { GetDataRequestApiQuestionPUT } from '../../../../actions/index'

let rs:any[] = []
const EditQuestion : React.FC = () => {

    const router = useRouter()
    const _id = Number(router.query.id);
    const dispatch = useDispatch()
    const [quizName, setQuizName ] = useState(String)
    const [answers, setAnswers ] = useState(String)

    const questionData = useSelector((state:any) => state.questions)
    
    const onEditQuestion = (e:any) =>{
        e.preventdefault()
        return null;
    }

    const handleChangeAnswers = (e : any) => {
        let arrTemp1:any = [];
        let arrTemp2:any = [];

        const obj = {
            content : e.currentTarget.value,
            data_id : e.currentTarget.id
        }
        rs.push(obj)
        rs.map((el,index) => {
            arrTemp1.push(el.data_id)
            return 0;
        })
        arrTemp1 = Array.from(new Set(arrTemp1))

        arrTemp1.forEach((el2:any,idex:number) => { 
            rs.forEach((el,index)=>{
                if(el2 === el.data_id){
                    arrTemp2[idex] = {
                        id : idex,
                        content : el.content
                    }
                }
            });
        })

        console.log("handleChangeAnswers -> arrTemp2", arrTemp2)
        dispatch(GetDataRequestApiQuestionPUT(arrTemp2))
    }
    
    return (
        <div>
            <p className="edit-question">EDIT QUESTIONS</p>
            {
                questionData && questionData?.map((item:any , index:number) =>{
                    if(item.id === _id){
                        return (
                            <form className="form-addquestion" key={index}>
                                <label className="form-label gray" htmlFor="quizname">Nội dung câu hỏi:</label>
                                <input 
                                    type="text" 
                                    name="quizName" 
                                    className="form-control"
                                    id="quizname" 
                                    defaultValue={item.question || ""}                                
                                    onChange={(e)=>setQuizName(e.currentTarget.value)}
                                />
                                {
                                    item.answers.map((item2:any,index:any)=>{
                                        return (
                                           <div key={index}>
                                                <label htmlFor="">Đáp án {index + 1}</label>
                                                <input 
                                                    type="text"
                                                    name="answers"
                                                    id={`content${index}`}
                                                    className="form-control"
                                                    defaultValue={item2.content || ""}
                                                    onChange={handleChangeAnswers}
                                                />
                                                <label htmlFor="">{item2.isCorrect}</label>
                                           </div>
                                        )
                                    })
                                }
                                <button className="btn btn-success" onClick={()=>onEditQuestion(item.id)}>On Save</button>
                            </form>
                        )
                    }
                })
                
            }
        </div>
    )
}

export default EditQuestion;
