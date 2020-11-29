import React, { useState } from 'react';
import useMenu from './hooks/useMenu';
import Categories from './components/menu/Categories';

const Nav = () => {
    // const [categoryState, CategoriesMenu, setCategoryMenu] = useMenu("Categories", false);
    // const [businessState, BusinessMenu, setBusinessMenu] = useMenu("Udemy for Business", false);

    return (
        <nav className="bg-white border-b-2 border-gray-200 flex flex-row h-16 items-center space-x-4 px-5 shadow-sm">
            <a href="/" className="logo bg-contain bg-no-repeat h-8 logo w-28"></a>
            <div className="flex flex-row items-center justify-between menu w-10/12 h-full">

                <Categories/>

                <input 
                    type="text"
                    className="bg-gray border border-gray-400 h-12 outline-none px-5 rounded-full w-6/12"
                    placeholder="Search for anything"
                    //TODO: Add magnifier image
                />
                {/* <BusinessMenu/> */}
                <a href="" className="nav-menu">Teach on Udemy</a>
                <a href="" className="nav-menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </a>
            </div>
            <div className="buttons flex justify-end space-x-3 w-2/12">
                <a href="" className="btn default w-24 h-10">Log in</a>
                <a href="" className="btn primary w-24 h-10">Sign up</a>
            </div>
        </nav>
    )
}

export default Nav;