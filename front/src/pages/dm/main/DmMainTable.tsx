import React from 'react';
import DmMainUsers from './DmMainUsers';

function DmMainTable() {
   let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   return (
      <>
         <section
            style={{
               height: 'calc(100% - 70px)',
               width: '100%',
               overflowY: 'scroll',
            }}>
            {num.map((item, index) => {
               return (
                  <div key={item}>
                     <DmMainUsers index={index}></DmMainUsers>
                  </div>
               );
            })}
         </section>
      </>
   );
}

export default DmMainTable;