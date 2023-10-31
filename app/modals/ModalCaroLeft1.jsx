import React, { useState } from 'react'
import Image from "next/image";

import "@/public/assets/css/modalsLeft/left1.css";


function ModalCaroLeft1() {
  const ImagePath = [
    '/UI/carousel/bl1/camp1.jpg',
    '/UI/carousel/bl1/camp2.jpg',
    '/UI/carousel/bl1/camp3.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ImagePath.length - 1 : prevIndex - 1))
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ImagePath.length - 1 ? 0 : prevIndex + 1))
  }
  return (
    <div className="ModalLeft1">
          <div>{`Camp # ${currentIndex +1}`}</div>
          <div className="CaroImg1">
              <Image 
              src={ImagePath[currentIndex]}
              className='ImageCaros1'
              width={300}
              height={200}
              alt={`Image ${currentIndex + 1}`}
              />
              <button className="btnPre1" onClick={prevImage}>&gt;</button>
              <button className="btnNex1" onClick={nextImage}>&lt;</button>
          </div>
          <div>1233</div>
        </div>
  )
}

export default ModalCaroLeft1