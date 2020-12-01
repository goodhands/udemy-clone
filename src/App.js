import React from 'react';
import { render } from 'react-dom';
import axios from './axios';
import Nav from './Nav';

const App = () => {
    return (
        <div>
            <Nav/>
            <div className="home-bg-teaser w-full p-20">
                <div className="bg-white border shadow w-5/12 p-10">
                    <h2 className="text-4xl text-neutral font-bold">Cyber deals.</h2>
                    <h2 className="text-4xl text-neutral font-bold">Real skills.</h2>
                    <p className="text-base mt-2">
                        Courses as low as $9.99 through Dec. 4. Plus, get free access to a <a href="#">live webinar!</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

render(<App/>, document.getElementById('root'));