import {calculatorReducer, CALCULATOR_KEY} from './calculatorRedux/calculator.reducer'
import {combineReducers} from 'redux'


let rootReducer = combineReducers({     
    [CALCULATOR_KEY]:calculatorReducer // responsible for updating the state for the 'calculator' slice of the overall state object.
})

export {rootReducer}