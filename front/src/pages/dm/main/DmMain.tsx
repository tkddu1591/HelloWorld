import React from 'react';
import './dm.scss';
import DmMainTable from './DmMainTable';
import DmHeader from '../DmHeader';

function DmMain() {
   return (
      <>
         <DmHeader isMain={true}></DmHeader>
         <DmMainTable></DmMainTable>
      </>
   );
}

export default DmMain;