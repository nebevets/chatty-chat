/*
 * 
 * 
 * video ended at 25:34 
 * 
 * 
 * 
 * 
 * 
 **/







import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {getChatLog, getChatRoomInfo, sendChatMessage} from '../../actions';
import Input from '../forms/input';

class Chat extends Component{
  constructor(props){
    super(props);
    this.chatRoomRef = null;
    this.chatLogRef = null;
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }
  componentDidMount(){
    const {getChatRoomInfo, match: { params}} = this.props;
    this.chatRoomRef = getChatRoomInfo(params.id);
  }
  componentDidUpdate(prevProps){
    const {chatLogsId, getChatLog} = this.props;
    if(chatLogsId && prevProps.chatLogsId !== chatLogsId){
      this.chatLogRef = getChatLog(chatLogsId);
    }
  }
  componentWillUnmount(){
    if(this.chatRoomRef){
      this.chatRoomRef.off();
    }
    if(this.chatLogRef){
      this.chatLogRef.off();
    }
  }
  handleMessageSubmit({message}){
    const {chatLogsId, sendChatMessage, reset} = this.props;
    if(chatLogsId){
      sendChatMessage(chatLogsId, message);
      reset();
    }
}
  render(){
    const { description, messages, title, topic, handleSubmit } = this.props;
    const messageElements = Object
      .keys(messages)
      .map(key => {
        const {name, message} = messages[key];
        return(
          <li key={key}>{name}: {message}</li>
        );
      })
    return(
      <div className="chat">
        <h1>{title || null}</h1>
        <h5>{topic || null}</h5>
        <p>{description|| null}</p>
        <ul>
          {messageElements}
        </ul>
        <form onSubmit={handleSubmit(this.handleMessageSubmit)}>
          <Field name="message" label="message" component={Input} />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.chat
  }
}

Chat = reduxForm({
  form: 'chatMessage'
})(Chat);

export default connect(mapStateToProps, {
  getChatLog,
  getChatRoomInfo,
  sendChatMessage
})(Chat);
