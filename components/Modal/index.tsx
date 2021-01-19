import * as React from 'react'
import {useState , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {RequestApiListLessonPOST , 
        RequestApiCategory ,
        RequestApiListLessonPATCH,
        } from '../../actions'
import './styles.scss'

interface Props {
    isOpen:Boolean,
    propsListLesson : any,
    onCloseModal:()=>void
}

const initialState = {
    category: "",
    subject: "",
    discriptions: ""
};
  
const Modal:React.FC<Props>  = ({isOpen , onCloseModal, propsListLesson}) =>{

    const dispatch = useDispatch()
    const Subjects = useSelector((state:any) => state.category)
    const [dataListLesson , setdataListLesson] = useState({
        "id":null,
        "released": "true",
        "category": "",
        "name": "",
        "discriptions": "",
    })


    useEffect(()=>{
            dispatch(RequestApiCategory())
            if(propsListLesson.id){
                setdataListLesson({
                    "id" :propsListLesson.id,
                    "released" : propsListLesson.released,
                    "category": propsListLesson.category,
                    "name": propsListLesson.name,
                    "discriptions":propsListLesson.discriptions,
                })
            }else {
                setdataListLesson({
                    "id" :"",
                    "released" : "",
                    "category": "",
                    "name": "",
                    "discriptions":"",
                })
            }
    },[propsListLesson.id,isOpen])

    const onHanleChange = (e) =>{
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        setdataListLesson((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }
    const resetState = () =>{
        setdataListLesson({
            "id" : null,
            "released": "true",
            "category": "",
            "name": "",
            "discriptions": "",
        })
        return;
    }
    const onSaveLesson = (e: React.FormEvent) =>{
        e.preventDefault()
        dataListLesson.released = JSON.parse(dataListLesson.released);
        if(dataListLesson.id){
            dispatch(RequestApiListLessonPATCH(dataListLesson))
        }else{
            dispatch(RequestApiListLessonPOST(dataListLesson))
            resetState()
        }
    }

    return (
        <div className={isOpen ? "modal-show category-modal" : "modal-close category-modal"} >
            <div className="modal-wapper">
                
                <div className="modal-btn-close">
                    <label htmlFor="exampleInputEmail1">{dataListLesson.id ? "EDIT" : "ADD"}</label>
                    <label onClick={onCloseModal}>X</label>
                </div>
                <hr/>
                <form onSubmit={onSaveLesson}>
                <p>Released</p>
                <div className="form-check form-check-inline">
                    <label htmlFor="true">true</label>
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        id="true" 
                        value="true"
                        // checked={propsListLesson.released === true}
                        name="released"
                        onChange={onHanleChange}
                        />
                </div>
                <div className="form-check form-check-inline">
                    <label htmlFor="false">false</label>
                    <input 
                    type="radio" 
                    className="form-check-input"  
                    id="false" 
                    value="false" 
                    // checked={propsListLesson.released === false}
                    name="released"
                    onChange={onHanleChange}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="Category">Category Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="Category" 
                    name="category"
                    placeholder="Enter Category"
                    value={dataListLesson.category}
                    onChange={onHanleChange}
                    required 
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="Discriptions">Discriptions Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="Discriptions" 
                    name="discriptions"
                    placeholder="Enter Discriptions"
                    value={dataListLesson.discriptions}
                    onChange={onHanleChange}
                    required 
                    />
                </div>
                <p className="mt-2">Choose Subject</p>
                <select 
                className="form-control" 
                name="name" 
                id="subjectid"
                required
                value={dataListLesson.name}
                onChange={onHanleChange}
                
                >
                    <option defaultValue="Choose">{dataListLesson.name ? dataListLesson.name : "Choose..."}</option>
                    {
                        Subjects.map((ele:any,index:number)=>{
                            return (
                                <option key={index} value={ele.name} >{ele.name}</option>
                            )
                        })
                    }
                </select>
                    <hr/>
                    <input className="btn btn-primary mr-3" type="submit" value="Save"/>
                    <input onClick={onCloseModal} className="btn btn-success " type="button" value="Cloes"/>
                </form>
            </div>
        </div>
    )
}

export default Modal;