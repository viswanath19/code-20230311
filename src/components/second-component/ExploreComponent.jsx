import React from 'react';
import Card from '../common-components/CardViews/Card';
import './explore.css';
import exploreBackgroundImg1 from '../../assets/explore-1.png';
import exploreBackgroundImg2 from '../../assets/explore-2.png';

function ExploreComponent() {
  return (
    <div className='exploreComponent'>
      <span className='exploreTitle'>Explore</span>
        <span className='subHeading-1'>From one-guest rooms to penthouses with pools and gardens </span>
        <div className='exploreCards'>
            <Card cards={[
                {backgroundImg:exploreBackgroundImg1,header:'Room with one king-size bed'},
                {backgroundImg:exploreBackgroundImg2,header:'Penthouse for 8 person'}
            ]} />
        </div>
    </div>
  )
}

export default ExploreComponent
