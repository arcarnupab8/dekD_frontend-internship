import React, { useState } from 'react'
import style from '../css/create.module.css'
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [data, setData] = useState({
    name:'',
    madeby:'',
    uploadtime:''
  })
  const navigate = useNavigate();

  const handleBack = () =>{
    navigate('/');
  }

  const handleSubmit = () =>{
    const currentTimestamp = new Date().toISOString();
    setData(prevData => ({
      ...prevData,
      uploadtime: currentTimestamp
    }));

    alert(`Create Novel: ${data.name}, BY: ${data.madeby}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <div>
          <p>รายการใหม่</p>
        </div>
      </div>

      <div className={style.content}>

        <div className={style.inputForm}>
            <div className={style.input}>
              <input
                type='text'
                name='name'
                placeholder='Novel Name'
                value={data.name}
                onChange={handleChange}
              />
            </div>

            <div className={style.input}>
              <input
                type='text'
                name='madeby'
                placeholder='Made By'
                value={data.madeby}
                onChange={handleChange}
              />
            </div>
        </div>

        <div className={style.mode}>
          <div onClick={() => handleSubmit()}>สร้าง</div>
          <div onClick={() => handleBack()}>ย้อนกลับ</div>
        </div>
      </div>

    </div>
  )
}
