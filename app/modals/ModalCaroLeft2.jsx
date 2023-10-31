import React, { useState } from 'react'
import Image from "next/image";

import "@/public/assets/css/modalsLeft/left2.css";


function ModalCaroLeft2() {
  const ImagePath = [
    '/UI/carousel/bl2/boat1.jpg',
    '/UI/carousel/bl2/boat2.jpg',
    '/UI/carousel/bl2/boat3.jpg',
    '/UI/carousel/bl2/boat4.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ImagePath.length - 1 : prevIndex - 1))
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ImagePath.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="ModalLeft2">
          <div>{`Boat # ${currentIndex +1}`}</div>
          <div className="CaroImg2">
              <Image 
              src={ImagePath[currentIndex]}
              className='ImageCaros2'
              width={300}
              height={200}
              alt={`Image ${currentIndex + 1}`}
              />
              <button className="btnPre2" onClick={prevImage}>&gt;</button>
              <button className="btnNex2" onClick={nextImage}>&lt;</button>
          </div>
          <div>1233</div>
        </div>
  )
}

export default ModalCaroLeft2