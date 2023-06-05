import {LOAD_ANSWER, LOAD_BUTTONS, LOAD_CLEAR, LOAD_BACKSPACE} from './calculator.actionTypes'

export const CALCULATOR_KEY = 'calculatorStore'
let initialState =   {   //'number' and 'ans', which represent the input number and the result of the calculator
    number:'',
    ans:'',
  
}
   
export const calculatorReducer = (state = initialState, action) =>{
    let {type, payload} = action   //state and action, and returns the updated state based on the action type and payload.
    
     switch(type){
        case LOAD_BUTTONS:  //append the button value to the input number.
            return{
                ...state,
                ...payload,
                number:state.number.concat(action.payload)
           
                
            }

            case LOAD_ANSWER: //evaluate the input number and update the result of the
                 try{
                   return {
                    ...state,
                    ...payload,
            ans:eval(state.number).toString()  //evaluates the value of the variable "state.number" and converts it to a string.
                   }

                }catch(err){ // if any error then set the error
                    return {
                        ...state,
                        ...payload,
                        ans:'Error'
                    }
                }
            

               case LOAD_CLEAR:
                return{
                    ...state,
                    ...payload,
                    number:'',
                    ans:''
                }

                case LOAD_BACKSPACE:   //remove the last character from the input number.
                    return{
                        ...state,
                        ...payload,
                        number:(state.number).slice(0,-1),
                        ans:''
                    }

                default: return state
    }


}