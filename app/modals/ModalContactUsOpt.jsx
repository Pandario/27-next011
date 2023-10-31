import React, { useState } from 'react'

import "@/public/assets/css/modalCaro.css"




function ModalContactUsOpt({active, setActive, listOptions = [], opti1, opti2, opti3, handleOptionsChange}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    let optical1 = opti1;
    let optical2 = opti2;
    let optical3 = opti3;

    const handleSubmit = (e) => {
      e.preventDefault();
      
      setName('')
      setEmail('')
      setText('')

      const data = {
        members: [
          {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
              FNAME: name,
              LNAME: text,
              INFO1: optical1,
              INFO2: optical2,
              INFO3: optical3,
            }
    
          }
        ]
      };
      let jsonData = JSON.stringify(data);
      console.log(jsonData)
    }

  return (
    <div className={active ? "modalCaro active" :"modalCaro" } onClick={e => e.stopPropagation()}>
          <button className="boxi" onClick={() => setActive(false)}>
            X
          </button>
          <form className='MoCo' onSubmit={handleSubmit} id='form1'>
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


            <label className='map-input'>
              {listOptions.map((option) => (
                <label key = {option.value}>
                  <input
                    className='map-input-input'
                    type='radio'
                    value={option.value}
                    checked = {opti1 === option.value || opti2 === option.value || opti3 === option.value}
                    onChange = {() => handleOptionsChange(option.value)}
                    name={option.value}
                  /> {option.lable}
                </label>
              ))}
              
            </label>

            <textarea
                className='MoCoTe'
                placeholder='Enter text'
                name='message'
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={6}

            />
          
            <div className='btn-bottom'>
              <button className='btn-bottom-left' type='button' onClick={() => setActive(false)}>Cancel</button>
              <button className='btn-bottom-right' onClick={() => setActive(false)}>Submit</button>
            </div>
          </form>
    </div>
  );
}

export default ModalContactUsOpt;