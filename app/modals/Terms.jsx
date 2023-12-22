import React from 'react'
import Image from 'next/image'

import "@/public/assets/css/footer.css"

function Terms () {
    
  return (
    <div className='cookies'>
      <div className="cookiesText">No terms! Fake website!</div>  
      
      <Image 
          src={'/assets/terms/fake.jpg'}
          width={400}
          height={400}
          alt={'terms'}
          priority={true}
          style={{borderRadius: "5px"}}
        />

      </div>

  )
}

export default Terms;