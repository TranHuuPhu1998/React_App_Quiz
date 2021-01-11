import * as React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import {RequestApiListLesson } from '../../actions/index'
import Modal from '../Modal'
import './styles.scss'

const Nav= () =>{

    const dispatch = useDispatch()
    const [isOpen, setIsopen] = useState(false)
    const ListLesson = useSelector((state:any) => state.listlesson)
    useEffect(()=>{
        dispatch(RequestApiListLesson())
    },[])

    const onCloseModal = () =>{
        setIsopen(!isOpen)
    }

    return (
        <>
        <div className="quiz-nav">
            <div onClick={()=>setIsopen(!isOpen)} className="quiz-add-category">
                <p>Add ListLesson</p>
            </div>
            <div className="quiz-allquestions">
                ALL ListLesson
            </div>
            {ListLesson.map((ele,index)=>{
                return (
                    <>
                    <div key={index} className='quiz-category'>
                        <p> {ele.category}</p>
                        <div className="d-flex">
                            <span className="icon-delete">
                                <img src="../../img/trash-alt-solid.svg" alt=""/>
                            </span>
                            <span className="icon-edit">
                                <img src="../../img/edit-regular.svg" alt=""/>
                            </span>
                        </div>
                    </div>
                    
                    </>

                )
            })} 
           
        </div>
        <Modal isOpen={isOpen} onCloseModal={onCloseModal}/>
        <div className= {isOpen ? "body-hiddel":""}></div>
        </>
    )
}
export default Nav