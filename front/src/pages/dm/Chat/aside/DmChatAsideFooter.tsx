import React from 'react';

function DmChatAsideFooter() {
	return (
		<>
			<div
				style={{
					width: '100%',
					height: '50px',
					position: 'absolute',
					bottom: '0',
					backgroundColor: 'dimgray',
					display: 'flex',
					justifyContent: 'space-between',
					padding: '10px',
					alignItems: 'center',
					color: 'lightgray',
				}}>
				{/*사이드 하단*/}
				<div
					style={{
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'center',
						cursor: 'pointer',
					}}>
					<span style={{ marginRight: '5px' }}>상대 추가</span>
					<i className="bi bi-person-plus" style={{ fontSize: '25px' }}></i>
				</div>

				<div
					style={{
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'center',
						cursor: 'pointer',
					}}>
					<span style={{ marginRight: '5px' }}>나가기</span>
					<i className="bi bi-door-open" style={{ fontSize: '25px' }}></i>
				</div>
			</div>
		</>
	);
}

export default DmChatAsideFooter;