import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getChatRoomList} from '../../actions';

class Lobby extends Component{
  constructor(props){
    super(props);
    this.chatRoomList = null;
  }
  componentDidMount(){
    this.chatRoomList = this.props.getChatRoomList();
  }
  componentWillUnmount(){
    if(this.chatRoomList){
      this.chatRoomList.off();
    }
  }
  render(){
    console.log('roomlist from lobby', this.props.roomList);
    const {roomList} = this.props;
    const roomElements = Object
      .keys(roomList)
      .map( room => {
        return(
          <li key={room}>
            <div>
              <Link to={`/rooms/${room}`}>
                <span>{roomList[room].title}</span>
                <span>{roomList[room].topic}</span>
              </Link>
            </div>
            <div>{roomList[room].description}</div>
          </li>
        )
      });
    return(
      <div className="lobby">
        <h1>chat lobby</h1>
        {
          roomElements.length 
          ? <ul>{roomElements}</ul>
          : null
        }
        <Link to="/rooms/create">create room</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {roomList} = state.chat;
  return {
    roomList
  }
}

export default connect(mapStateToProps, {
  getChatRoomList
})(Lobby);
