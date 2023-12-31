import React from 'react'
import Image from 'next/image'

import "@/public/assets/css/footer.css"

function Cookies () {
    
  return (
    <div className='cookies'>
      <div className="cookiesText">Our fake cookies!</div>  
      
      <Image 
          src={'/assets/cookies/cookies.jpg'}
          width={400}
          height={400}
          alt={'cookies'}
          priority={true}
          style={{borderRadius: "5px"}}
        />

      </div>

  )
}

export default Cookies