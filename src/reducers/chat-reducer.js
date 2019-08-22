import types from '../actions/types';

const DEFAULT_STATE = {
  chatLogsId: null,
  messages: {},
  title: '',
  topic: '',
  description: '',
  roomList: {}
};

export default (state=DEFAULT_STATE, action) => {
  const {type, messages, roomInfo, roomList} = action;
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
    case types.GET_CHAT_ROOM_LIST:
      return {
        ...state,
        roomList
      }
    default:
      return state;
  }
}