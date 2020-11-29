import React, { useEffect, useState } from 'react';
import CategoriesService from '../../services/Categories'; 
import SubCategories from './SubCategories';

const Categories = () => {

    const [state, setState] = useState(false);
    const [categories, setCategories] = useState([]);
    const [showSubCategory, setShowSubCategory] = useState(false);

    // useEffect( () => {
    //     setCategories([]);

    //     CategoriesService.all(({categories}) => {
    //         setCategories(categories);
    //     }, console.error);

    // }, [setCategories, categories]);

    async function all(){
        CategoriesService.all().then(({ data }) => {
            setCategories(() => data.results || []);
        }, console.error);
    } 

    return (
        <nav 
            className="flex h-full items-center relative" 
            onMouseEnter={() => {
                setState(true)
                all()
            }}
            onMouseLeave={() => setState(false)}
        >
            <button 
                className="nav-menu">
                Categories    
            </button>

            <div 
                className="absolute flex flex-row justify-between left-0 top-full"
            >
                <div 
                    className="child-menu"
                    style={{ display: state ? 'flex' : 'none' }}
                >
                    <ul>
                        {
                            categories.map(category => (
                                <li 
                                    data-index={category.id}
                                    onMouseEnter={(e) => setShowSubCategory(true)}
                                    onMouseLeave={(e) => setShowSubCategory(false)}
                                >
                                    {category.title}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                { showSubCategory ? <SubCategories /> : null }
            </div>
        </nav>
    )
}

export default Categories;