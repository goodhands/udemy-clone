import React, { useState, useEffect } from 'react';
import CategoryProvider from '../../services/Categories';

const SubCategories = ({show, data}) => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        setCategories([]);

        setCategories(() => data || []);
    }, [data])

    return (
        <div 
            style={{ display: show ? 'flex' : 'none' }}
            className="flex flex-row justify-between left-0 top-full"
        >
            <div className="child-menu">
                <ul>
                    {categories.map(category => (
                        category.children.map(children => (
                            <li key={children.id}>
                                <a 
                                    className="nav-menu px-4 py-2 flex flex-row items-center justify-between" 
                                    href={children.url}>
                                    {children.title}

                                    <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>  
                        ))
                    ))}
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