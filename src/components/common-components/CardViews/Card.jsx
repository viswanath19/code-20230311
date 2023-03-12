import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className='cardview' style={{backgroundImage:`url(${props.backgroundImg})`}}>
      
    </div>
  )
}

export default Card
