import React from 'react'
import './main.css';
import mainBackground from '../../assets/main-background.png';
import TextInputFilter from '../common-components/TextInputFilter/TextInputFilter';

function MainComponent() {
  return (
    <div className='mainScreen'>
        <div className='mainScreenHeading'>
            Rethink your living & renting
        </div>
        <div className='mainScreenSubHeading'>
            Make your stay painless with us
        </div>
        <div className='mainScreenSearchFilters'>
            <TextInputFilter label="City" placeholder="Select your city"/>
        </div>
    </div>
  )
}

export default MainComponent
