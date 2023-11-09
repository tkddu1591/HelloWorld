import { useNavigate } from 'react-router-dom';
import { MouseEventHandler, ReactNode } from 'react';

interface UserPopupProps {
	popupSetting: {
		top?: number;
		marginRight?: number;
		marginLeft?: number;
		lastData?: string;
		lastAction?: string;
		width?: number;
		left?: number;
		right?: number;
		bottom?: number;
		isPopup?: boolean;
		condition: {
			data: string;
			action: string;
			newWindow?: boolean;
		}[];
	};
}

function UserPopup({ popupSetting }: UserPopupProps) {
	let navigate = useNavigate();

	console.log(popupSetting);

	function handleClick(item): MouseEventHandler<HTMLSpanElement> {
		return event => {
			if (item.newWindow) window.open(item.action, '_blank', 'width=400,height=600');
			else navigate(item.action);
		};
	}

	return (
		<>
			<div
				style={{
					width: popupSetting.width ? popupSetting.width + 'px' : '',
					position: 'absolute',
					top: popupSetting.top + 'px',
					left: popupSetting.left ? popupSetting.left + 'px' : '',
					right: popupSetting.right ? popupSetting.right + 'px' : '',
					bottom: popupSetting.bottom ? popupSetting.bottom + 'px' : '',
					border: '1px solid lightgray',
					marginRight: popupSetting.marginRight + 'px',
					marginLeft: popupSetting.marginLeft + 'px',
					borderRadius: '2px',
					height: '30px',
					padding: '5px',
					backgroundColor: '#Fafafa',
					fontSize: '13px',
					zIndex: '99999999999999999'
				}}>
				{popupSetting.condition.map((item, index) => {
					return (
						<span
							key={item.data}
							onClick={handleClick(item)}
							style={{
								paddingLeft: '5px',
								cursor: 'pointer',
								paddingRight: '5px',
								borderLeft: index !== 0 ? '1px solid black' : 'none',
								fontSize: '13px',
								paddingTop: '0px',
								fontStyle: 'normal',
							}}>
							{item.data}
						</span>
					);
				})}
			</div>
		</>
	);
}

export default UserPopup;
