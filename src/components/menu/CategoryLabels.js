import React, { useEffect, useState } from 'react';
import CategoryProvider from '../../services/Categories';

const CategoryLabel = ({show, parent}) => {
    const [labels, setLabels] = useState([]);

    useEffect( () => {
        setLabels([]);

        if(parent.length == 0){
            return;
        }

        CategoryProvider.findLabels(parent.id).then(({data}) => {
            setLabels(() => data.results || []);
        })
    }, [parent]);

    return (
        <div 
            style={{ display: show ? 'flex' : 'none' }}
            className="child-menu">
            <ul>
                <li className="px-4 py-2">Popular Topics</li>
                <li>
                    <a
                        className="nav-menu px-4 py-2 flex flex-row items-center justify-between" 
                        href={parent.url}
                    >
                        All {parent.title}
                    </a>
                </li>

                {
                    labels.map(label => (
                        <li key={label.id}>
                            <a
                                className="nav-menu px-4 py-2 flex flex-row items-center justify-between" 
                                href={label.url}
                            >
                                {label.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CategoryLabel;