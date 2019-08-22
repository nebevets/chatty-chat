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

export const createChatRoom = chatRoomDetails => dispatch => {
  const chatBotMessage = {
    message: `welcome to ${chatRoomDetails.title}`,
    name: 'chat-bot'
  }
  const chatLogKey = db.ref('/chat-logs').push().key;
  chatRoomDetails.chatId = chatLogKey;
  const chatRoomsRef = db.ref('/chat-rooms').push(chatRoomDetails);
  db.ref(`/chat-logs/${chatLogKey}`).push(chatBotMessage);
  return chatRoomsRef.key;
}