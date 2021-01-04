import * as React from 'react';

import { RequestApiQuestion, RequestApiListLesson, RequestApiCategory } from '../actions/index'
import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import AddQuestion from './addquestion';

const Home:React.FC =()=>{
  const dispatch = useDispatch();
  useEffect(() => {
      // You can await here
          dispatch(RequestApiListLesson());
          dispatch(RequestApiCategory());
          // dispatch(RequestApiQuestion())
  }, [dispatch])

  return (
    <>
      <main>
        <div className="main">
            <AddQuestion/>
        </div>
      </main>
    </>
  )
}
export default Home;