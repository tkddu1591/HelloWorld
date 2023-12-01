import React, {useCallback, useEffect, useRef, useState} from 'react';
import DmHeader from '../DmHeader';
import '../../lecture/scss/dm/main/dm.scss';
import {apiClient} from "../../../App";
import {useDispatch, useSelector} from "react-redux";
import {insertMyChatt, myChatt} from "../../../slice/ChatSlice";

function DmChat() {
    let [chatSize, setChatSize] = useState(50);
    console.log(chatSize + 70);
    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const chatt = useSelector((state: any) => state.myChatt);
    const [chkLog, setChkLog] = useState(false);
    const [socketData, setSocketData] = useState();
    const dispatch = useDispatch()
    const ws = useRef<any>(null);    //webSocket을 담는 변수,
    //컴포넌트가 변경될 때 객체가 유지되어야하므로 'ref'로 저장

    useEffect(() => {
        if (socketData !== undefined) {
            const tempData = chatt.concat(socketData);
            dispatch(insertMyChatt(tempData))
        }
    }, [socketData]);

    const onText = event => {
        setMsg(event.target.value);
    }


    // @ts-ignore
    const webSocketLogin = useCallback(() => {
        ws.current = new WebSocket("ws://localhost:8080/socket/chatt");
        ws.current.onmessage = (message) => {
            const dataSet = JSON.parse(message.data);
            setSocketData(dataSet);
        }
    });


    // @ts-ignore
    const send = useCallback(() => {
        if (!chkLog) {
            if (name === "") {
                alert("이름을 입력하세요.");
                // @ts-ignore
                document.getElementById("name").focus();
                return;
            }
            webSocketLogin();
            setChkLog(true);
        }

        if (msg !== '') {
            const data = {
                name,
                msg,
                date: new Date().toLocaleString(),
            };  //전송 데이터(JSON)

            const temp = JSON.stringify(data);

            if (ws.current.readyState === 0) {   //readyState는 웹 소켓 연결 상태를 나타냄
                ws.current.onopen = () => { //webSocket이 맺어지고 난 후, 실행
                    console.log(ws.current.readyState);
                    ws.current.send(temp);
                }
            } else {
                ws.current.send(temp);
            }
        } else {
            alert("메세지를 입력하세요.");
            // @ts-ignore
            document.getElementById("msg").focus();
            return;
        }
        setMsg("");
    });
    //webSocket
    //webSocket
    //webSocket
    //webSocket
    //webSocket
    //webSocket
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
        setName(member.nick)
        webSocketLogin();
        setChkLog(true);
    }, [member]);
    return (
        <>
            <DmHeader title={'채팅'}></DmHeader>
            <DmChatMessages chatSize={chatSize} chatt={chatt} member={member}></DmChatMessages>
            <DmChatMessageSend chatSize={chatSize} send={send} msg={msg} onText={onText}></DmChatMessageSend>
        </>
    );
}

function ChatBox({item, member}) {


    let time = (item.date.split(" ")[4].split(":"))
    let pM = (item.date.split(" ")[3])
    if (item.name === member.nick) {
        return (<div style={{height: 'auto', display: 'flex', justifyContent: 'left'}}>
                <div style={{height: '100%', width: '50px'}}></div>
                <div className={'myChatBox'}>
                    <div className={'myTimeBox'}>
                        <span className={'time'}>{pM==='오후'?12+Number(time[0])+":"+time[1]:time[0]+":"+time[1]}</span>
                    </div>
                    <div
                        className={'myChat'}>
                    <span style={{maxWidth: 'calc(100%)'}}>
                        {item.msg}
                    </span>
                    </div>
                </div>
            </div>
        )
    } else
        return <div key={item}>
            <div className={'userChatBox'}>

                <div className={'iconBox'}>
                    <i className="bi bi-person-circle icon"></i>
                    <div className={'name'}>
                        <span>{item.name}</span>
                    </div>
                </div>
                <div className={'messageBox'}>
                    <div
                        className={'opponentChat message'}>
							<span style={{maxWidth: 'calc(100%)'}}>
								{item.msg}
							</span>
                    </div>
                    <div style={{position: 'relative', width: '10px'}}>
                        <span className={'timeBox'}>{pM==='오후'?12+Number(time[0])+":"+time[1]:time[0]+":"+time[1]}</span>
                    </div>
                </div>

            </div>
        </div>

}

function DmChatMessages({chatSize, chatt, member}) {
    useEffect(() => {
        document.documentElement.scroll(0, 1000000);
    }, []);

    return (
        <section
            style={{
                height:        `calc(100vh - ${chatSize + 70}px)`,
                width:         '100%',
                overflowY:     'scroll',
                paddingBottom: '10px',
            }}>

            {chatt.map((item, idx) => {
                return <ChatBox member={member} item={item} key={item}></ChatBox>
            })}
        </section>
    );
}

function DmChatMessageSend({chatSize, msg, onText, send}) {
    return (
        <div
            style={{
                height:          chatSize,
                backgroundColor: '#2CA3FF',
                display:         'flex',
                justifyContent:  'space-between',
            }}>
            <div style={{width: 'calc(100% - 50px)', padding: '7px'}}>
					<textarea
                        id='msg' value={msg} onChange={onText}
                        onKeyDown={(ev) => {
                            if (ev.keyCode === 13) {
                                send();
                            }
                        }}
                        style={{
                            backgroundColor: 'white',
                            width:           '100%',
                            height:          '100%',
                            borderRadius:    '5px',
                            padding:         '5px',
                            overflowY:       'auto',
                            resize:          'none',
                        }}></textarea>
            </div>
            <div style={{width: '50px', padding: '5px'}}>
                <i style={{fontSize: '30px', cursor: 'pointer'}} onClick={send} className="bi bi-send"></i>
            </div>
        </div>
    );
}

export default DmChat;
