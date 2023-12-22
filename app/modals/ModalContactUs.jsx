'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import "@/public/assets/css/modalCaro.css"


const ModalContactUs = ({active, setActive}) => {

    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleSubmit = async (e) => {
      
        e.preventDefault();
        setErrorMessage("")
        setName('');
        setEmail('');
        setText('');
          const dataPay = {

                email: email,
                name: name,
                text: text,
        

          };
          
          const res = await fetch("/api/Users",{
            method: "POST",
            body: JSON.stringify({ dataPay }),
            "content-type" : "application/json"
          });

          if(!res.ok) {

            const response = await res.json();
            setErrorMessage(response.message);
          }else{
            router.refresh();
            router.push("/");
          }

      }

  
  return (
    <div className={active ? "modalCaro active" :"modalCaro" } onClick={e => e.stopPropagation()}>
          <button className="boxi" onClick={() => setActive(false)}>
            X
          </button>
          <form className='MoCo' onSubmit={handleSubmit} method='post'>
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
          <p className="text-red-500">{errorMessage}</p>
    </div>
  )
}

export default ModalContactUs;