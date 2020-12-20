import * as React from 'react';
import { Question } from "../components/Questions"

const Home:React.FC =()=>{
  return (
    <>
      <main>
        <div className="main">
          <Question/>
        </div>
      </main>
    </>
  )
}
export default Home;