'use client'
import React, { useState } from 'react'
import axios from 'axios';



import "@/public/assets/css/modalCaro.css"


const ModalContactUs = ({active, setActive}) => {

    /*const request = require('request');*/

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    
     const handleSubmit = async (e) => {
      
      e.preventDefault();
      
      setName('')
      setEmail('')
      setText('')
      
      
        const dataPay = {
          members: [
            {
              email_address: email,
              status: 'subscribed',
              merge_fields: {
                FNAME: name,
                LNAME: text,
              }
      
            }
          ]
        };
        try {
          const { data }= await axios ({
            url:'',
            method: 'POST',
            data: dataPay

        });
        console.log(data)
        
      }catch (error) {
        alert(error.message);
      }

        let jsonData = JSON.stringify(dataPay);
        console.log(jsonData)
  }

  
  return (
    <div className={active ? "modalCaro active" :"modalCaro" } onClick={e => e.stopPropagation()}>
          <button className="boxi" onClick={() => setActive(false)}>
            X
          </button>
          <form className='MoCo' onSubmit={handleSubmit}>
            <input
                className='MoCoNa'
                name='name'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className='MoCoEm'
                name='email'
                placeholder='Enter your email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                className='MoCoTe'
                name='message'
                placeholder='Enter text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={6}

            />
          
            <div className='btn-bottom'>
              <button className='btn-bottom-left' type='button' onClick={() => setActive(false)}>Cancel</button>
              <button className='btn-bottom-right' onClick={() => setActive(false) && state(false)}>Submit</button>
            </div>
          </form>
    </div>
  )
}

export default ModalContactUs;