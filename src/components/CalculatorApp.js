import React from 'react'
//import {GiHamburgerMenu} from 'react-icons/gi'
import {useDispatch, useSelector} from 'react-redux' //useDispatch and useSelector hooks from the react-redux
import {loadAnswer, loadButtons,loadClear, loadBackspace} from '../redux/calculatorRedux/calculator.actions'
import {CALCULATOR_KEY} from '../redux/calculatorRedux/calculator.reducer'
import './App.css';

const CalculatorApp = () => {            //useDispatch hook is used to dispatch actions to the Redux store, 
    const dispatch = useDispatch()


      // handle answer 
    const handleAnswer = (e) =>{ //when the "=" button is clicked. It dispatches the loadAnswer action to calculate the result of the current expression.

       e.preventDefault()
        // alert(number)
      dispatch(loadAnswer())
    }

    // view store 
    const viewCalculator = useSelector((state) =>{ //useSelector hook is used to retrieve the state from the Redux store
        return state[CALCULATOR_KEY]    //viewCalculator variable uses the useSelector hook to retrieve the state from the Redux store.
    })

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(viewCalculator)}</pre> */}
           <section>
               <div className="calc-body">
                 
                      
                       <p className='a'>CALCULATOR APP</p>
                  

                   {/* screen */}
                  
                   <div className=' calc-screen '>
                       <input
                       type='text'
                       placeholder='0'
                       value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans}
                       className='App2 '

                        />
                       </div>
                

                   {/* keypad */}
                   <div className='calc-button-row'>
                       <button onClick={() =>dispatch(loadClear())} className='ac'>AC</button>
                       <button onClick={() =>dispatch(loadBackspace())}  className='opt'>C</button>
                       <button onClick={() =>dispatch(loadButtons('/'))} className='opt'>/</button>
                       <button onClick={() =>dispatch(loadButtons('+'))} className='opt'>+</button> 


                       <button onClick={() =>dispatch(loadButtons(9))} >9</button> 
                       <button onClick={() =>dispatch(loadButtons(8))} >8</button>
                       <button onClick={() =>dispatch(loadButtons(7))} >7</button> 
                       <button onClick={() =>dispatch(loadButtons('-'))} >-</button> 

                       <button onClick={() =>dispatch(loadButtons(4))} >4</button>
                       <button onClick={() =>dispatch(loadButtons(5))} >5</button>
                       <button onClick={() =>dispatch(loadButtons(6))} >6</button>
                       <button onClick={() =>dispatch(loadButtons('*'))}>*</button>

                        <button onClick={() =>dispatch(loadButtons(1))} >1</button>
                       <button onClick={() =>dispatch(loadButtons(2))} >2</button>
                       <button onClick={() =>dispatch(loadButtons(3))} >3</button>

                       <button onClick={() =>dispatch(loadButtons('.'))} >.</button>
                       <button onClick={() =>dispatch(loadButtons(0))} className="but2" >0</button> 
                        <button onClick={handleAnswer} className="but2">=</button> 
        
                   </div>
                   
               </div>
           </section>
        </React.Fragment>
    )
}

export default CalculatorApp