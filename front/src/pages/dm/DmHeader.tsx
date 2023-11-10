import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserPopup from '../../components/Lecture/UserPopup';
import DmChatAside from './Chat/aside/DmChatAside';

interface DmHeaderProps {
	isMain?: boolean;
	title?: string;
}

function DmHeader({ isMain = false, title = '내 채팅' }: DmHeaderProps) {
	const navigate = useNavigate();
	const chatPopupSetting = {
		width: 130,
		top: 50,
		right: 50,
		condition: [
			{
				data: '1:1 채팅',
				action: '/dm/chat/1',
			},
			{
				data: '비밀채팅',
				action: '/dm/chat/1',
			},
		],
	};
	const menuPopupSetting = {
		width: 130,
		top: 50,
		right: 10,
		condition: [
			{
				data: '차단유저',
				action: '/dm/block',
			},
			{
				data: '숨김유저',
				action: '/dm/hide',
			},
		],
	};
	console.log(title.indexOf('님과의 채팅') !== -1);
	const [popup, setPopup] = React.useState('');
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
								marginRight: '25px',
								fontSize: '25px',
								cursor: 'pointer',
							}}
							onClick={() => {
								navigate('/dm');
							}}></i>
					)}

					<i
						className="bi bi-house"
						style={{
							marginRight: '25px',
							fontSize: '25px',
							cursor: 'pointer',
						}}
						onClick={() => {
							navigate('/');
						}}></i>
					<i
						onClick={() => {
							setPopup('chat');
							if (popup === 'chat') setPopup('');
						}}
						className="bi bi-chat-dots"
						style={{
							fontSize: '25px',
							marginRight: '20px',
							cursor: 'pointer',
						}}>
						{popup === 'chat' && <UserPopup popupSetting={chatPopupSetting}></UserPopup>}
					</i>

					<i
						className="bi bi-justify"
						onClick={() => {
							setPopup('menu');
							if (popup === 'menu') setPopup('');
						}}
						style={{
							fontSize: '25px',
							cursor: 'pointer',
						}}>
						{title.indexOf('님과의 채팅') === -1 && popup === 'menu' && (
							<UserPopup popupSetting={menuPopupSetting}></UserPopup>
						)}
					</i>
				</div>
			</div>
			{title.indexOf('님과의 채팅') !== -1 && <DmChatAside popup={popup}></DmChatAside>}
		</>
	);
}


export default DmHeader;
