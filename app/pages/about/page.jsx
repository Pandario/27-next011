"use client"
import React from 'react'
import Image from 'next/image';

import Link from 'next/link';
import Navigation from '@/app/blocks/Navigation';
import Footer from '@/app/blocks/Footer';

import "@/public/assets/css/about/about.css";
import { TextAbout } from '@/app/blocks/text/TextAbout';

export default function about()  {
  return (
    <div>
      <Navigation/>
      <div className='about'>
        <Image 
          className='ab-left'
          src={'/assets/photoMain/011about.jpg'}
          width={500}
          height={500}
          alt={'about'}
          priority={true}
        />
        <div className='ab-right'>
        <TextAbout/>
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}