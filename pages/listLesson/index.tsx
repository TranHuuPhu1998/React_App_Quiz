import * as React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector , useDispatch } from "react-redux";
import { RequestApiCategory , RequestApiListLesson } from '../../actions/index'

import  classes from './styles.scss'

const ListLesson: React.FC = ({}) => {

    const router = useRouter()
    const dispatch = useDispatch()
    const listLesson = useSelector((state: any) => state.listlesson)
    const category = useSelector((state: any) => state.category)
    const questions = useSelector((state: any) => state.questions)

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
                        <h1 className={classes.les_title}>{index + 1}. {item1.name}</h1>
                        <div className={classes.lesson_container}>
                            {listLesson && listLesson?.map((item: any, index: number) => {
                            if ((item1.name === item.name)) {
                                return (
                                    <div key={index} className={item.released ? classes.background_img : classes.background_img+" "+classes.not_released}>
                                        <div className={classes.box}>
                                            <div className={classes.content}>
                                                <h2>{item.category}</h2>
                                                <div className={classes.les_discription}>
                                                    <p>
                                                        {item.discriptions}
                                                    </p>
                                                </div>
                                            </div>
                                            <button 
                                            className={item.released ? classes.lesson_btn : classes.lesson_btn+" "+classes.btn_active} 
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