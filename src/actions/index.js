import types from './types';
import {db} from '../firebase';

export const getMessages = () => dispatch => {
  const dbRef = db.ref('/messages');
  dbRef
    .on('value', (snapshot) => {
      const messages = snapshot.val();
      dispatch({
        type: types.GET_CHAT_MESSAGES,
        messages
      });
    });
  return dbRef;
}

export const createChatRoom = roomDetails => async dispatch => {
  const botMessage = {
    message: `welcome to ${roomDetails.title}`,
    name: 'chat-bot'
  }
  const logKey = await db.ref('/chat-logs').push().key;

  roomDetails.chatId = logKey;

  const roomRef = await db.ref('/chat-rooms').push(roomDetails);

  console.log('room ref', roomRef.key);
  console.log('log key', logKey);
}