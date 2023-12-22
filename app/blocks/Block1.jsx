import React, { useState } from 'react'
import Image from "next/image";

import "@/public/assets/css/block1.css"

import ModalCaro from "@/app/modals/ModalCaro";
import ModalCaroLeft1 from "@/app/modals/ModalCaroLeft1";
import ModalContactUsOpt from '@/app/modals/ModalContactUsOpt1';

import { Text1 } from './text/Text1';


function Block1() {
  
    const [modalActive, setModalActive] = useState(false);

    const [modalChildActive, setModalChildActive] = useState(false);

  return (
    <div>
      <div className="block1">

        <div className='block-textarea1'>
          <div className="text1">
            <div className='bl1tx1'>
              <Text1/>
            </div>
            <button 
              className='btn-bl1' 
              onClick={() => setModalActive(true)}>
              Rent
            </button>
          </div>
        </div>
        
        <Image 
          src={'/assets/photoMain/011camping.jpg'}
          width={400}
          height={400}
          alt={'camping'}
          priority={true}
          style={{borderRadius: "5px"}}
        />

      </div>
      
      <ModalCaro active={modalActive} setActive={setModalActive}>
        <ModalCaroLeft1 />
        <div className="ModalRight1">
          2
          <div>txdcfhgvfghcgvb</div>
          <button 
              className='btn-bl1' 
              onClick={() => setModalChildActive(true)}>
              Rent
            </button>
            {modalActive && <ModalContactUsOpt 
              active={modalChildActive}
              setActive={setModalChildActive}
              
              />}
        </div>
      </ModalCaro>
    </div>
  )
}

export default Block1