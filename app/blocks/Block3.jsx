import React, { useState } from 'react'
import Image from 'next/image';

import "@/public/assets/css/block3.css"

import ModalCaro from "@/app/modals/ModalCaro";
import ModalCaroLeft3 from "@/app/modals/ModalCaroLeft3";
import ModalContactUsOpt from '@/app/modals/ModalContactUsOpt3';

import { Text3 } from './text/Text3';


function Block3() {
  
  const [modalActive, setModalActive] = useState(false);

  const [modalChildActive, setModalChildActive] = useState(false);


  return (
    <div>
      <div className="block3">

        <div className='block-textarea3'>
          <div className="text3">
            <div className='bl1tx3'>
              <Text3/>
            </div>
            <button
              className='btn-bl3' 
              onClick={() => setModalActive(true)}>
              Reserve
            </button>

          </div>
        </div>
        <Image 
          src={'/assets/photoMain/011restaurant.jpg'}
          width={400}
          height={400}
          alt={'restaurant'}
          style={{borderRadius: "5px"}}
        />
      </div>

      <ModalCaro active={modalActive} setActive={setModalActive}>
        <ModalCaroLeft3 />
        <div className="ModalRight3">
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

export default Block3