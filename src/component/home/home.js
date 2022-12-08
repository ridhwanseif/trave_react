import React from 'react';
import './index.css';
import HomeHeader from './HomeHeader/homeHeader';
import HomeDestination from './HomeDestination/homeDestination';
import HomeGallary from './HomeGallary/homeGallry';
import Corousel from './carousel/carousel';


function Home() {
  return (
   <div>
      <Corousel/>
      <div className="card card-body shadow-xl mx-2 mx-md-5 mt-n0">
        <HomeDestination />
        <HomeGallary />
      </div>
   </div>
  );
}

export default Home;