import {createStore} from 'redux'
import reducer from "../reducers/mainReducer";

const store = createStore(reducer);

window.store = store;

export default store