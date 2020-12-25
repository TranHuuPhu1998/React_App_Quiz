import * as React from 'react'
import { useState , useEffect } from 'react'
import callAPI from '../../util'
import Nav from '../../components/Nav'
import NavQuiz from '../../components/NavQuiz'
let rs:any[] = []

const AddQuestion : React.FC = () =>{
    const [quizName, setQuizName ] = useState(String)
    const [ , setQuestions] = useState(Object)
    const [quizCorrect , SetQuizCorrect] = useState(Object)
    const [lengthAns , SetLengthAns] = useState(Number)
    const [listLesson, setListLesson] = useState(Array)
    const [category , setCategory] = useState(String)
    
    const totalAns = ["4","5","6","7","8","9"];

    useEffect(() => {
        callAPI("listlesson","GET",null).then((res:any)=>{
            setListLesson(res.data)
        })
    }, [])
    
    const onSaveAns = (e : React.FormEvent) =>{
        e.preventDefault()
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
        arrTemp2.forEach((element:any,index:number) => {
            if(element.content === quizCorrect.quizCorrect){
                arrTemp2[index].isCorrect = true;
            }
            else{
                arrTemp2[index].isCorrect = false;
            }
        });
        setQuestions({
            question : quizName,
            answers : arrTemp2 
        })
        callAPI('questions', "POST",{
            question : quizName,
            answers : arrTemp2,
            category : category
        }).then(data => {
          console.log(data); 
        });
    }
    
    const handleChangeAns = (e : any) =>{
        let obj = {
            content : e.currentTarget.value,
            data_id : e.currentTarget.name,
        }
        rs.push(obj)
    }
    
    const handleChangeCorrect = (e: any) =>{
        SetQuizCorrect({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    const AddAnswers = () =>{
        SetLengthAns(lengthAns+1)
    }

    totalAns.length = lengthAns
    const RenderTotalAns = totalAns.map((ele)=>{
        return (
                <div key={ele}>
                <label htmlFor="" className="form-label gray ">Đáp án {ele}: </label>
                <input 
                    type="text"
                    name={ele}
                    className="form-control"
                    onChange={handleChangeAns }/> 
                </div>
            )
    })

    return (
        <div className="d-flex">
            <Nav/>
            <NavQuiz/>
            <div className="main">
                <div className="text-center mt-5">AddQuestion</div>
                <form className="form-addquestion" onSubmit={onSaveAns} >
                <div>
                    <div>
                    <label className="form-label gray " htmlFor="">Chọn category</label>
                    <select 
                        className="form-control" 
                        name="category" 
                        id="categoryid"
                        onChange={(e)=>setCategory(e.currentTarget.value)}
                        >
                    <option defaultValue="Choose">Choose...</option>
                    {
                    
                        listLesson.map((item:any , index)=>{
                            return (
                                <option key={index} value={item.category}>{item.category}</option>
                            )
                        })
                    }
                    </select>
                    </div>

                <label className="form-label gray " htmlFor="quizname">Nhận nội dung câu hỏi:</label>
                    <input 
                        type="text" 
                        name="quizName" 
                        className="form-control"
                        id="quizname" 
                        onChange={(e)=> setQuizName(e.currentTarget.value)}/>
                </div>
                    <label className="form-label gray " htmlFor="quizans"> Nhập nội dung câu trả lời:</label>
                    <div>
                        <label htmlFor="" className="form-label gray ">Đáp án 1:</label>
                        <input 
                            type="text" 
                            name="content1" 
                            className="form-control"
                            onChange={handleChangeAns}/>
                        <label htmlFor="" className="form-label gray ">Đáp án 2:</label>
                        <input 
                            type="text" 
                            name="content2"
                            className="form-control" 
                            onChange={handleChangeAns}/>
                        <label htmlFor="" className="form-label gray ">Đáp án 3:</label>
                        <input 
                            type="text" 
                            name="content3" 
                            className="form-control"
                            onChange={handleChangeAns }/>
                        {RenderTotalAns}
                    </div>
                    <div className="btn btn-secondary mt-3 mb-3 d-block" onClick={AddAnswers}>
                        Thêm Đáp án
                    </div >
        
                    <label htmlFor="" className="form-label gray  ">Nhập đáp án đúng:</label>
                    <input 
                        className="form-control" 
                        type="text" name="quizCorrect" 
                        onChange={handleChangeCorrect} />
                    <input className="btn btn-primary mt-4" type="submit" value="submit" />
                </form>
            </div>
            
        </div>
    )
}

export default AddQuestion;