import * as React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import {RequestApiListLesson , RequestApiListLessonDELETE} from '../../actions/index'
import Modal from '../Modal'
import './styles.scss'

const Nav= () =>{

    const dispatch = useDispatch()
    const [isOpen, setIsopen] = useState(false)
    const [isHover, setIsHover] = useState({
        released:"",
        id:"",
        ishover:false
    })
    const [dataListLesson, setDataListLesson] = useState(Object)
    const ListLesson = useSelector((state:any) => state.listlesson)

    useEffect(()=>{
        dispatch(RequestApiListLesson())
    },[])

    const onCloseModal = () =>{
        setIsopen(!isOpen)
    }
    const onDeleteLesson = (id) =>{
        dispatch(RequestApiListLessonDELETE(id))
    }
    const onEditLesson = (data) =>{
        setIsopen(!isOpen)
        setDataListLesson(data)
    }
    const addLisLesson = () => {
        setIsopen(!isOpen)
        setDataListLesson({"id":""})
    }
    const handleMouseIn = (id,released) =>{
        setIsHover({
            released:released,
            id:id,
            ishover:true
        
        })
    }
    console.log("handleMouseIn -> ishover", isHover.ishover)
    return (
        <>
        <div className="quiz-nav">
            <div onClick={addLisLesson} className="quiz-add-category">
                <p>Add ListLesson</p>
            </div>
            <div className="quiz-allquestions">
                ALL ListLesson
            </div>
            {ListLesson.map((ele,index)=>{
                return (
                    <div key={index} onMouseOver={()=>handleMouseIn(ele.id,ele.released)} className= {ele.released ? 'quiz-category': 'quiz-category released' }>
                        <p> {ele.category}</p>
                        <div className="d-flex" >
                            <div className="icon-delete" onClick={()=>onDeleteLesson(ele.id)}>
                                <img src="../../img/trash-alt-solid.svg" alt=""/>
                            </div>
                            <p className="icon-edit" onClick={()=>onEditLesson(ele)}>
                                <img src="../../img/edit-regular.svg" alt=""/>
                            </p>
                        </div>
                        <div  className="position-ab">
                                {
                                    isHover.ishover === true && ele.id === isHover.id ? <div>{ isHover.released  ? "released" : "Not released"}</div> : ""
                                }
                        </div>
                    </div>
                )
            })} 

        </div>
        <Modal isOpen={isOpen} onCloseModal={onCloseModal} propsListLesson={dataListLesson}/>
        <div className= {isOpen ? "body-hiddel":""}></div>
        </>
    )
}
export default Nav