import React from 'react';
import { Button } from 'reactstrap';
import UserPopup from '../../../../components/Lecture/UserPopup';

function DmChatAsideUser() {
	const [popup, setPopup] = React.useState('');
	const popupSetting = {
		width: 140,
		left: 10,
		bottom: -17,
		condition: [
			{
				data: '1:1 채팅',
				action: '/dm',
			},
			{
				data: '신고',
				action: '/dm',
			},
			{
				data: '차단',
				action: '/dm',
			},
		],
	};
	return (
		<>
			<div
				style={{
					width: '99%',
					height: '50px',
					position: 'relative',
				}}>
				<Button
					style={{
						width: '100%',
						display: 'flex',
						paddingLeft: '10px',
						justifyContent: 'left',
						alignItems: 'center',
						height: '100%',
						backgroundColor: 'none',
						zIndex: '5',
						position: 'relative',
					}}
					onClick={() => {
						if (popup === 'user') setPopup('');
						else setPopup('user');
					}}>
					{/*유저 리스트*/}
					<i className="bi bi-person-circle" style={{ fontSize: '30px' }}></i>
					<div style={{ marginLeft: '5px', position: 'relative' }}>
						<span>유저 77</span>
					</div>
				</Button>
				{popup === 'user' && <UserPopup popupSetting={popupSetting}></UserPopup>}
			</div>
		</>
	);
}

export default DmChatAsideUser;