import * as react from 'react'
import {useState,useEffect} from 'react'
import Link from 'next/link'

import callAPI from '../../util'
import './styles.scss'

const AllQuestion : React.FC = () =>{
    const [questionsData , setQuestionsData] = useState(Array)

    useEffect(()=>{
        callAPI('questions','GET',null)
            .then((res:any) => {
                setQuestionsData(res.data)
            })
    },[])

    return (
        <div className="quiz-wapper">
            {
                questionsData && questionsData?.map((item:any,index:number)=>{
                   return (
                    <div key={index} >
                    <Link href={`questiondetails/${item.id}`}>
                        <a>{index}:{item.question}</a> 
                    </Link>
                    </div>
                   )
                })
            }
        </div>
    )
}

export default AllQuestion;