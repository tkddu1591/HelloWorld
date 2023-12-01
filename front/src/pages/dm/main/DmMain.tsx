import React, {useCallback, useEffect, useRef, useState} from 'react';
import '../../lecture/scss/dm/main/dm.scss';
import DmMainTable from './DmMainTable';
import DmHeader from '../DmHeader';
import {apiClient} from "../../../App";
import {useDispatch, useSelector} from "react-redux";
import {insertMyChatt} from "../../../slice/ChatSlice";

function DmMain() {
	const [title] = useState('내 채팅');
	const chatt= useSelector((state:any) => state.myChatt);
	const [chkLog, setChkLog] = useState(false);
	const [socketData, setSocketData] = useState();
	const [name, setName] = useState("");
	const dispatch =useDispatch()
	const ws = useRef<any>(null);    //webSocket을 담는 변수,
	useEffect(() => {
		if (socketData !== undefined) {
			const tempData = chatt.concat(socketData);
			dispatch(insertMyChatt(tempData))
		}
	}, [socketData]);
	// @ts-ignore
	const webSocketLogin = useCallback(() => {
		ws.current = new WebSocket("ws://localhost:8080/socket/chatt");

		ws.current.onmessage = (message) => {
			const dataSet = JSON.parse(message.data);
			setSocketData(dataSet);
		}
	});
	console.log(chatt)
	const [member, setMember] = useState<any>({})
	useEffect(() => {
		const accessToken = localStorage.getItem("helloWorld_ACCESS_TOKEN")
		if (accessToken !== null)
			apiClient.get(`/me`, {
				headers: {"Authorization": `Bearer ${accessToken}`}
			})
				.then((res) => {
					setMember(res.data);

				})
				.catch((err) => {
					console.log("실패? : " + JSON.stringify(err));
				});
	}, []);
	useEffect(() => {
		setName(member.name)
		webSocketLogin();
		setChkLog(true);
	}, [member]);
	return (
		<>
			<DmHeader isMain={true} title={title}></DmHeader>
			<DmMainTable title={title} chatt={chatt}></DmMainTable>
		</>
	);
}

export default DmMain;
