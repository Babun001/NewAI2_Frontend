import React from 'react';
import Carousel from '../PopularStocksElements/carousel';


export default function PopularStocks() {
  

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
