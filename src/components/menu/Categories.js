import React, { useEffect, useState } from 'react';
import CategoryProvider from '../../services/Categories'; 
import SubCategory from './SubCategories';

const Categories = () => {

    const [showCategory, toggleCategory] = useState(false);
    const [categories, setCategories] = useState([]);
    const [showSubCategory, setShowSubCategory] = useState(false);
    const [subCategoryParent, setSubCategoryParent] = useState([]);

    /**
     * Thinking whether to load on categories after component
     * renders instead of each onMouseEnter event
     */
    // useEffect( () => {
    //     setCategories([]);

    //     CategoriesService.all(({categories}) => {
    //         setCategories(categories);
    //     }, console.error);

    // }, [setCategories, categories]);

    async function all(){
        if(categories.length > 0 ) return;

        CategoryProvider.all().then(({ data }) => {
            setCategories(() => data.results || []);
        }, console.error);
    } 

    return (
        <nav 
            className="flex h-full items-center relative" 
            onMouseEnter={() => {
                toggleCategory(true)
                all()
            }}
            onMouseLeave={() => {
                toggleCategory(false)
                setShowSubCategory(false)
            }}
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
                    style={{ display: showCategory ? 'flex' : 'none' }}
                >
                    <ul>
                        {
                            categories.map(category => (
                                <li 
                                    key={category.id}
                                    data-index={category.id}
                                    onMouseEnter={(e) => {
                                        setShowSubCategory(true)
                                        setSubCategoryParent(category.id)
                                    }}
                                >
                                    <a 
                                        className="nav-menu px-4 py-2 flex flex-row items-center justify-between" 
                                        href={category.url}
                                    >
                                        {category.title}

                                        <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                { <SubCategory show={showSubCategory} parent={subCategoryParent} /> }
            </div>
        </nav>
    )
}

export default Categories;