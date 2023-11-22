import React from 'react'


import "@/public/assets/css/page404/page404.css"
import Link from 'next/link';

function NavigationBro() {
  return (
    <nav className="navig">
        <div className="navLogo">
          logo
        </div>
        <Link href="/" className='nav_a'>Main</Link>
        <Link href="https://www.cvfishing.nl" target='blank' className='nav_a'>Fishing equipment</Link>
        <Link href="/pages/about" className='nav_a'>About us</Link>
    </nav>
  )
}

export default NavigationBro