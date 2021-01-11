import * as React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector , useDispatch } from "react-redux";
import Link from 'next/link'
import { RequestApiCategory , RequestApiListLesson } from '../../actions/index'

import './styles.scss'

const ListLesson: React.FC = ({}) => {

    const router = useRouter()
    const listLesson = useSelector((state: any) => state.listlesson)
    const category = useSelector((state: any) => state.category)
    const questions = useSelector((state: any) => state.questions)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(RequestApiCategory())
        dispatch(RequestApiListLesson())
    }, [])

    const onLeaning = (value: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
        questions.forEach((ele:any,index:number)=>{
            if(ele.category === value){
                router.push(`questions/${value}`)
            }
        })
    
    }

    return (
        <div> 
            {category && category?.map((item1: any, index: number) => {
                return (
                    <div key={index}>
                        <h1 className="les-title">{index + 1}. {item1.name}</h1>
                        <div className="lesson-container">
                            {listLesson && listLesson?.map((item: any, index: number) => {
                            if ((item1.name === item.name)) {
                                return (
                                    <div key={index} className={item.released ? "background-img" : "background-img not-released"}>
                                        <div className="box">
                                            <div className="content">
                                                <h2>{item.category}</h2>
                                                <div className="les-discription">
                                                    <p>
                                                        {item.discriptions}
                                                    </p>
                                                </div>
                                            </div>
                                            <button 
                                            className={item.released ? "lesson_btn" : "lesson_btn btn-active"} 
                                            onClick={() => onLeaning(item.category)}>LEARN</button>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                        </div>
                    </div>
                )
            })}
        </div>

    )
}


export default ListLesson