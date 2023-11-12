import React, { useEffect, useState } from 'react';
import DmHeader from '../DmHeader';
import '../../lecture/scss/dm/main/dm.scss';

function DmChat() {
	let [chatSize, setChatSize] = useState(50);
	console.log(chatSize + 70);
	return (
		<>
			<DmHeader title={'유저77 님과의 채팅'}></DmHeader>
			<DmChatMessages chatSize={chatSize}></DmChatMessages>
			<DmChatMessageSend chatSize={chatSize}></DmChatMessageSend>
		</>
	);
}

function DmChatMessages({ chatSize }) {
	useEffect(() => {
		document.documentElement.scroll(0, 1000000);
	}, []);

	return (
		<>
			<section
				style={{
					height: `calc(100vh - ${chatSize + 70}px)`,
					width: '100%',
					overflowY: 'scroll',
					paddingBottom: '10px',
				}}>
				<div style={{ height: '50px', display: 'flex', justifyContent: 'left' }}>
					<div style={{ height: '100%', width: '50px' }}>
						<i className="bi bi-person-circle" style={{ fontSize: '40px', marginLeft: '5px' }}></i>
					</div>
					<div
						style={{
							height: '100%',
							width: 'calc(100% - 50px)',
							position: 'relative',
							display: 'flex',
							justifyContent: 'left',
						}}>
						<div style={{ position: 'absolute', top: '4px', left: '12px', fontWeight: 'bold', fontSize: '16px' }}>
							유저 77
						</div>
						<div className={'opponentChatFirst'} style={{ position: 'absolute', top: '50%' }}>
							어떻게 생각해?
						</div>
					</div>
				</div>
				<div style={{ height: 'auto', display: 'flex', justifyContent: 'left' }}>
					<div style={{ height: '100%', width: '50px' }}></div>
					<div
						style={{
							height: '100%',
							width: 'calc(100% - 50px)',
							position: 'relative',
							display: 'flex',
							justifyContent: 'left',
						}}>
						<div
							className={'opponentChat'}
							style={{
								maxWidth: 'calc(90% - 40px)',
								display: 'flex',
								justifyContent: 'left',
								wordWrap: 'break-word',
								position: 'relative',
							}}>
							<span style={{ maxWidth: 'calc(100%)' }}>
								너무 비싼것 같지 않아? ㅜㅜbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
							</span>
						</div>
						<div style={{ position: 'relative', width: '10px' }}>
							<span style={{ position: 'absolute', paddingLeft: '5px', bottom: 0 }}>10:22</span>
						</div>
					</div>
				</div>

				<div style={{ height: '50px', display: 'flex', justifyContent: 'right' }}>
					<div
						style={{
							height: '100%',
							width: 'calc(100% - 50px)',
							position: 'relative',
							display: 'flex',
							justifyContent: 'right',
						}}>
						<div className={'userChatFirst'} style={{ position: 'absolute', top: '50%' }}>
							어떻게 생각해?
						</div>
					</div>
				</div>
				<div style={{ height: 'auto', display: 'flex', justifyContent: 'left' }}>
					<div style={{ height: '100%', width: '50px' }}></div>
					<div
						style={{
							height: '100%',
							width: 'calc(100%)',
							position: 'relative',
							display: 'flex',
							justifyContent: 'right',
						}}>
						<div style={{ position: 'relative', width: '50px' }}>
							<span style={{ position: 'absolute', paddingLeft: '5px', bottom: 0 }}>10:22</span>
						</div>
						<div
							className={'userChat'}
							style={{
								maxWidth: 'calc(90% - 50px)',
								display: 'flex',
								justifyContent: 'left',
								wordWrap: 'break-word',
								position: 'relative',
							}}>
							<span style={{ maxWidth: 'calc(100%)' }}>
								너무 비싼것 같지 않아? ㅜㅜbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
							</span>
						</div>
					</div>
				</div>

				<div style={{ height: '50px', display: 'flex', justifyContent: 'left' }}>
					<div style={{ height: '100%', width: '50px' }}>
						<i className="bi bi-person-circle" style={{ fontSize: '40px', marginLeft: '5px' }}></i>
					</div>
					<div
						style={{
							height: '100%',
							width: 'calc(100% - 50px)',
							position: 'relative',
							display: 'flex',
							justifyContent: 'left',
						}}>
						<div style={{ position: 'absolute', top: '4px', left: '12px', fontWeight: 'bold', fontSize: '14px' }}>
							유저 88
						</div>
						<div className={'opponentChatFirst'} style={{ position: 'absolute', top: '50%' }}>
							어떻게 생각해?
						</div>
					</div>
				</div>
				<div style={{ height: 'auto', display: 'flex', justifyContent: 'left' }}>
					<div style={{ height: '100%', width: '50px' }}></div>
					<div
						style={{
							height: '100%',
							width: 'calc(100% - 50px)',
							position: 'relative',
							display: 'flex',
							justifyContent: 'left',
						}}>
						<div
							className={'opponentChat'}
							style={{
								maxWidth: 'calc(90% - 40px)',
								display: 'flex',
								justifyContent: 'left',
								wordWrap: 'break-word',
								position: 'relative',
							}}>
							<span style={{ maxWidth: 'calc(100%)' }}>
								너무 비싼것 같지 않아? ㅜㅜbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
							</span>
						</div>
						<div style={{ position: 'relative', width: '10px' }}>
							<span style={{ position: 'absolute', paddingLeft: '5px', bottom: 0 }}>10:22</span>
						</div>
					</div>
				</div>
				<div style={{ height: '50px', display: 'flex', justifyContent: 'left' }}>
					<div style={{ height: '100%', width: '50px' }}>
						<i className="bi bi-person-circle" style={{ fontSize: '40px', marginLeft: '5px' }}></i>
					</div>
					<div
						style={{
							height: '100%',
							width: 'calc(100% - 50px)',
							position: 'relative',
							display: 'flex',
							justifyContent: 'left',
						}}>
						<div style={{ position: 'absolute', top: '4px', left: '12px', fontWeight: 'bold', fontSize: '14px' }}>
							유저 77
						</div>
						<div className={'opponentChatFirst'} style={{ position: 'absolute', top: '50%' }}>
							어떻게 생각해?
						</div>
					</div>
				</div>
				<div style={{ height: 'auto', display: 'flex', justifyContent: 'left' }}>
					<div style={{ height: '100%', width: '50px' }}></div>
					<div
						style={{
							height: '100%',
							width: 'calc(100% - 50px)',
							position: 'relative',
							display: 'flex',
							justifyContent: 'left',
						}}>
						<div
							className={'opponentChat'}
							style={{
								maxWidth: 'calc(90% - 40px)',
								display: 'flex',
								justifyContent: 'left',
								wordWrap: 'break-word',
								position: 'relative',
							}}>
							<span style={{ maxWidth: 'calc(100%)' }}>
								너무 비싼것 같지 않아? ㅜㅜbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
							</span>
						</div>
						<div style={{ position: 'relative', width: '10px' }}>
							<span style={{ position: 'absolute', paddingLeft: '5px', bottom: 0 }}>10:22</span>
						</div>
					</div>
				</div>

				<div style={{ height: '50px', display: 'flex', justifyContent: 'right' }}>
					<div
						style={{
							height: '100%',
							width: 'calc(100% - 50px)',
							position: 'relative',
							display: 'flex',
							justifyContent: 'right',
						}}>
						<div className={'userChatFirst'} style={{ position: 'absolute', top: '50%' }}>
							어떻게 생각해?
						</div>
					</div>
				</div>
				<div style={{ height: 'auto', display: 'flex', justifyContent: 'left' }}>
					<div style={{ height: '100%', width: '50px' }}></div>
					<div
						style={{
							height: '100%',
							width: 'calc(100%)',
							position: 'relative',
							display: 'flex',
							justifyContent: 'right',
						}}>
						<div style={{ position: 'relative', width: '50px' }}>
							<span style={{ position: 'absolute', paddingLeft: '5px', bottom: 0 }}>10:22</span>
						</div>
						<div
							className={'userChat'}
							style={{
								maxWidth: 'calc(90% - 50px)',
								display: 'flex',
								justifyContent: 'left',
								wordWrap: 'break-word',
								position: 'relative',
							}}>
							<span style={{ maxWidth: 'calc(100%)' }}>
								너무 비싼것 같지 않아? ㅜㅜbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
							</span>
						</div>
					</div>
				</div>

				<div style={{ height: '50px', display: 'flex', justifyContent: 'left' }}>
					<div style={{ height: '100%', width: '50px' }}>
						<i className="bi bi-person-circle" style={{ fontSize: '40px', marginLeft: '5px' }}></i>
					</div>
					<div
						style={{
							height: '100%',
							width: 'calc(100% - 50px)',
							position: 'relative',
							display: 'flex',
							justifyContent: 'left',
						}}>
						<div style={{ position: 'absolute', top: '4px', left: '12px', fontWeight: 'bold', fontSize: '14px' }}>
							유저 88
						</div>
						<div className={'opponentChatFirst'} style={{ position: 'absolute', top: '50%' }}>
							어떻게 생각해?
						</div>
					</div>
				</div>
				<div style={{ height: 'auto', display: 'flex', justifyContent: 'left' }}>
					<div style={{ height: '100%', width: '50px' }}></div>
					<div
						style={{
							height: '100%',
							width: 'calc(100% - 50px)',
							position: 'relative',
							display: 'flex',
							justifyContent: 'left',
						}}>
						<div
							className={'opponentChat'}
							style={{
								maxWidth: 'calc(90% - 40px)',
								display: 'flex',
								justifyContent: 'left',
								wordWrap: 'break-word',
								position: 'relative',
							}}>
							<span style={{ maxWidth: 'calc(100%)' }}>
								너무 비싼것 같지 않아? ㅜㅜbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
							</span>
						</div>
						<div style={{ position: 'relative', width: '10px' }}>
							<span style={{ position: 'absolute', paddingLeft: '5px', bottom: 0 }}>10:22</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

function DmChatMessageSend({ chatSize }) {
	return (
		<>
			<div
				style={{
					height: chatSize,
					backgroundColor: '#2CA3FF',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
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
