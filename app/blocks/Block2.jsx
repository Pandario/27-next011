import React, { useState } from 'react'
import Image from "next/image";

import "@/public/assets/css/block2.css"

import ModalCaro from "@/app/modals/ModalCaro";
import ModalCaroLeft2 from "@/app/modals/ModalCaroLeft2";
import ModalContactUsOpt from '@/app/modals/ModalContactUsOpt2';

import { Text2 } from './text/Text2';


function Block2() {

  const [modalActive, setModalActive] = useState(false);

  const [modalChildActive, setModalChildActive] = useState(false);

  
  return (
    <div>
      <div className="block2">
      <Image 
          src={'/assets/photoMain/011fishing.jpg'}
          width={400}
          height={400}
          alt={'fishing'}
          style={{borderRadius: "5px"}}
        />

        <div className="text2">

          <button 
            className='btn-bl2'
            onClick={() => setModalActive(true)}>
            Try
          </button>

          <div className='bl1tx2'>
            <Text2/>
          </div>
        </div>

      </div>
      <ModalCaro active={modalActive} setActive={setModalActive}>
        <ModalCaroLeft2 />
        <div className="ModalRight">
          2
          <div>txdcfhgvfghcgvb</div>
          <button 
              className='btn-bl2' 
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

export default Block2