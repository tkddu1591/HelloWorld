import React, { useEffect, useState } from 'react';
import DmChatAsideFooter from './DmChatAsideFooter';
import DmChatAsideUser from './DmChatAsideUser';

function DmChatAside({ popup }) {
	const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const [backgrundColor, setBackgrundColor] = useState('');
	useEffect(() => {
		if (popup === 'menu') setTimeout(() => {}, 500);
		else {
		}
	}, [popup]);
	return (
		<>
			<div
				style={{
					position: 'fixed',
					width: '100%',
					bottom: '0',
					height: 'calc(100% - 70px)',
					backgroundColor: popup === 'menu' ? 'rgba(0,0,0,0.2)' : '',
					zIndex: '5',
					cursor: 'default',
					color: 'white',
					translate: popup === 'menu' ? '0' : '100%',
				}}></div>

			{/*사이드 오픈 전체*/}
			<div
				style={{
					width: '60%',
					height: 'calc(100% - 70px)',
					position: 'fixed',
					bottom: '0',
					right: '0',
					zIndex: '10',
					translate: popup === 'menu' ? '0' : '100%',
					transitionDuration: '0.5s',
				}}>
				{/*사이드 창*/}
				<div
					style={{
						width: '100%',
						height: 'calc(100% - 50px)',
						position: 'absolute',
						backgroundColor: 'dimgray',
						padding: '10px',
						borderBottom: '1px solid lightgray',
						overflowY: 'scroll',
					}}>
					{/*사이드 메인*/}
					<div style={{ fontSize: '16px', paddingBottom: '5px', borderBottom: '1px solid lightgray' }}>대화 상대</div>

					{num.map((item, index) => {
						return <DmChatAsideUser key={item}></DmChatAsideUser>;
					})}
				</div>
				<DmChatAsideFooter></DmChatAsideFooter>
			</div>
		</>
	);
}

export default DmChatAside;