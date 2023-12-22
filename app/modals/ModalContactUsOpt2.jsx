import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

import "@/public/assets/css/modalCaro.css"




function ModalContactUsOpt({active, setActive}) {

    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [checkbox, setCheckbox] = useState('')
    const [errorMessage, setErrorMessage] = useState("");

    const handleRadioChange = (value) => {
      setCheckbox(value);
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setErrorMessage("")
      setName('')
      setEmail('')
      setCheckbox('')
      setText('')


      const dataPayOpt = {

        email: email,
        name: name,
        checkbox: checkbox,
        text: text,

      };
      const res = await fetch(`https://27-next011-itr5t6eu7-pandario.vercel.app/api/UsersOpt`,{
        method: "POST",
        body: JSON.stringify({ dataPayOpt }),
        "content-type" : "application/json"
      });

      if(!res.ok) {

        const response = await res.json();
        setErrorMessage(response.message);
      }else{
        router.refresh();
        router.push("/");
      }
      console.log(dataPayOpt)
    }

  return (
    <div className={active ? "modalCaro active" :"modalCaro" } onClick={e => e.stopPropagation()}>
          <button className="boxi" onClick={() => setActive(false)}>
            X
          </button>
          <form className='MoCo' onSubmit={handleSubmit} id='form1' method='post'>
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
                    <input
                          type="radio"
                          className='map-input-input'
                          name="checkbox"
                          value="Boat1"
                          checked={checkbox === 'Boat1'}
                          onChange={() => handleRadioChange('Boat1')}
                      />
                      Boat #1
                    <input
                        type="radio"
                        className='map-input-input'
                        name="checkbox"
                        value="Boat2"
                        checked={checkbox === 'Boat2'}
                        onChange={() => handleRadioChange('Boat2')}
                    />
                    Boat #2
                    <input
                        type="radio"
                        className='map-input-input'
                        name="checkbox"
                        value="Boat3"
                        checked={checkbox === 'Boat3'}
                        onChange={() => handleRadioChange('Boat3')}
                    />
                    Boat #3

                    <input
                        type="radio"
                        className='map-input-input'
                        name="checkbox"
                        value="Boat4"
                        checked={checkbox === 'Boat4'}
                        onChange={() => handleRadioChange('Boat4')}
                    />
                    Boat #4
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
          <p className="text-red-500">{errorMessage}</p>
    </div>
  );
}

export default ModalContactUsOpt;

/*            <label className='map-input'>
              {listOptions.map((option) => (
                <label key = {option.value}>
                  <input
                    className='map-input-input'
                    type='radio'
                    value={`${listOptions.value}`}
                    checked = {
                      checkbox === `${opti1}` || 
                      checkbox === `${opti2}` || 
                      checkbox === `${opti3}`}
                    onChange = {() => handleOptionsChange(`${opti1}` || `${opti2}` || `${opti3}`)}
                    name={checkbox}
                  /> {option.lable}
                </label>
              ))}
              
            </label>*/ 