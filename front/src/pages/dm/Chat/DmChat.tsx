import React, { useState } from 'react';
import DmHeader from '../DmHeader';

function DmChat() {
   let [chatSize, setChatSize] = useState(50);
   return (
      <>
         <DmHeader title={'유저77 과의 채팅'}></DmHeader>
         <section
            style={{
               height: `calc(100% - ${chatSize + 70}px)`,
               width: '100%',
               overflowY: 'scroll',
            }}></section>
         <div
            style={{ height: chatSize, backgroundColor: '#2CA3FF', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: 'calc(100% - 50px)', padding: '7px' }}>
               <textarea
                  style={{
                     backgroundColor: 'white',
                     width: '100%',
                     height: '100%',
                     borderRadius: '5px',
                     padding: '5px',
                     overflowY: 'auto',
                     resize: 'none',
                  }}></textarea>
            </div>
            <div style={{ width: '50px', padding: '5px' }}>
               <i style={{ fontSize: '30px', cursor: 'pointer' }} className="bi bi-send"></i>
            </div>
         </div>
      </>
   );
}

export default DmChat;