import React from 'react';
import './card.css';

function Card(props) {
  return (
    <>
        {props.cards.map((card,index)=>{
            return (
                <div key={index} className='cardViewMain'>
                    <div className='cardview' style={{backgroundImage:`url(${card.backgroundImg})`}} />
                    <div className='cardViewTitle'>
                        <span className='cardViewTitleHeader'>{card.header}</span>
                        <span className='cardViewTitleSubHeader'>{card.subHeader}</span>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default Card
