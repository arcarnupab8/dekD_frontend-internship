import React, { useEffect, useState } from 'react'
import style from '../css/list.module.css';
import { collections }  from '../assets/data';
import Datacontainer from './Datacontainer';
import { useNavigate } from 'react-router-dom';

export default function List() {
  const [mode, setMode] = useState(0);
  const [editmode, setEditmode] = useState(false);
  const [selectedNovels, setSelectedNovels] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (mode === 2) {
      setEditmode(true);
    } 
    else if(mode === 1){
      navigate('/create');
    }
    else {
      setEditmode(false);
      setSelectedNovels([]);
    }
  }, [mode]);

  const toggleSelection = (novelid) => {
    setSelectedNovels(prevSelectedNovels => {
      if (prevSelectedNovels.includes(novelid)) {
        return prevSelectedNovels.filter(id => id !== novelid);
      } else {
        return [...prevSelectedNovels, novelid];
      }
    });
  };

  const handleDelete = () => {
    alert(`Delete Novels: ${selectedNovels.length}\n ID: ${selectedNovels.join(', ')}`);
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <div>
          <p>รายการที่คั่นไว้</p>
        </div>
      </div>

      <div className={style.content}>
        <div className={style.modebar}>
          <div className={style.sumlist}>
            จำนวนทั้งหมด &nbsp;
            {collections.length} &nbsp;
            รายการ
          </div>
          
          <div className={style.mode}>
            {editmode ? (
              <>
                <div onClick={() => setMode(0)}>ยกเลิก</div>
                <div className={style.deleter} 
                onClick={handleDelete} style={{ opacity: selectedNovels.length === 0 ? 0.5 : 1 }}>
                  <img src='./Delete.png' alt='BinIcon'/>
                  {selectedNovels.length} &nbsp;
                  {isSmallScreen === true ? (
                    ''
                  ) : (
                    'รายการ'
                  )}
                </div>
              </>
            ) : (
              <>
                <div onClick={() => setMode(1)}>สร้าง</div>
                <div onClick={() => setMode(2)}>แก้ไข</div>
              </>
            )}
          </div>
          
        </div>

        <div className={style.wrap}>
          { collections.map((book) => (
            <div key={book.novelid} className={style.itemContainer}>
              <Datacontainer
                name={book.name}
                chaptern={book.chaptern}
                chaptername={book.chaptername}
                uploadtime={book.uploadtime}
                madeby={book.madeby}
                img="Profile.png"
              />
              {editmode && (
                <div 
                  className={style.chosen} 
                  onClick={() => toggleSelection(book.novelid)}
                >
                  <img 
                    src={selectedNovels.includes(book.novelid) ? './Check.png' : './Uncheck.png'} 
                    alt='selection icon'
                  />
                </div>
              )}
            </div>
          ))
          }         

        </div>
      </div>
    </div>
  )
}
