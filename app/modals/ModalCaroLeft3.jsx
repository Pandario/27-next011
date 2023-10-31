import React, { useState } from 'react'
import Image from "next/image";

import "@/public/assets/css/modalsLeft/left3.css";


function ModalCaroLeft3() {
  const ImagePath = [
    '/UI/carousel/bl3/fore1.jpg',
    '/UI/carousel/bl3/fore2.jpg',
    '/UI/carousel/bl3/fore3.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ImagePath.length - 1 : prevIndex - 1))
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ImagePath.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="ModalLeft3">
          <div>{`Forest # ${currentIndex +1}`}</div>
          <div className="CaroImg3">
              <Image 
              src={ImagePath[currentIndex]}
              className='ImageCaros3'
              width={300}
              height={200}
              alt={`Image ${currentIndex + 1}`}
              />
              <button className="btnPre3" onClick={prevImage}>&gt;</button>
              <button className="btnNex3" onClick={nextImage}>&lt;</button>
          </div>
          <div>1233</div>
        </div>
  )
}

export default ModalCaroLeft3