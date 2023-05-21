import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../Images/carousel_1.jpg";
import slide2 from "../Images/carousel_2.jpg";
import slide3 from "../Images/carousel_3.jpg";

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item >
        <img className="d-block w-100" src={slide1} alt="First slide" style={{ height: "700px" }}/>
        <Carousel.Caption className="text-white bg-dark border">
          <h3>Double your job search options</h3>
          <p>Find wide variety of opportunities around you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" style={{ height: "700px" }} />

        <Carousel.Caption className="text-white bg-dark border">
          <h3>Search remote or on-site jobs</h3>
          <p>
            Find job opportunities at your comfort zone either at home or office
            or hybrid model
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" style={{ height: "700px" }}/>

        <Carousel.Caption className="text-white bg-dark border">
          <h3>Find New Opportunities Faster</h3>
          <p>TopJobs provide you offers at faster phase compare to others</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
