import React, { useEffect, useState, useRef } from 'react';
import './scss/InputNumber.scss';

interface InputNumber {
	num?: number;
	setNum?: (state: number) => void;
}

function InputNumber({ num = 0, setNum }: InputNumber) {
	const [newNum, setNewNum] = useState(num);
	const intervalRef = useRef<NodeJS.Timeout>();
	const speedRef = useRef<number>(300); // 초당 속도, 초기값 100ms
	const acceleration = 250; // 속도 증가량 (10ms)
	const [condition, setCondition] = useState('');

	function increaseNumber() {
		setNewNum(prevNum => prevNum + 1);
	}

	function decreaseNumber() {
		setNewNum(prevNum => (prevNum > 0 ? prevNum - 1 : 0));
	}

	function handleMouseDown() {
		if (isNaN(newNum)) {
			if (condition === 'increase') {
				setNewNum(1);
			} else if (condition === 'decrease') {
				setNewNum(0);
			}
		} else if (condition === 'increase') {
			setNewNum(prevNum => prevNum + 1);
		} else if (condition === 'decrease') {
			setNewNum(prevNum => (prevNum > 0 ? prevNum - 1 : 0));
		}
		intervalRef.current = setInterval(() => {
			if (condition === 'increase') {
				increaseNumber();
			} else if (condition === 'decrease') {
				decreaseNumber();
			}
			if (speedRef.current > 100) {
				// 최대속도 제한
				speedRef.current -= acceleration; // 속도를 증가량만큼 높이기
				clearInterval(intervalRef.current); // 현재 interval 정지
				intervalRef.current = setInterval(() => {
					if (condition === 'increase') {
						increaseNumber();
					} else if (condition === 'decrease') {
						decreaseNumber();
					}
				}, speedRef.current); // 새로운 속도로 interval 재설정
			}
		}, speedRef.current); // 초당 속도에 맞게 interval 설정
	}

	function handleMouseUp() {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			speedRef.current = 300; // 속도 초기화
		}
	}

	useEffect(() => {
		if (setNum) {
			if (!isNaN(newNum)) {
				setNum(newNum);
			} else {
				setNum(0);
			}
		}
	}, [newNum, setNum]);

	return (
		<>
			<div
				className={'LectureCartNumInput'}
				style={{
					border: '1px solid lightgray',
					borderRadius: '15px',
					overflow: 'hidden',
					paddingLeft: '10px',
					paddingRight: '10px',
					display: 'flex',
					justifyContent: 'space-between',
					height: '25px',
					width: 'auto',
				}}>
				<input
					type={'number'}
					style={{
						width: '90%',
						fontSize: '12px',
						paddingTop: '2px',
						paddingBottom: '2px',
					}}
					onChange={e => {
						setNewNum(parseInt(e.target.value));
					}}
					value={newNum}
				/>
				<div style={{ width: '10%', height: '100%' }} className={'upDownButton'}>
					<i
						className="bi bi-caret-up-fill"
						style={{ fontSize: '10px', height: '50%', display: 'block' }}
						onMouseDown={handleMouseDown}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseUp}
						onMouseOver={() => {
							setCondition('increase');
						}}></i>
					<i
						className="bi bi-caret-down-fill"
						style={{ fontSize: '10px', height: '50%', display: 'block' }}
						onMouseDown={handleMouseDown}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseUp}
						onMouseOver={() => {
							setCondition('decrease');
						}}></i>
				</div>
			</div>
		</>
	);
}

export default InputNumber;
