import React from 'react';
import './textInput.css';

function TextInputFilter(props) {
  return (
    <div className='inputComponent'>
      <div className='textInputLabel'>{props.label}</div>
      <input className='inputText' type="text" id="inputText" placeholder={props.placeholder}/>
    </div>
  )
}

export default TextInputFilter
