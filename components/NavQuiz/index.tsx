import React from 'react'
import './styles.scss'
import AllQuestion from '../Allquestion/index'
import classes from './styles.scss'

const NavQuiz = () => {
    return (
        <div className={classes.nav_quiz}>
            <AllQuestion/>
        </div>
    )
}


export default NavQuiz