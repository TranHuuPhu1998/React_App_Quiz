import * as React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Question } from "./components/Questions"
import { AddQuestion } from "./pages/addQuestion"
import './index.css'

const App: React.FC = () => {

return (
  <Router>
    <main>
      <div className="main">
        <Switch>
          <Route exact path="/"component={Question} />
          <Route path="/add-quiz" component={AddQuestion} />
          <Route component={() => <div>Not Found</div>} />
        </Switch>
      </div>
    </main>
    </Router>
  )
}

export default App;
