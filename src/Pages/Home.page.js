import React from 'react';
import Navbar from '../Components/Navbar';

import FrontSec from '../PageElements/HomePageElements/frontSec';
import PopularStocks from '../PageElements/HomePageElements/popularStocks';
import AboutUsSec from '../PageElements/HomePageElements/aboutUsSec';
// import BenefitsSec from '../PageElements/HomePageElements/benefitsSec';
// import TopPricingSec from '../PageElements/HomePageElements/topPricingSec';
// import HowItWorkSec from '../PageElements/HomePageElements/howItWorkSec';
// import ConnectWithSec from '../PageElements/HomePageElements/connectWithSec';
// import FaqSec from '../PageElements/HomePageElements/faqSec';
// import HomeFooter from '../PageElements/HomePageElements/footer';

export default function HomePage() {
  return (
    <div>
      <Navbar/>

      <FrontSec/>
      <PopularStocks/>
      <AboutUsSec/>
      {/* <BenefitsSec/>
      <TopPricingSec/>
      <HowItWorkSec/>
      <PopularStocks/>
      <ConnectWithSec/>
      <FaqSec/>
      <HomeFooter/> */}
    </div>
  );
}
