import './nav.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{
  render(){
    return(
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
