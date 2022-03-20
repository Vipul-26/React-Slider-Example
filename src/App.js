import React, { useEffect } from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import { ReactComponent as CaretIcon } from './caret.svg';

function App() {

  useEffect(() => {
    const el = document.querySelector('.carousel-slider');
    const elem = document.querySelector('.thumbs-wrapper');
    if (el?.classList?.contains("carousel-slider")) {
      el?.classList?.remove("carousel-slider");
    }
    if (elem && elem.style) {
      elem.style.display = "none";
    }
  }, []);

  const carouselProp = {
    showStatus: false,
    useKeyboardArrows: true,
    infiniteLoop: true,
    autoPlay: true,
    stopOnHover: true,
    emulateTouch: true,
    transitionTime: 500,
    showArrows: true,
    showThumbs: false,
    renderArrowPrev: (clickHandler) => (
      <button className="arrowLeft" onClick={clickHandler}>
        <CaretIcon width="22" height="22" />
      </button>
    ),
    renderArrowNext: (clickHandler) => (
      <button className="arrowRight" onClick={clickHandler}>
        <CaretIcon width="22" height="22" />
      </button>
    ),
  };

  const slides = [
    {
      city: 'Paris',
      country: 'France',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
    },
    {
      city: 'Singapore',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
    },
    {
      city: 'Prague',
      country: 'Czech Republic',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
    },
  ];

  return (
    <div>
      <Carousel {...carouselProp} className="carousal">
        {slides.map(data => (
          <div>
            <img src={data.img} alt={data.city} className='img' />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default App;
