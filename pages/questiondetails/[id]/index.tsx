import * as React from 'react'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { RequestApiQuestion ,RequestApiQuestionDELETE } from '../../../actions/index'
import { useDispatch } from "react-redux";
import classes from '../styles.scss'

const QuestionDetails : React.FC = () =>{
    const dispatch = useDispatch();
    const router = useRouter()
    const _id = Number(router.query.id);

    const questionData = useSelector((state:any) => state.questions);

    useEffect(() => {
        dispatch(RequestApiQuestion())
    }, [dispatch])

    return (
        <div className={classes.quiz_wapper}>
            {
                questionData && questionData?.map((item:any,index:number)=>{
                    if(item.id === _id)
                        return (
                            <div className={classes.form_answers} key={index}>
                                <div >
                                    <p className={classes.quiz_name}>{index + 1} . {item.question}</p>
                                </div>
                                <div className={classes.category_name}>
                                    <p>Category : {item.category}</p>
                                </div>
                                <div className={classes.quiz_answers}>
                                    {
                                        item.answers.map((itemAns,idx:number)=>{
                                            return (
                                                <div key={idx} className={classes.wapper__answers}>
                                                    <div className={classes.radio}>
                                                        <span className={!itemAns.isCorrect ? classes.circle : classes.circle+" "+classes.radioActive}></span>
                                                    </div>
                                                    <p>Answers: {itemAns.content}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <button onClick={()=> dispatch(RequestApiQuestionDELETE(item.id))} className={`btn btn-success m-3`}>Delete</button>
                                <button onClick={()=> router.push(`/questiondetails/edit/${item.id}`)} className="btn btn-warning">Edit</button>
                            </div>
                        )
                })
            }
        </div>
    )
}


export default QuestionDetails