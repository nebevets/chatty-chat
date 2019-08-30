import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createChatRoom} from '../../actions';
import Input from '../forms/input';


class CreateRoom extends Component{
  handleCreateRoom = formValues => {
    const chatRoomId = this.props.createChatRoom(formValues);
    this.props.history.push(`/rooms/${chatRoomId}`);
  }
  render(){
    const {handleSubmit} = this.props;
    return(
      <div className="createRoom">
        <h1>create chat room</h1>
        <form className="createRoomForm" onSubmit={handleSubmit(this.handleCreateRoom)}>
          <Field name="title" label="title" component={Input}/>
          <Field name="topic" label="topic" component={Input}/>
          <Field name="description" label="description" component={Input}/>
          <button>create room</button>
        </form>
      </div>
    );
  }
}

CreateRoom = reduxForm({
  form: 'createRoom'
})(CreateRoom);

export default connect(null, {
  createChatRoom
})(CreateRoom);
