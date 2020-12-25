import * as React from 'react'
import { useEffect , useState} from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'


import { RequestApiQuestion, RequestApiListLesson, RequestApiCategory } from '../../../actions/index'
import { useDispatch } from "react-redux";


const QuestionDetails : React.FC = () =>{

    const router = useRouter()
    const _id = Number(router.query.id);
    // const [questionData , setQuestionData] = useState(Array)
    
    const questionData = useSelector((state:any) => state.questions);
    console.log("reduxQuestionsAll", questionData)


    const dispatch = useDispatch();
    useEffect(() => {
        // You can await here
            dispatch(RequestApiQuestion())
    }, [dispatch])

    return (
        <div className="quiz-wapper">
            {
                questionData && questionData?.map((item:any,index:number)=>{
                    if(item.id === _id)
                        return (
                            <div key={index}>
                            <div >{index}:{item.question}</div>
                            <div>
                                <h2>Answers:{index} </h2>
                                {
                                    item.answers.map((itemAns,idx:number)=>{
                                        return (
                                            <div className="wapper__answers">
                                                <div className="radio">
                                                    <span className={!itemAns.isCorrect ? "circle" : "circle radioActive"}></span>
                                                </div>
                                                <p>ans:{itemAns.content}</p>
                                                <p>isCorrect:{`${itemAns.isCorrect}`}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        )
                })
            }
        </div>
    )
}


export default QuestionDetails