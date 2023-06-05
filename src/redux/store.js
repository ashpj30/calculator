import { rootReducer } from "./rootReducer";
import {createStore} from 'redux'
//import {composeWithDevTools} from 'redux-devtools-extension' // which is used to enhance the store with the 
                                                  //ability to use the Redux DevTools browser extension for debugging and time-traveling.

let store = createStore(rootReducer)

export {store}