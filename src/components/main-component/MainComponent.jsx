import React, { useEffect, useState } from 'react'
import './main.css';
import mainBackground from '../../assets/main-background.png';
import TextInputFilter from '../common-components/TextInputFilter/TextInputFilter';
import ButtonComponent from '../common-components/ButtonComponent/ButtonComponent';
import FooterComponent from '../footer-component/FooterComponent';
import ExploreComponent from '../second-component/ExploreComponent';
import About from '../third-component/About';
// import { connect,useSelector,useDispatch } from 'react-redux'
// import { buyCake } from '../../reducer';

function MainComponent(props) {
    const [currentScreen,setCurrentScreen] = useState('home');
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    // const numberOfCakes = useSelector(state => state.cakes.numberOfCakes);
    // const dispatch = useDispatch();

    // useEffect(()=>{
    //     console.log("number of cakes input as",numberOfCakes);
    // },[numberOfCakes]);

    useEffect(() => {
        //console.log(numberOfCakes);
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
        setIsSmallScreen(true);
        } else {
        setIsSmallScreen(false);
        }
    };
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
                //dispatch(buyCake());
                setCurrentScreen('home');
                break;
            default:
                console.log(props);
                setCurrentScreen('home');
                break;
        }

    },[window.location.pathname]);
    console.log("current screen",window.location.href);
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
            {!isSmallScreen && <div className='navBars'>
                <a className='home-navigation' href='/'>Rental</a>
                <a className='explore-navigation' href='/explore'>Explore</a>
                <a className='about-navigation' href='/about'>About Us</a>
            </div>}
            {isSmallScreen && <button onClick={()=>setNavVisibility(!isNavVisible)} className="navHeader">
                <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.42857 6.78572H38.5714C39.3604 6.78572 40 6.14616 40 5.35715V1.78572C40 0.996701 39.3604 0.357147 38.5714 0.357147H1.42857C0.639554 0.357147 0 0.996701 0 1.78572V5.35715C0 6.14616 0.639554 6.78572 1.42857 6.78572ZM1.42857 21.0714H38.5714C39.3604 21.0714 40 20.4319 40 19.6429V16.0714C40 15.2824 39.3604 14.6429 38.5714 14.6429H1.42857C0.639554 14.6429 0 15.2824 0 16.0714V19.6429C0 20.4319 0.639554 21.0714 1.42857 21.0714ZM1.42857 35.3571H38.5714C39.3604 35.3571 40 34.7176 40 33.9286V30.3571C40 29.5681 39.3604 28.9286 38.5714 28.9286H1.42857C0.639554 28.9286 0 29.5681 0 30.3571V33.9286C0 34.7176 0.639554 35.3571 1.42857 35.3571Z" fill="white"/>
                </svg>
            </button>}
            {isSmallScreen && isNavVisible &&<nav className="Nav">
                <a href="/">Rental</a>
                <a href={window.location.href.slice(0,window.location.href.lastIndexOf('/'))+'/expore'}>Explore</a>
                <a href={window.location.href.slice(0,window.location.href.lastIndexOf('/'))+'/about'}>About Us</a>
            </nav>}
        </div>}

        {currentScreen === 'explore' && <div className='mainScreenHeader'>
            {!isSmallScreen && <div className='navBars'>
                <a className='home-navigation' href='/'>Rental</a>
                <a className='explore-navigation' href='/explore'>Explore</a>
                <a className='about-navigation' href='/about'>About Us</a>
            </div>}
            {isSmallScreen && <button onClick={()=>setNavVisibility(!isNavVisible)} className="navHeader">
                <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.42857 6.78572H38.5714C39.3604 6.78572 40 6.14616 40 5.35715V1.78572C40 0.996701 39.3604 0.357147 38.5714 0.357147H1.42857C0.639554 0.357147 0 0.996701 0 1.78572V5.35715C0 6.14616 0.639554 6.78572 1.42857 6.78572ZM1.42857 21.0714H38.5714C39.3604 21.0714 40 20.4319 40 19.6429V16.0714C40 15.2824 39.3604 14.6429 38.5714 14.6429H1.42857C0.639554 14.6429 0 15.2824 0 16.0714V19.6429C0 20.4319 0.639554 21.0714 1.42857 21.0714ZM1.42857 35.3571H38.5714C39.3604 35.3571 40 34.7176 40 33.9286V30.3571C40 29.5681 39.3604 28.9286 38.5714 28.9286H1.42857C0.639554 28.9286 0 29.5681 0 30.3571V33.9286C0 34.7176 0.639554 35.3571 1.42857 35.3571Z" fill="white"/>
                </svg>
            </button>}
            {isSmallScreen && isNavVisible &&<nav className="Nav">
                <a href="/">Rental</a>
                <a href={window.location.href.slice(0,window.location.href.lastIndexOf('/'))+'/expore'}>Explore</a>
                <a href={window.location.href.slice(0,window.location.href.lastIndexOf('/'))+'/about'}>About Us</a>
            </nav>}
            <ExploreComponent />    
        </div>}

        {currentScreen === 'about' && <div className='mainScreenHeader'>
            {!isSmallScreen && <div className='navBars'>
                <a className='home-navigation' href='/'>Rental</a>
                <a className='explore-navigation' href='/explore'>Explore</a>
                <a className='about-navigation' href='/about'>About Us</a>
            </div>}
            {isSmallScreen && <button onClick={()=>setNavVisibility(!isNavVisible)} className="navHeader">
                <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.42857 6.78572H38.5714C39.3604 6.78572 40 6.14616 40 5.35715V1.78572C40 0.996701 39.3604 0.357147 38.5714 0.357147H1.42857C0.639554 0.357147 0 0.996701 0 1.78572V5.35715C0 6.14616 0.639554 6.78572 1.42857 6.78572ZM1.42857 21.0714H38.5714C39.3604 21.0714 40 20.4319 40 19.6429V16.0714C40 15.2824 39.3604 14.6429 38.5714 14.6429H1.42857C0.639554 14.6429 0 15.2824 0 16.0714V19.6429C0 20.4319 0.639554 21.0714 1.42857 21.0714ZM1.42857 35.3571H38.5714C39.3604 35.3571 40 34.7176 40 33.9286V30.3571C40 29.5681 39.3604 28.9286 38.5714 28.9286H1.42857C0.639554 28.9286 0 29.5681 0 30.3571V33.9286C0 34.7176 0.639554 35.3571 1.42857 35.3571Z" fill="white"/>
                </svg>
            </button>}
            {isSmallScreen && isNavVisible &&<nav className="Nav">
                <a href="/">Rental</a>
                <a href={window.location.href.slice(0,window.location.href.lastIndexOf('/'))+'/expore'}>Explore</a>
                <a href={window.location.href.slice(0,window.location.href.lastIndexOf('/'))+'/about'}>About Us</a>
            </nav>}
            <About />    
        </div>}
        
        
    </>
  )
}

export default MainComponent;
