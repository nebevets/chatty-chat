import types from '../actions/types';

const DEFAULT_STATE = {
  messages: {}
};

export default (state=DEFAULT_STATE, action) => {
  const {type, messages} = action;
  switch(type){
    case types.GET_CHAT_MESSAGES:
      return {
        ...messages
      }
    default:
      return state;
  }
}