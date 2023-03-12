import React from 'react';
import './about.css';
import Card from '../common-components/CardViews/Card';
import aboutBackgroundImg1 from '../../assets/aboutCard-1.png';
import aboutBackgroundImg2 from '../../assets/aboutCard-2.png';
import aboutBackgroundImg3 from '../../assets/aboutCard-3.png';
import aboutBackgroundImg4 from '../../assets/aboutCard-4.png'; 

function About() {
  return (
    <div className='aboutComponent'>
      <span className='aboutTitle'>About Us</span>
      <span className='aboutHeading-1'>Allow us to tell you a short story...</span>
        <div className='aboutCards-1'>
            <Card cards={[
                {backgroundImg:aboutBackgroundImg1,header:'Chapter I', subHeader:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun'},
                {backgroundImg:aboutBackgroundImg2,header:'Chapter II', subHeader:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun'},
            ]}/>
        </div>
        <div className='aboutCards-2'>
            <Card cards={[
                {backgroundImg:aboutBackgroundImg3,header:'Chapter III', subHeader:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun'},
                {backgroundImg:aboutBackgroundImg4,header:'Chapter IV', subHeader:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun'}
            ]}/>
        </div>
    </div>
  )
}

export default About
