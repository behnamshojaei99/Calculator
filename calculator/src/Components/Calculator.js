import React, { useState } from 'react';
import { btns } from '../btnsConfig';

const Calculator = (props) => {

    const [inputValue, setInputValue] = useState('');
    
    const btnHandler = (event) => {
        event.target.value !== '=' ? setInputValue(prev => prev + event.target.value) : calculate(inputValue);
    }

    const inputHandler = (event) => {
        setInputValue(event.target.value)
    }

    const clearHandler = () => {
        setInputValue('')
    }

    const calculate = (exp) => {
        let answer = eval(exp);
        setInputValue(answer);
        
    }

    return (
        <div className='row justify-content-center align-items-center h-100'>
            
            <div className='col-md-6 background p-4'>
            <h1 className='m-3'>React Calculator</h1>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-9'>
                        <input onChange={inputHandler} type='text' value={inputValue} />
                    </div>
                    <div className='col-md-3'>
                        <button onClick={clearHandler} className='btn btn-primary'>C</button>
                    </div>
                </div>
                <div className='row justify-content-center align-items-center'>
                {
                    btns.map(( btn, index ) => (
                        <div key={index} className='col-md-3'>
                            <button value={btn} onClick={(event) => btnHandler(event)} className='btn btn-primary'>{btn}</button>
                        </div>
                    ))
                }
                </div>  
            </div>
        </div>
    )
}

export default Calculator;