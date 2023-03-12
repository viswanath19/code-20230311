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
        <div className='aboutCards'>
            <Card backgroundImg={aboutBackgroundImg1}/>
            <Card backgroundImg={aboutBackgroundImg2}/>
        </div>
        <div className='aboutCards'>
            <Card backgroundImg={aboutBackgroundImg3}/>
            <Card backgroundImg={aboutBackgroundImg4}/>
        </div>
    </div>
  )
}

export default About
