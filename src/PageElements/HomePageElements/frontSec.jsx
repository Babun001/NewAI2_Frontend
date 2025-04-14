import React from 'react';
import * as Icons from 'react-bootstrap-icons';

export default function FrontSec() {
  return (
    <>
      <div className="Section" style={{
        backgroundColor: "rgb(6 6 92)",
        position: "relative",
        padding: "50px 0",
        height: "100vh",
        alignItems: "center",
        display: "flex",
        zIndex:"-1"
      }}>
        <div className="container">
          <div className="textSec" style={{
            color: "white", 
            textAlign: "center", 
            // maxWidth: "800px", 
            margin: "0 auto",
          }}>
            <h1 style={{
              fontSize: "5rem", 
              fontWeight: "bold", 
              marginBottom: "4rem",
            }}>
              Easily invest in stocks and crypto In one GoStock Platform.
            </h1>
            <div className="paratext">
              <p style={{
                width: "75%", 
                margin: "0 auto", 
                fontSize: "1rem", 
                lineHeight: "1.5",
                textAlign: "center", 
                marginBottom: "3rem",
              }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi est iure eaque ratione, distinctio odio aperiam, sapiente unde, asperiores odit dignissimos ipsam nihil laudantium at.
              </p>
            </div>
            <div className="buttons" style={{
              display: "flex", 
              justifyContent: "center", 
              gap: "20px",
            }}>
              <button type="button" className="btn btn-outline-light" style={{
                width: "12rem",
                height: "2.7rem",
                border:"2px solid white",
                borderRadius: "20px",
                fontSize: "1rem",
              }}>
                How it works
              </button>
              <button type="button" className="btn btn-secondary bg-white text-dark" style={{
                width: "12rem",
                height: "2.7rem",
                borderRadius: "20px",
                fontSize: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
                Get App now <span className='ms-1'></span><Icons.Download style={{
                  fontSize: "1.2rem",
                  fontWeight:"400",
                  marginLeft: "8px",
                }}/>
              </button>
            </div>
          </div>
        </div>

        {/* Spokes
        <div className="spokes" style={{
          position: "absolute", // Center the spokes
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          {Array.from({ length: 24 }).map((_, index) => ( // Creating 24 spokes
            <div
              key={index}
              style={{
                position: "absolute",
                width: "1px", // Spoke thickness
                height: "50%", // Spoke length
                top: "0%",
                left: "50%",
                backgroundColor: "white",
                transform: `rotate(${(360 / 24) * index}deg)`, // Rotate to position each spoke
              }}
            />
          ))}
        </div> */}
      </div>
    </>
  );
}
