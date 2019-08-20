import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Lobby extends Component{
  render(){
    return(
      <div className="lobby">
        <h1>chat lobby</h1>
        <Link to="/rooms/create">create room</Link>
      </div>
    );
  }
}

export default Lobby;
