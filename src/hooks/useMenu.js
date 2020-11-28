import React, { useState } from 'react';

const useMenu = (label, defaultState) => {
    const [state, setState] = useState(defaultState);
    const Menu = ({children}) => (
        <nav 
            className="flex h-full items-center relative" 
            onMouseEnter={() => setState(true)}
            onMouseLeave={() => setState(false)}
        >
            <button 
                onMouseEnter={() => setState(true)}
                className="nav-menu" 
            >
                {label}    
            </button>
            <div 
                style={{ display: state ? 'block' : 'none' }} 
            >
                { children }
            </div>
        </nav>
    )

    return [state, Menu, setState];
}

export default useMenu;
