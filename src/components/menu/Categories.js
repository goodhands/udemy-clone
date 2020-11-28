import React from 'react';

const Categories = () => {
    return (
        <div 
            className="absolute flex flex-row justify-between left-0 top-full">
            <ul 
                className="child-menu"
            >
                <li>Development</li>
                <li>Business</li>
            </ul>
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

export default Categories;