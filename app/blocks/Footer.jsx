import React, {useState} from 'react'
import ModalContactUs from '@/app/modals/ModalContactUs';

import "@/public/assets/css/footer.css"
import ModalCaro from '@/app/modals/ModalCaro';
import Cookies from '@/app/modals/Cookies';
import Link from 'next/link';
import Terms from '../modals/Terms';

const Footer = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalActive2, setModalActive2] = useState(false);
    const [modalChildActive, setModalChildActive] = useState(false);
  return (
    <div className="footer">
      <div className="footer_logo">
        logo
      </div>
      <a className="footer_content_a" onClick={() => setModalActive2(true)}>terms of use</a>
      <a className="footer_content_a" onClick={() => setModalActive(true)}>Cookies</a>
      <Link className="footer_content_a" href="/broken404">Broken</Link>
      <a className="footer_content_a" onClick={() => setModalChildActive(true)}>Contact us</a> 
      <ModalContactUs active={modalChildActive} setActive={setModalChildActive}/>
    
    
      <ModalCaro active={modalActive2} setActive={setModalActive2}>
        <Terms/>
      </ModalCaro>
      <ModalCaro active={modalActive} setActive={setModalActive}>
        <Cookies/>
      </ModalCaro>
    </div>
  )
}

export default Footer;