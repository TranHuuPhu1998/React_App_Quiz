import React from 'react'
import {useState,useEffect} from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import classes from  '../../styles.scss'

import { RequestApiQuestionPUT , RequestApiListLesson } from '../../../../../actions/index'
import EditQuestionItem from './ItemEdit'

let rs:any[] = []
const EditQuestion : React.FC = () => {

    const router = useRouter()
    const _id = Number(router.query.id);
    const dispatch = useDispatch()
    const [quizName, setQuizName ] = useState(String)
    const [answers, setAnswers ] = useState(String)
    const [category, setCategory ] = useState(String)

  
    const questionData = useSelector((state:any) => state.questions)
    const listLesson = useSelector((state: any) => state.listlesson)

    useEffect(() => {
        dispatch(RequestApiListLesson())
    }, [])

    const onEditQuestion = (e: React.FormEvent, quizdata:any , quizName ,category,answersProps,icorrect) =>{
       
        e.preventDefault();
        
        let arrTemp1:any = [];
        let arrTemp2:any = [];

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
        
        answersProps.forEach((element:any,index:number) => {
            arrTemp2.forEach((element2:any,index2:number) => {
                if((index === index2 ) && (element.content !== element2.content)){
                    element.content = element2.content
                }
            })
        });


        var data = {
            "question" : quizName,
            "answers" : answersProps,
            "id" : quizdata.id,
            "category" : category
        }   
        
        dispatch(RequestApiQuestionPUT(data))
    }

    const handleChangeAnswers = (e : any) => {
        var obj = {
                content : e.currentTarget.value,
                data_id : e.currentTarget.id,
        }
        rs.push(obj)
    }
    
    const onHandleChangeIsCorrect = (quizdata ,quizName,category, answersProps , icorrect) => {

        answersProps.forEach((element:any,index:number) => {
            element.isCorrect = false
            if(element.content === icorrect.content){
                element.isCorrect = true
            }
        });

        var data = {
            "question" : quizName,
            "answers" : answersProps,
            "id" : quizdata.id,
            "category" : category
        }   
        
        dispatch(RequestApiQuestionPUT(data))
    }

    return (
        <div className={classes.wapper_edit}>
            <p className={classes.edit_question}>EDIT QUESTIONS</p>
            {
                questionData && questionData?.map((item:any , index:number) =>{
                    if(item.id === _id){
                        return (
                            <EditQuestionItem
                                key={index}
                                item = {item}
                                question={item.question}
                                categoryProps = {item.category} 
                                listLesson = {listLesson}
                                answersProps = {item.answers}
                                onEditQuestion = {onEditQuestion}
                                handleChangeAnswers = {handleChangeAnswers}
                                onHandleChangeIsCorrect = {onHandleChangeIsCorrect}
                            
                            />
                        )
                    }
                })
            }
        </div>
    )
}

export default EditQuestion;
