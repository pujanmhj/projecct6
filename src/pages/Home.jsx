import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Wrapper from "../common/Wrapper";
// import img1 from '../assets/pic1.png'
import img2 from '../assets/picc2.jpeg'
import img3 from '../assets/pic2.jpg'

export default function Home() {
  return (
    <Wrapper>
      <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <div>
        <Carousel style={{ width: '100%', height:'50vh' }} >
          <Carousel.Item  >
            <img
              className="d-block w-100"
              src={img2}
              style={{ objectFit: "cover",
                width:"100%!important",
                height:" 100% !important",}}
            />
          </Carousel.Item>
          <Carousel.Item  >
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
              style={{ width: '100%', height:'100%' }}
            />
          </Carousel.Item>
        </Carousel>  
        </div>
        <div >
          <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lalitpur%2044700+(RFR%20SYSTEM)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/population/">Population Estimator map</a></iframe>
        </div>
      </div>
    </Wrapper>

  );
}
