import types from './types';
import {db} from '../firebase';

export const getChatLog = chatLogId => dispatch => {
  const dbRef = db.ref(`/chat-logs/${chatLogId}`);
  dbRef.on('value', snapshot => {
      dispatch({
        type: types.GET_CHAT_MESSAGES,
        messages: snapshot.val()
      });
    });
  return dbRef;
}

export const getChatRoomInfo = chatRoomId => dispatch => {
  const dbRef = db.ref(`/chat-rooms/${chatRoomId}`);
  dbRef.on('value', snapshot => {
    dispatch({
      type: types.GET_CHAT_ROOM_INFO,
      roomInfo: snapshot.val()
    });
  });
  return dbRef;
}

export const getChatRoomList = () => dispatch => {
  const dbRef = db.ref('/chat-rooms');
  dbRef.on('value', snapshot => {
    dispatch({
      type: types.GET_CHAT_ROOM_LIST,
      roomList: snapshot.val()
    });
  });
  return dbRef;
}

export const createChatRoom = chatRoomDetails => dispatch => {
  const chatBotMessage = {
    message: `welcome to ${chatRoomDetails.title}`,
    name: 'chat-bot'
  }
  const chatLogsKey = db.ref('/chat-logs').push().key;
  chatRoomDetails.chatLogsId = chatLogsKey;
  const chatRoomsRef = db.ref('/chat-rooms').push(chatRoomDetails);
  db.ref(`/chat-logs/${chatLogsKey}`).push(chatBotMessage);
  return chatRoomsRef.key;
}

export const sendChatMessage = (chatLogsId, message) => dispatch => {
  const newMessage = {
    message,
    name: 'steve'
  }
  db.ref(`/chat-logs/${chatLogsId}`).push(newMessage);
}