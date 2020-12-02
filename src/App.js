import React from 'react';
import { render } from 'react-dom';
import Nav from './Nav';
import Home from './pages/Home';

const App = () => {
    return (
        <div>
            <Nav/>
            <Home />
        </div>
    )
}

render(<App/>, document.getElementById('root'));