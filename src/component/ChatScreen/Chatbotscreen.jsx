import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import '../../assets/css/ChatScreen/Chat.css'; // 메시지 스타일링을 위한 CSS 파일
import profilePic1 from '../../assets/img/no4.png';
import profilePic2 from '../../assets/img/no9.png';

const socket = io('http://localhost:5000');

const Chatbotscreen = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        //연결
        socket.on('connect', () => {
            try {
                socket.emit('chat message', "안녕"); //여기가 추가 된거에요 여기서 시작하자마자 안녕을 보냄
            } catch (error) {
                console.error('Error sending message:', error);
            }
        });

        // 서버로부터 받은 메시지를 처리
        socket.on('chat message', msg => {
            setMessages(messages => [...messages, { text: msg, type: 'received' }]);
        });

        // 이벤트 리스너 해제
        return () => {
            socket.off('connect');
            socket.off('chat message');
        };
    }, []);

    useEffect(() => {
        // 스크롤을 최하단으로 이동
        const messageList = document.querySelector('.message-list');
        if (messageList) {
            messageList.scrollTop = messageList.scrollHeight;
        }
    }, [messages]); // 메시지 목록이 업데이트될 때 실행

    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('chat message', message);
            setMessages(messages => [...messages, { text: message, type: 'sent' }]);
            setMessage('');
        }
    };

    return (
        <div className="chat-container">
            <ul className="message-list">
                {messages.map((msg, index) => (
                    <li key={index} className="message-item">
                        <div className={msg.type === 'received' ? 'message received' : 'message sent'}>
                            {msg.type === 'received' && <img src={profilePic1} alt="Receiver Profile" className="profile-pic" />}
                            <p className="message-content">{msg.text}</p>
                            {msg.type === 'sent' && <img src={profilePic2} alt="Sender Profile" className="profile-pic" />}
                        </div>
                    </li>
                ))}
            </ul>
            <form onSubmit={sendMessage} className="send-form">
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Type a message..." />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Chatbotscreen;
