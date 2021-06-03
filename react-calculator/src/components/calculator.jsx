import React, { useState } from 'react';

const Calculate = () => {
  return (
    <div className="calc-container">
      <div className="calculator">
        <h1 className="title">React Calculator</h1>
        <div className="input-container">
          <input type="text" className="entry"></input>
          <input type="text" className="entry"></input>
          <input type="text" className="display"></input>
        </div>
      </div>
    </div>
  )
}

export default Calculate;