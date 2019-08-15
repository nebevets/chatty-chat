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
