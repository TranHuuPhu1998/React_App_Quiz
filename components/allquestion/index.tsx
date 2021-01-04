import * as react from 'react'
import {useState,useEffect} from 'react'
import Link from 'next/link'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { RequestApiQuestion } from '../../actions/index'

import callAPI from '../../util'
import './styles.scss'

const AllQuestion : React.FC = () =>{
    const dispatch = useDispatch()
    const questionsData = useSelector((state:any) => state.questions)

    useEffect(()=>{
        dispatch(RequestApiQuestion())
    },[dispatch])

    return (
        <div className="quiz-wapper">
            <Link href="/">Add Question</Link>
            {
                questionsData && questionsData?.map((item:any,index:number)=>{
                   return (
                    <div key={index} >
                    <Link href={`/questiondetails/${item.id}`}>
                        <a>{index+1}:{item.question}</a> 
                    </Link>
                    </div>
                   )
                })
            }
        </div>
    )
}

export default AllQuestion;