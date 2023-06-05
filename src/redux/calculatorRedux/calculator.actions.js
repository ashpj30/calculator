import {LOAD_ANSWER, LOAD_BUTTONS, LOAD_CLEAR, LOAD_BACKSPACE} from './calculator.actionTypes'


export const loadButtons = (number) =>{  
    return{
        type: LOAD_BUTTONS,
        payload:number  //The payload property is used to pass any necessary data to the reducer.
        //payload is the number associated with the button.
    }
}

export const loadAnswer = (number) =>{
    return{
        type:LOAD_ANSWER,
        payload:number //answer should be calculated.
    }
}

export const loadClear = (number) =>{
    return{
        type:LOAD_CLEAR,//reset calculator
        payload:number
    }
}

export const loadBackspace = (number) =>{
    return{
        type:LOAD_BACKSPACE,//last digit entered should be removed.
        payload:number
    }
}



