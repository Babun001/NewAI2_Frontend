import React from 'react';
import bg1 from '../../LogoAndImgs/Trading.png';
import bg2 from '../../LogoAndImgs/croped.png';
import img1 from '../../LogoAndImgs/g.png';

export default function AboutUsSec() {
  return (
    <div
      className="Section"
      style={{
        backgroundColor: 'rgb(6, 6, 92)',
        position: 'relative',
        padding: '50px 0',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <img
        src={bg1}
        alt="Decorative"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxHeight: '90vh',
          objectFit: 'cover',
          opacity: 0.2,
          zIndex: 0,
        }}
      />

      <div
        className="contents"
        style={{
          color: '#fff',
          zIndex: 1,
          textAlign: 'left',
          padding: '0 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          width: '100%',
          marginLeft:"5rem"
        }}
      >
        <div
          className="imagess"
          style={{
            position: 'relative',
            width: '500px',
            height: 'auto',
            flexShrink: 0,
          }}
        >
          <img
            src={bg2}
            alt="Background"
            style={{
              position: 'absolute',
              top: '-15rem',
              left: '0',
              // width: '100%',
              height: '69rem',
              objectFit: 'cover',
              zIndex: 0,
            }}
          />
          <img
            src={img1}
            alt="Foreground"
            style={{
              position: 'relative',
              height:"30rem",
              top:"6rem",
              left:"310px",
              borderRadius: '15px',
              zIndex: 1,
              marginTop: '7rem',
              
            }}
          />
        </div>

        <div
          className="text"
          style={{
            flex: 1,
            maxWidth: '600px',
            // backgroundColor:"red",
            marginBottom:"5rem",
            marginRight:"3rem"
          }}
        >
          <h1 className='mb-5 ms-3'>About Us</h1>
          <h2 className='mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam. 
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloremque
            provident suscipit ratione quibusdam repudiandae deserunt consectetur vel
            architecto tenetur quia ad, debitis iusto dolorem, voluptatibus hic minima.
            Nesciunt ea ab ut harum qui esse architecto numquam voluptatibus impedit
            molestias officia, sapiente reiciendis tempore mollitia fuga nostrum quidem!
            Repudiandae, minus.
          </p>
        </div>
      </div>
    </div>
  );
}
