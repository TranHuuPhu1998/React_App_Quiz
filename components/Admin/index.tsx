import React from 'react'
import NavQuiz from '../NavQuiz';
import Nav from '../Nav';

const admin : React.FC = () =>{
    return (
        <div className='d-flex'>
            <Nav/>
            <NavQuiz/>
        </div>
    )
}

export default admin
