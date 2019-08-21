import types from '../actions/types';

const DEFAULT_STATE = {
  chatId: null,
  messages: {},
  title: '',
  topic: '',
  description: '',
};

export default (state=DEFAULT_STATE, action) => {
  const {type, messages, roomInfo} = action;
  console.log(messages, roomInfo);
  switch(type){
    case types.GET_CHAT_MESSAGES:
      return {
        ...state,
        messages
      }
    case types.GET_CHAT_ROOM_INFO:
      return {
        ...state,
        ...roomInfo
      }
    default:
      return state;
  }
}