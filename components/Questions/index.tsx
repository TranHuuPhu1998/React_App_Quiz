import * as React from 'react'

import { useState ,useEffect } from 'react'
import callAPI from '../../util'
import './question.scss'

let render = false

export const Question : React.FC = ()=>{
    const [isCheckAnswers , setIsCheckAnswers] = useState(Number)
    const [isClickAnswers , setIsClickAnswers] = useState(Number)
    const [isSubmit , setIsSubmit] = useState(Object)
    const [lengthQuestion, setLengthQuestion] = useState(0)
    const [totalCorrect , setTotalCorrect] = useState(0)
    const [questions ,setQuestions] = useState(Array)

    // const questions = useSelector((state:any) => state.question.questions)

    const checkAnswers = (value : any ,id:number ) =>{
        setIsClickAnswers(id)
        setIsCheckAnswers(value.id)
        setIsSubmit(value)
    }

    useEffect(()=> {
        callAPI('apiquestions','GET',null).then((res:any) => {
          setQuestions(res.data)
          render = true
        }).catch(e=>{
            console.log(e);
        })
    },[])

    const onResultAnswers = (id: number) => {
        questions.forEach((element:any) => {
            if(element.id === id){
                if(isSubmit.isCorrect === true){
                    alert("correct")
                    setTotalCorrect(totalCorrect+1)
                }else{
                    alert("wrong")
                }
            }
        });
        setLengthQuestion(lengthQuestion+1)
    }


    return (
        <div className="quiz-wapper">
            <div className="absolute-bg"> 
             
            {
                questions?.map((item : any,index :number)=>{
                    if(lengthQuestion === index)
                    {
                        return (
                            <div key={index} 
                                className="absolute-bg wapper">
                                <h1 className="quiz-index">Question {index + 1} or {questions.length}</h1>
                                <pre className="quiz-itemquestion">
                                    <span>{item.question}</span>
                                </pre>
    
                                <div className="list_answers">
                                {
                                    item.answers.map((value :any, idex :number) => {
                                        return (
                                        <div
                                            key={idex}
                                            onClick={()=>checkAnswers(value ,item.id)} 
                                            className={isCheckAnswers === value.id && isClickAnswers === item.id ? "answers acvive" : "answers"}
                                        >   
                                        {value.content}</div>)
                                    })
                                }
                                </div>
                                <div className="submit" onClick={()=>onResultAnswers(item.id)}>Submit</div>
                            </div>
                        )
                    }
                    return <div style={{display:"none"}} key={index}></div>
                })
            }
            { 
              render && questions && lengthQuestion === questions.length ? <div className="res">Chúc mừng bạn đả hoàn thành {totalCorrect} câu hỏi đúng.</div>:<div></div>
            }
            </div>
        </div>
    )
}