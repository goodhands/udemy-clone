import React from 'react';
import { render } from 'react-dom';
import axios from './axios';
import Nav from './Nav';

const App = () => {
    return (
        <div>
            <Nav/>
        </div>
    )
}

render(<App/>, document.getElementById('root'));