import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DmHeaderProps {
   title?: string;
   isMain?: boolean;
}

function DmHeader({ isMain = false, title = '내 채팅' }) {
   const navigate = useNavigate();
   return (
      <>
         <div
            style={{
               width: '100%',
               backgroundColor: '#2CA3FF',
               padding: '20px',
               height: '70px',
               display: 'flex',
               justifyContent: 'space-between',
            }}>
            <div
               style={{
                  fontSize: '20px',
                  fontWeight: '900',
               }}>
               {title}
            </div>
            <div>
               {!isMain && (
                  <i
                     className="bi bi-arrow-left-square"
                     style={{
                        marginRight: '20px',
                        fontSize: '25px',
                        cursor: 'pointer',
                     }}
                     onClick={() => {
                        navigate('/dm');
                     }}></i>
               )}
               <i
                  className="bi bi-chat-dots"
                  style={{
                     fontSize: '25px',
                     marginRight: '20px',
                     cursor: 'pointer',
                  }}
                  onClick={() => {
                     navigate('/dm/chat/user77');
                  }}></i>
               <i
                  className="bi bi-justify"
                  style={{
                     fontSize: '25px',
                     cursor: 'pointer',
                  }}></i>
            </div>
         </div>
      </>
   );
}

export default DmHeader;