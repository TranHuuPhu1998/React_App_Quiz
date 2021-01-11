import React from 'react'
import { useState, useEffect } from 'react'

interface Props {
    categoryProps: any,
    listLesson: any,
    answersProps: any,
    item: any,
    question: any,
    onEditQuestion : (e ,quizdata ,quizName,category,answersProps,icorrect) => void,
    handleChangeAnswers : (e) => void,
    onHandleChangeIsCorrect : (quizdata, quizName ,category ,answersProps,answers) => void
}

const EditQuestionItem: React.FC<Props> = ({
    categoryProps,
    listLesson,
    answersProps,
    item,
    question,
    onEditQuestion,
    handleChangeAnswers,
    onHandleChangeIsCorrect,
}) => {

    const [quizName, setQuizName] = useState(String)
    const [category, setCategory] = useState(String)
    const [icorrect, setIcorrect] = useState(Boolean)

    useEffect(() => {
        setCategory(categoryProps)
        setQuizName(question)
    }, [])

    return (
        <div className="form-addquestion">
            <label className="form-label gray" htmlFor="quizname">Nội dung câu hỏi:</label>
            <input
                type="text"
                name="quizName"
                className="form-control"
                id="quizname"
                onChange={(e) => setQuizName(e.currentTarget.value)}
                defaultValue={item.question || ""}
            />
            <select
                className="form-control mb-4 mt-4"
                name="category"
                id="category"
                onChange={(e) => setCategory(e.currentTarget.value)}
            >
                <option defaultValue="Choose">{item.category}</option>
                {
                    listLesson.map((item: any, index) => {
                        return (
                            <option key={index} value={item.category}>{item.category}</option>
                        )
                    })
                }
            </select>
            {
                item.answers.map((item2: any, index: any) => {
                    return (
                        <div key={index}>
                            <label htmlFor="">Đáp án {index + 1}</label>
                            <div className="d-flex">
                                <input
                                    type="text"
                                    name="answers"
                                    id={`content${index}`}
                                    className="form-control input-answer"
                                    defaultValue={item2.content}
                                    onChange={handleChangeAnswers}
                                />
                
                                <p onClick={()=>onHandleChangeIsCorrect(item, quizName,category , answersProps,item2)} className={item2.isCorrect ? "check":"notCheck"}>
                                </p>
                            </div>
                        </div>
                    )
                })
            }
            <button onClick={(e) => onEditQuestion(e, item ,quizName,category,answersProps,icorrect)} className="btn btn-success mt-3">submit</button>
        </div>
    )
}

export default EditQuestionItem;