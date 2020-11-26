import React from 'react';
import { render } from 'react-dom';
import Nav from './Nav';

const App = () => {
    return (
        <div>
            <Nav/>
        </div>
    )
}

render(<App/>, document.getElementById('root'));