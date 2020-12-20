import { combineReducers } from "redux";
import articles from './reducer'
import question from './reducerQuestion'

export const appReducers = combineReducers({
    articles,
    question
});

export type RootState = ReturnType<typeof appReducers>
