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
        /*alert('Contact details added successfully.');
        return {
          statusCode: 200,
          body: JSON.stringify(dataPay),
      }*/
        
      }catch (error) {
        alert(error.message);
      }
        /*await axios.post(`https://us8.api.mailchimp.com/3.0/lists/$4a0b434a84`, {
          headers: {
              Authorization: `7cbc01e7f9339d42f8eda55e7e0aead5-us8`,
          }
      });*/
      /*const url = 'https://us8.api.mailchimp.com/3.0/lists/4a0b434a84';
      const variables = {
        method: "POST",
        auth:"andrew:7cbc01e7f9339d42f8eda55e7e0aead5-us8"

      }*/
        let jsonData = JSON.stringify(dataPay);
        console.log(jsonData)
       /* const request = https.request(url, variables, function(response) {
          response.on("data", function(data) {
          })
        })
        request.write(jsonData);
        request.end();*/

      /*} catch (error) {
        console.error('Error');

      }*/
  }


  //if(!open) return null;


  
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

/*
{active, setActive, children}
    <div className={active ? "modalCaro active" :"modalCaro" } onClick={() => setActive(false)}>
    <div className={active ? "modal__content active" :"modal__content" } onClick={e => e.stopPropagation()}>
    {children}
    </div>
</div>
 */
export default ModalContactUs;