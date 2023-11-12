import React, { useState } from 'react';
import '../../lecture/scss/dm/main/dm.scss';
import DmMainTable from './DmMainTable';
import DmHeader from '../DmHeader';

function DmMain() {
	const [title] = useState('내 채팅');
	return (
		<>
			<DmHeader isMain={true} title={title}></DmHeader>
			<DmMainTable title={title}></DmMainTable>
		</>
	);
}

export default DmMain;
