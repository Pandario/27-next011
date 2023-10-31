import React, { useState } from 'react'
import Image from 'next/image';

import "@/public/assets/css/block3.css"

import ModalCaro from "@/app/modals/ModalCaro";
import ModalCaroLeft3 from "@/app/modals/ModalCaroLeft3";
import ModalContactUsOpt from '@/app/modals/ModalContactUsOpt';

import { Text3 } from './text/Text3';


function Block3() {
  
  const [modalActive, setModalActive] = useState(false);

  const [modalChildActive, setModalChildActive] = useState(false);

  const [opti3, setOpti3] = useState('Vu2');

  const listOptions = [
    {lable: 'Vbm 1', value: 'Vu1'},
    {lable: 'Vbm 2', value: 'Vu2'},
    {lable: 'Vbm 3', value: 'Vu3'},
  ]

  const handleOptionsChange = (newValue) => {
    setOpti3(newValue);
  };

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
              Try
            </button>

          </div>
        </div>
        <Image 
          src={'/assets/photoMain/011forest.jpg'}
          width={400}
          height={400}
          alt={'fishing'}
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
            listOptions={listOptions}
            opti3={opti3}
            handleOptionsChange = {handleOptionsChange}
          />}
        </div>
      </ModalCaro>
    </div>
  )
}

export default Block3