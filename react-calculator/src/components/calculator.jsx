import React, { useState } from 'react';

export default () => {
  const [num1, setNum1] = useState('')
  const [operation, setOperation] = useState('+')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState('')

  setResult('')

  const calculate = () => {
    switch (operation) {
      case '+':
        return setResult(Number(num1) + Number(num2))
      case '-':
        return setResult(Number(num1) - Number(num2))
      case '×':
        return setResult(Number(num1) * Number(num2))
      case '÷':
        return setResult(Number(num1) / Number(num2))
      default:
        return setResult('Please provide a valid number for both operands')
    }
  }

  return (
    <div className="calc-container">
      <div className="calculator">
        <h1 className="title">React Calculator</h1>
        <form className="input-container">
          <input type="text" className="entry" id="operand1" placeholder="Enter a number" maxLength="12" value={num1} onChange={event =>
            setNum1(event.target.value)} />
          <select id="operation" value={operation} onChange={event => setOperation(event.target.value)} >
            <option id="addition">+</option>
            <option id="subtraction">−</option>
            <option id="multiplication">×</option>
            <option id="division">÷</option>
          </select>
          <input type="text" className="entry" id="operand2" placeholder="Enter a number" maxLength="12" value={num2} onChange={event =>
            setNum2(event.target.value)} />
          <button id="equals-btn" type="button" onClick={calculate}>=</button>
          <input type="text" className="display" disabled value={result} />
        </form>
      </div>
    </div>
  )
}