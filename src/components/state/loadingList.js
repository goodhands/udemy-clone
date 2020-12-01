import React from 'react';

const LoadingList = () => {
    
    function array_pad(size){
        const array = [];

        for (let index = 0; index < size; index++) {
            array.push(index[size]);   
        }

        return array;
    }

    return (
        <ul className="flex flex-col space-y-2 px-4">
            <li className="bg-gray-300 h-6 nav-menu block px-4 py-2 w-full"></li>
            <li className="bg-gray-300 h-6 nav-menu block px-4 py-2 w-full"></li>
            <li className="bg-gray-300 h-6 nav-menu block px-4 py-2 w-full"></li>
            <li className="bg-gray-300 h-6 nav-menu block px-4 py-2 w-full"></li>
            <li className="bg-gray-300 h-6 nav-menu block px-4 py-2 w-full"></li>
            <li className="bg-gray-300 h-6 nav-menu block px-4 py-2 w-full"></li>
            <li className="bg-gray-300 h-6 nav-menu block px-4 py-2 w-full"></li>
            <li className="bg-gray-300 h-6 nav-menu block px-4 py-2 w-full"></li>
            <li className="bg-gray-300 h-6 nav-menu block px-4 py-2 w-full"></li>
            <li className="bg-gray-300 h-6 nav-menu block px-4 py-2 w-full"></li>
            <li className="bg-gray-300 h-6 nav-menu block px-4 py-2 w-full"></li>
            <li className="bg-gray-300 h-6 nav-menu block px-4 py-2 w-full"></li>
        </ul>
    )
}

export default LoadingList;