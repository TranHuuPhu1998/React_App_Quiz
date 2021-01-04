import * as React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import Link from 'next/link'
import './styles.scss'

const ListLesson: React.FC = ({}) => {
    const router = useRouter()
    const listLesson = useSelector((state: any) => state.listlesson)
    const category = useSelector((state: any) => state.category)

    const onLeaning = (value: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        router.push(`questions/${value}`)
    }

    return (
        <div> 
            <Link href='addquestion'>addquestion</Link>
            {category && category?.map((item1: any, index: number) => {
                return (
                    <div key={index}>
                       
                        <h1 className="les-title">{index + 1}. {item1.name}</h1>
                        <div className="lesson-container">{listLesson && listLesson?.map((item: any, index: number) => {
                            if (item1.name === item.name) {
                                return (
                                    <div key={index} className="background-img">
                                        <div className="box">
                                            <div className="content">
                                                <h2>{item.category}</h2>
                                                <div className="les-discription">
                                                    <p>
                                                        {item.discriptions}
                                                    </p>
                                                </div>
                                            </div>
                                            <button className="lesson_btn" onClick={() => onLeaning(item.category)}>LEARN</button>
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

export async function getStaticProps() {
    const category = await useSelector((state: any) => state.category)
    const listLesson = await useSelector((state: any) => state.listlesson)

    return {
      props: {
        category,
        listLesson,
      }
    }
}

export default ListLesson