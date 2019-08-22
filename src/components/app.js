import React from 'react';
import Nav from './nav';
import AppRoutes from './app-routes';

const App = () => (
    <main>
        <header>
            <Nav/>
        </header>
        <section className="container">
            <AppRoutes/>
        </section>
    </main>
);

export default App;
