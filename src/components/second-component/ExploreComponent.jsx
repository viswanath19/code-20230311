import React from 'react';
import Card from '../common-components/CardViews/Card';
import './explore.css';
import exploreBackgroundImg1 from '../../assets/explore-1.png';
import exploreBackgroundImg2 from '../../assets/explore-2.png';
import ButtonComponent from '../common-components/ButtonComponent/ButtonComponent';

function ExploreComponent() {
  return (
    <div className='exploreComponent'>
      <span className='exploreTitle'>Explore</span>
        <span className='subHeading-1'>From one-guest rooms to penthouses with pools and gardens </span>
        <div className='exploreCards'>
            <Card cards={[
                {backgroundImg:exploreBackgroundImg1,header:'Room with one king-size bed',subHeader:<div>
                  <ButtonComponent width={80} height={30} text={'35$'}/>
                  <ButtonComponent width={80} height={30} text={'28м²'}/>
                  <ButtonComponent width={80} height={50} text={'Book!'}/>
                </div>},
                {backgroundImg:exploreBackgroundImg2,header:'Penthouse for 8 person',subHeader:<div>
                  <ButtonComponent width={80} height={30} text={'2039$'}/>
                  <ButtonComponent width={80} height={30} text={'438м²'}/>
                  <ButtonComponent width={80} height={50} text={'Book!'}/>
                </div>}
            ]} />
        </div>
    </div>
  )
}

export default ExploreComponent
