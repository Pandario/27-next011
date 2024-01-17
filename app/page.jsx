"use client"

import Block1 from "@/app/blocks/Block1"
import Block2 from "@/app/blocks/Block2"
import Block3 from "@/app/blocks/Block3"
import Footer from "@/app/blocks/Footer"
import Navigation from "@/app/blocks/Navigation"

import "@/public/assets/css/globals.css"
import { Top } from "./blocks/Top"


/*import { useState } from "react";
import ModalCaro from "./ModalCaro"
import ModalCaroLeft from "./ModalCaroLeft";*/

export default function Home() {
  /*const [modalActive, setModalActive] = useState(false);
  const Carousel = () => {
    const ImagePath = [
      '/UI/carousel/img1.jpg',
      '/UI/carousel/img2.jpg',
      '/UI/carousel/img3.jpg'
  ];
}*/
  return (
    <main className="main">
    <Navigation/>
      <div className="main_div">
        <Block1/>
        <Block2/>
        <Block3/>
      </div>
      <Footer/>
      <Top/>
    </main>
    
  )
}
