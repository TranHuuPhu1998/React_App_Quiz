import * as React from 'react'
import { useState ,useEffect , useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";

import NotificationSystem from 'react-notification-system';
import { useRouter } from 'next/router'
import CallApi from '../../../util/index'

import classes from './styles.scss' 

const Questions : React.FC = ()=>{
    const [isCheckAnswers , setIsCheckAnswers] = useState(Number)
    const [isClickAnswers , setIsClickAnswers] = useState(Number)
    const [isSubmit , setIsSubmit] = useState(Object)
    const [lengthQuestion, setLengthQuestion] = useState(0)
    const [totalCorrect , setTotalCorrect] = useState(0)
    const [questions ,setQuestions] = useState(Array)
    const [listlesson, setListlesson] = useState(Array)
    const [questionsAll, setQuestionsAll] = useState(Array)
    const [isClick , setIsCLick] = useState(false)
    
    const router = useRouter()
    const dispatch = useDispatch()
    const notificationSystem:any = React.createRef();
    
    const checkAnswers = (value : any ,id:number ) =>{
        setIsClickAnswers(id)
        setIsCheckAnswers(value.id)
        setIsSubmit(value)
    }

    useEffect(() =>{
        let result = [];
        CallApi('questions','GET',null).then((res:any)=>{
            res.data.map((item:any,index:number)=>{
                if(item.category === router.query.id){
                    result.push(item)
                }
            })
            setQuestionsAll(result)
        })
    },[router.query.id])

    
    const onResultAnswers = (id: number) => {
        const notification = notificationSystem.current;
        setIsCLick(true)
        questionsAll.forEach((element:any) => {
            if(element.id === id){
                if(isSubmit.isCorrect === true){
                    notification.addNotification({
                        message: 'Chúc mừng bạn có 1 câu trả lời đúng',
                        level: 'info',
                        autoDismiss: 4
                    });
                    setTotalCorrect(totalCorrect+1)
                }else{
                    notification.addNotification({
                        message: 'Thật buồn bạn trả lời sai rồi',
                        level: 'warning',
                        autoDismiss: 4
                    });
                }
            }
        });
        
    }
    const onNextAnswers = (id:number) =>{
        setLengthQuestion(lengthQuestion+1)
        setIsCLick(false)
    }

    let widht_css = (lengthQuestion / questionsAll.length) * 100;

    return (
        <div className={classes.quiz_wapper}>
            <NotificationSystem ref={notificationSystem} />
            <p className={classes.quiz__category}>Leaning {router.query.id}</p>
            <div className={classes.absolute_bg}> 
            <div className={classes.bg_info+" "+classes.total__wapper}>
                <div className={classes.total__answers} style={{width:`${widht_css}%`}}></div>
            </div>
            {
                questionsAll?.map((item : any,index :number)=>{
                    if(lengthQuestion === index)
                    {
                        return (
                            <div key={index} 
                                className={classes.absolute_bg+" "+classes.wapper}>
                                <h1 className={classes.quiz_index+" "+"mt-3 mb-3"}>Question {index + 1} of {questionsAll.length}</h1>
                                <pre className={classes.quiz_itemquestion+" "+"border border-primary"}>
                                    <p>{index + 1} . {item.question}</p>
                                </pre>
                                <p className="text-center text-success mt-4 mb-4">Choose The Coorect Answers</p>
                                <div className={classes.list_answers}>
                                {
                                    item.answers.map((value :any, idex :number) => {
                                        return (
                                        <div
                                            key={idex}
                                            onClick={()=>checkAnswers(value ,item.id)} 
                                            className={ isCheckAnswers === value.id && 
                                                        isClickAnswers === item.id
                                                            ? classes.answers+" "+classes.acvive : classes.answers}
                                        >   
                                            <p className="d-flex justify-content-start align-items-center">
                                                <span className={classes.answers__icon}>{String.fromCharCode(65 + idex)}</span>
                                                <span className="d-block">{value.content}</span>
                                            </p>
                                        </div>
                                        )
                                    })
                                }
                                </div>
                                <div className={classes.quiz__btn}>
                                    <button className={classes.submit} onClick={()=>onResultAnswers(item.id)}>Submit</button>
                                    <button className={isClick === true ? classes.submit : classes.submit+" "+classes.js_pointer_events} onClick={()=>onNextAnswers(item.id)}>Next</button>
                                </div>
                            </div>
                        )
                    }
                    return <div style={{display:"none"}} key={index}></div>
                })
            }
            { 
              questionsAll && lengthQuestion === questionsAll.length ? <div className={classes.res}>Chúc mừng bạn đả hoàn thành {totalCorrect} câu hỏi đúng.</div>:<div></div>
            }
            </div>
        </div>
    )
}
export default Questions;