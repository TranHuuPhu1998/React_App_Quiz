import * as react from 'react'
import {useState,useEffect} from 'react'
import Link from 'next/link'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { RequestApiQuestion } from '../../actions/index'

import classes from './styles.scss'

const AllQuestion : React.FC = () =>{
    const dispatch = useDispatch()
    const questionsData = useSelector((state:any) => state.questions)
    const [SortName, setSortName] = useState(false)
    useEffect(()=>{
        dispatch(RequestApiQuestion())
    },[dispatch])

    const handleSortName = () =>{
        setSortName(!SortName)
    }

    if(SortName === true){
        questionsData.sort(function(a, b){
            if(a.question.toLowerCase().trim() < b.question.toLowerCase().trim()) { return -1; }
            if(a.question.toLowerCase() > b.question.toLowerCase().trim()) { return 1; }
            return 0;
        })
    }else{
        questionsData.sort(function(a, b){
            if(a.question.toLowerCase().trim() < b.question.toLowerCase().trim()) { return 1; }
            if(a.question.toLowerCase().trim() > b.question.toLowerCase().trim()) { return -1; }
            return 0;
        })
    }
    
    return (
        <div>
            <div className={classes.quiz_add}>
                <Link href="/admin/">Add Question</Link>
            </div>
            <div className={classes.quiz_allquestions}>
                <p>ALL QUESTIONS</p>
                <p className={classes.quiz_sort_name} onClick={handleSortName}>Sort Name {!SortName ? "Tang" : "Giam"}</p>
            </div>
            {
                questionsData && questionsData?.map((item:any,index:number)=>{
                   return (
                    <div key={index} >
                        <Link href={`/admin/questiondetails/${item.id}`}>
                            <a className={classes.quiz_question}>{index+1}:{item.question}</a> 
                        </Link>
                    </div>
                   )
                })
            }
        </div>
    )
}

export default AllQuestion;