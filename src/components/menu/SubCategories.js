import React, { useState } from 'react';

const SubCategories = () => {
    const [state, setState] = useState(false);

    return (
        <div 
            className="absolute flex flex-row justify-between left-0 top-full"
        >
            <div className="child-menu">
                <ul>
                    <li>Development</li>
                    <li>Business</li>
                </ul>
            </div>
            <div className="child-menu">
                <ul>
                    <li>Development</li>
                    <li>Business</li>
                </ul>
            </div>
        </div>
    )
}

export default SubCategories;