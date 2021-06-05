import React, { useState } from 'react';

const Calculate = () => {
  return (
    <div className="calc-container">
      <div className="calculator">
        <h1 className="title">React Calculator</h1>
        <form className="input-container">
          <input type="text" className="entry" />
          <select id="operation">
            <option id="addition">+</option>
            <option id="subtraction">−</option>
            <option id="multiplication">×</option>
            <option id="division">÷</option>
          </select>
          <input type="text" className="entry" />
          <button>=</button>
          <input type="text" className="display" />
        </form>
      </div>
    </div>
  )
}

export default Calculate;