import React, { useEffect, useState } from 'react'
import './main.css';
import mainBackground from '../../assets/main-background.png';
import TextInputFilter from '../common-components/TextInputFilter/TextInputFilter';
import ButtonComponent from '../common-components/ButtonComponent/ButtonComponent';
import FooterComponent from '../footer-component/FooterComponent';
import ExploreComponent from '../second-component/ExploreComponent';
import About from '../third-component/About';

function MainComponent() {
    const [currentScreen,setCurrentScreen] = useState('home');
    useEffect(()=>{
        switch(window.location.pathname) {
            case '/explore':
                setCurrentScreen('explore');
                break;
            case '/about':
                console.log("Enter Screen About")
                setCurrentScreen('about');
                break;
            case '/':
                setCurrentScreen('home');
                break;
            default:
                setCurrentScreen(null);
                break;
        }

    },[window.location.pathname]);
    console.log("current screen",currentScreen);
  return (
    <>
        {currentScreen === 'home' && <div className='mainScreen'>
            <div className='mainScreenHeading'>
                Rethink your living & renting
            </div>
            <div className='mainScreenSubHeading'>
                Make your stay painless with us
            </div>
            <div className='mainScreenSearchFilters'>
                <TextInputFilter label="City" placeholder="Select your city"/>
                <TextInputFilter label="Dates" placeholder="Select your dates"/>
                <TextInputFilter label="Guests" placeholder="Add guests"/>
                <ButtonComponent />
            </div>
        </div>}

        {currentScreen === 'explore' && <div className='mainScreenHeader'>
            <ExploreComponent />    
        </div>}

        {currentScreen === 'about' && <div className='mainScreenHeader'>
            <About />    
        </div>}
        
        <div className='navBars'>
            <a className='explore-navigation' href='/explore'>Explore</a>
            <a className='about-navigation' href='/about'>About Us</a>
        </div>
    </>
  )
}

export default MainComponent
