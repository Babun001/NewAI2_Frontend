import React from 'react';
import Carousel from '../PopularStocksElements/carousel';


export default function PopularStocks() {
  // const carouselData = [
  //   {
  //     icon: null,
  //     name: "adaro ace adaro energy indone",
  //     rp: 2400,
  //     profitLoss: -123
  //   },
  //   {
  //     icon: null,
  //     name: "aces ace hardware indone policy",
  //     rp: 810,
  //     profitLoss: +125
  //   },
  //   {
  //     icon: null,
  //     name: "arto goto bank jago tbkcoc abcedef ",
  //     rp: 310,
  //     profitLoss: +429
  //   },
  //   {
  //     icon: null,
  //     name: "arto goto bank jago tbkcoc abcedef ",
  //     rp: 310,
  //     profitLoss: +429
  //   },

  // ]

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="section">
        <div className="d-flex justify-content-center" style={{
          marginTop:"8rem"
        }}>
          <h1 style={{
            fontSize:"10vh",
            color:"#5858b7"
          }}>Popular <span style={{
            color:"#04047b"
          }}>stocks</span></h1>
        </div>
        <div className="m-5" style={{
          margin:"25px",
          padding:"100px",
        }}>
        < Carousel/>
        </div>
        
      </div>
    </>
  );
}
