import React from 'react';
import {Route} from 'react-router-dom';
import Home from './home';
import Chat from './chat';
import Nav from './nav';

const App = () => (
    <div>
        <header>
            <Nav/>
        </header>
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/chat" component={Chat} />
        </div>
    </div>
);

export default App;
