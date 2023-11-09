import UserPopup from '../../../components/Lecture/UserPopup';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DmMainUsersProps {
   index: number;
}

function DmMainUsers({ index }: DmMainUsersProps) {
   let navigate = useNavigate();
   const popupSetting = {
      width: 127,
      top: 40,
      left: -120,
      lastData: '나가기',
      lastAction: `/dm/leave`,
   };

   const [popup, setPopup] = useState<boolean>(false);

   function handleClick() {
      navigate(`/dm/chat/${index}`);
   }

   return (
      <>
         <div
            className="dm-user-select"
            style={{
               height: '57px',
               display: 'flex',
               justifyContent: 'space-between',
               borderBottom: '1px solid lightgray',
            }}>
            <div
               style={{
                  width: '50px',
                  display: 'flex',
                  justifyContent: 'center',
               }}>
               <i
                  className="bi bi-person-circle"
                  style={{
                     fontSize: '30px',
                     marginTop: '7px',
                     cursor: 'pointer',
                  }}
                  onClick={handleClick}></i>
            </div>
            <div
               style={{
                  width: 'calc(100% - 100px)',
               }}>
               <div
                  style={{
                     fontWeight: '700',
                     marginTop: '2px',
                  }}>
                  <span style={{ cursor: 'pointer' }} className="dm-user-content" onClick={handleClick}>
                     유저77
                  </span>
               </div>
               <div
                  style={{
                     fontSize: '12px',
                  }}>
                  <span style={{ cursor: 'pointer' }} className="dm-user-content" onClick={handleClick}>
                     내용입니당~~~~
                  </span>
               </div>
               <div
                  style={{
                     fontSize: '11px',
                     color: 'gray',
                  }}>
                  2023/10/22 10:23
               </div>
            </div>
            <div
               style={{
                  width: '50px',
                  display: 'flex',
                  justifyContent: 'center',
               }}>
               <i
                  className="bi bi-three-dots-vertical dm-user-dot"
                  style={{
                     fontSize: '30px',
                     marginTop: '8px',
                     cursor: 'pointer',
                  }}
                  onClick={() => setPopup(!popup)}></i>
               {popup && (
                  <div style={{ position: 'relative' }}>
                     <UserPopup popupSetting={popupSetting}></UserPopup>
                  </div>
               )}
            </div>
         </div>
         {/*여기서 짜르세용~~~~~~~~~~~~~~~*/}
      </>
   );
}

export default DmMainUsers;