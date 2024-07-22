import React, { useEffect, useState } from 'react'
import style from '../css/banner.module.css';

const imagesrc = ['Banner1.png',  'Banner2.png', 'Banner3.png', 'Banner4.png', 'Banner5.png', 'Banner6.png']

export default function Banner() {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const showPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imagesrc.length - 3 : prevIndex - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imagesrc.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handleBannerClick = (index) => {
    setCurrentIndex(index);
  };
 
  const visibleImages = imagesrc.slice(currentIndex, currentIndex + 3);

  return (
    <div className={style.banner}>
      <button className={style.prev} onClick={showPrev}>{'<'}</button>
      <div className={style.imageContainer}>
        {visibleImages.map((img, index) => (
          <img key={index} alt={`Banner${index}`} src={`./Banner/${img}`} />
        ))}
      </div>
      <div className={style.navbanner}>
        {imagesrc.map((item, index) => (
          <div key={index} 
            className={`${style.bannerSelector} ${currentIndex === index ? style.active : ''}`}
            onClick={() => handleBannerClick(index)}
          >
          </div>
        ))}
      </div>
      <button className={style.next} onClick={showNext}>{'>'}</button>
    </div>
  )
}
