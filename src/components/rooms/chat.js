import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getChatLog, getChatRoomInfo} from '../../actions';

class Chat extends Component{
  constructor(props){
    super(props);
    this.chatRoomRef = null;
    this.chatLogRef = null;
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
  render(){
    const { description, messages, title, topic } = this.props;
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.chat
  }
}

export default connect(mapStateToProps, {
  getChatLog,
  getChatRoomInfo
})(Chat);
