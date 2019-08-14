import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMessages} from '../../actions';

class Chat extends Component{
  componentDidMount(){
    this.dbRef = this.props.getMessages();
  }
  componentWillUnmount(){
    this.dbRef.off();
  }
  render(){
    const {messages} = this.props;
    const messageElements = Object
      .keys(messages)
      .map(key => {
        const {name, text} = messages[key];
        return(
          <li key={key}>{name}: {text}</li>
        );
      })
    return(
      <div className="chat">
        <h1>Chat Room</h1>
        <ul>
          {messageElements}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const messages = state.chat;
  return {
    messages
  }
}

export default connect(mapStateToProps, {
  getMessages
})(Chat);
