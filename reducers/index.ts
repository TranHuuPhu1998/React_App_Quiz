import { combineReducers } from "redux";
import questions from './reducerQuestions'
import category from './reducerCategorys'
import listlesson from './reducerListLesson'

const appReducers = combineReducers({
    questions,
    category,
    listlesson
});

export type RootState = ReturnType<typeof appReducers>
export default appReducers