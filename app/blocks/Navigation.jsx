import React, { useState } from 'react'
import ModalContactUs from '@/app/modals/ModalContactUs';


import "@/public/assets/css/nav.css"
import Link from 'next/link';

function Navigation() {
  const [modalChildActive, setModalChildActive] = useState(false);
  return (
    <nav className="navig">
        <div className="navLogo">
          logo
        </div>
        <Link href="/" className='nav_a'>Main</Link>
        <Link href="https://www.cvfishing.nl" target='blank' className='nav_a'>Fishing equipment</Link>
        <Link href="/pages/about" className='nav_a'>About us</Link>
        <a className='nav_a' onClick={() => setModalChildActive(true)}>Contact</a>
        <ModalContactUs active={modalChildActive} setActive={setModalChildActive} />
    </nav>
  )
}

export default Navigation