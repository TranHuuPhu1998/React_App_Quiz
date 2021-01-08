import React from 'react'
import { useState, useEffect } from 'react'

interface Props {
    categoryProps: any,
    listLesson: any,
    answersProps: any,
    item: any,
    question: any,
    onEditQuestion : (e ,quizdata ,quizName,category,answersProps) => void,
    handleChangeAnswers : (e) => void
}

const EditQuestionItem: React.FC<Props> = ({
    categoryProps,
    listLesson,
    answersProps,
    item,
    question,
    onEditQuestion,
    handleChangeAnswers
}) => {

    const [quizName, setQuizName] = useState(String)
    const [category, setCategory] = useState(String)

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
                            <input
                                type="text"
                                name="answers"
                                id={`content${index}`}
                                className="form-control"
                                defaultValue={item2.content}
                                onChange={handleChangeAnswers}
                            />
                            <label htmlFor="">{item2.isCorrect}</label>
                        </div>
                    )
                })
            }
            <button onClick={(e) => onEditQuestion(e, item ,quizName,category,answersProps)} className="btn btn-success">submit</button>
        </div>
    )
}

export default EditQuestionItem;