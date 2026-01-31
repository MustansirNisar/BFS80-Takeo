import {createStore, combineReducers} from 'redux'
import countReducer from './Reducer'
import colorReducer from './ColorReducer'



// let store = createStore(countReducer)

const reducer = combineReducers({
    count: countReducer,
    color: colorReducer   
})

let store = createStore(reducer)
export default store