import counterReducer from "./counterReducer";
import articlesReducer from "./articlesReducer";
import {combineReducers} from 'redux'

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer
})