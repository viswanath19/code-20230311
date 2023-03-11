import React from 'react'
import './main.css';
import mainBackground from '../../assets/main-background.png';
import TextInputFilter from '../common-components/TextInputFilter/TextInputFilter';
import ButtonComponent from '../common-components/ButtonComponent/ButtonComponent';

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
            <TextInputFilter label="Dates" placeholder="Select your dates"/>
            <TextInputFilter label="Guests" placeholder="Add guests"/>
            <ButtonComponent />
        </div>
    </div>
  )
}

export default MainComponent
