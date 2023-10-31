import React from 'react'
import "@/public/assets/css/modalCaro.css"

const ModalCaro = ({active, setActive, children,}) => {
  return (
    <div>
      <div className={active ? "modalCaro active" :"modalCaro" } onClick={e => e.stopPropagation()}>
            <button className="boxi" onClick={() => setActive(false)}>
              X
            </button>
            <div className="ModalChildren">
              {children}
            </div>
          
        </div>
      </div>
  )
}
/*
{active, setActive, children}
    <div className={active ? "modalCaro active" :"modalCaro" } onClick={() => setActive(false)}>
    <div className={active ? "modal__content active" :"modal__content" } onClick={e => e.stopPropagation()}>
    {children}
    </div>
</div>
 */
export default ModalCaro;