import {INCREMENT} from "../constants";

export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT: return state + 1
    }
    return state
}