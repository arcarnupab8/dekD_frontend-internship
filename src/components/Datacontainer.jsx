import React from 'react'
import style from '../css/datacontainer.module.css';

function formatUploadTime(date) {
    const months = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString().substring(2);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${day} ${month} ${year} / ${hours}.${minutes} น.`;
  }

export default function Datacontainer({name, chaptern, chaptername, uploadtime, madeby, img}) {
  return (
    <div className={style.container}>
        <img alt='Novel Profile' src={`./${img}`}/>
        <div className={style.info}>
            <p className={style.head}>{name}</p>
            <p className={style.head}>{'<'} &nbsp;&nbsp;&nbsp; {'>'}...</p>
            <p>{madeby}</p>
            <p className={style.chapter}>
              <img src='./List.png' alt='Chapter'/>
              ตอนที่ {chaptern}: {chaptername}
            </p>
            <p className={style.chapter}>
              <img src='./Vector.png' alt='Upload' />
              คั่นล่าสุด {formatUploadTime(uploadtime)}
            </p>
        </div>
    </div>
  )
}
