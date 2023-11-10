import UserPopup from '../../../components/Lecture/UserPopup';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DmMainUsersProps {
	index: number;
	title: string;
}

function DmMainUsers({ index, title }: DmMainUsersProps) {
	let navigate = useNavigate();
	const [popupSetting, setPopupSetting] = useState({
		width: 162,
		top: -15,
		right: 10,
		condition: [
			{
				data: '차단',
				action: '/member/block',
			},
			{
				data: '숨김',
				action: '/member/hide',
			},

			{
				data: '신고',
				action: '/member/report',
			},
			{
				data: '나가기',
				action: '/dm/leave',
			},
		],
	});

	useEffect(() => {
		if (title === '내 채팅') {
			setPopupSetting({
				width: 162,
				top: -15,
				right: 10,
				condition: [
					{
						data: '차단',
						action: '/member/block',
					},
					{
						data: '숨김',
						action: '/member/hide',
					},

					{
						data: '신고',
						action: '/member/report',
					},
					{
						data: '나가기',
						action: '/dm/leave',
					},
				],
			});
		} else if (title === '숨김유저') {
			setPopupSetting({
				width: 139,
				top: -15,
				right: 10,
				condition: [
					{
						data: '숨김해제',
						action: '/member/block',
					},
					{
						data: '차단',
						action: '/member/hide',
					},
					{
						data: '신고',
						action: '/member/report',
					},
				],
			});
		} else if (title === '차단유저') {
			setPopupSetting({
				width: 139,
				top: -15,
				right: 10,
				condition: [
					{
						data: '차단해제',
						action: '/member/block',
					},
					{
						data: '숨김',
						action: '/member/hide',
					},
					{
						data: '신고',
						action: '/member/report',
					},
				],
			});
		}
	}, []);
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
					borderBottom: '1px solid lightgray',
					justifyContent: 'left',
					position: 'relative',
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
						width: 'calc(100% - 150px)',
					}}>
					<div
						style={{
							fontWeight: '700',
							marginTop: title !== '내 채팅' ? '16px' : '2px',
							fontSize: title !== '내 채팅' ? '15px' : '',
						}}>
						<span style={{ cursor: 'pointer' }} className="dm-user-content" onClick={handleClick}>
							유저77{' '}
							{/*
							{title !== '내 채팅' && (
								<div
									style={{
										backgroundColor: title === '숨김유저' ? 'skyblue' : 'red',
										display: 'inline-block',
										paddingLeft: '5px',
										paddingRight: '5px',
										borderRadius: '7px',
										fontSize: '12px',
										color: 'white',
									}}>
									{title}
								</div>
							)}*/}
						</span>
					</div>
					{title === '내 채팅' && (
						<>
							<div
								style={{
									fontSize: '12px',
								}}>
								<span style={{ cursor: 'pointer' }} className="dm-user-content" onClick={handleClick}>
									내용입니당dddddddddddd
								</span>
							</div>
							<div
								style={{
									fontSize: '11px',
									color: 'gray',
								}}>
								2023/10/22 10:23
							</div>
						</>
					)}
				</div>
				{index === 5 && title === '내 채팅' && (
					<div
						style={{
							marginTop: '20px',
							backgroundColor: '#FF5554',
							color: 'white',
							paddingLeft: '5px',
							paddingRight: '5px',
							height: '20px',
							position: 'absolute',
							borderRadius: '10px',
							right: '50px',
						}}>
						122
					</div>
				)}
				<div
					style={{
						width: '30px',
						position: 'absolute',
						right: '0',
						top: '10px',
					}}>
					<i
						className="bi bi-three-dots-vertical dm-user-dot"
						style={{
							fontSize: '30px',
							marginTop: '8px',
							cursor: 'pointer',
							zIndex: '0',
						}}
						onClick={() => setPopup(!popup)}></i>
					{popup && (
						<div style={{ position: 'relative', zIndex: '2' }}>
							<UserPopup popupSetting={popupSetting}></UserPopup>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default DmMainUsers;
