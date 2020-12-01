import React, { useState } from 'react';

const useHover = (label, defaultState) => {
    const [state, setState] = useState(defaultState);
    const Menu = ({children}) => (
        <nav 
            className="flex h-full items-center relative" 
            onMouseEnter={() => setState(true)}
            onMouseLeave={() => setState(false)}
        >
            <button 
                className="nav-menu" 
            >
                {label}    
            </button>
            <div 
                className="absolute flex flex-row justify-between left-0 top-full"
                style={{ display: state ? 'block' : 'none' }} 
            >
                { children }
            </div>
        </nav>
    )

    return [state, Menu, setState];
}

export default useHover;
