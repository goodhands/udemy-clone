import React, { useState } from 'react';
import useHover from './hooks/useHover';
import Button from './components/button/Button';
import Categories from './components/menu/Categories';
import Search from './components/menu/Search';

const cartIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>

const Nav = () => {
    const [teach, TeachMenu, setTeach] = useHover("Teach on Udemy", false);
    const [business, BusinessMenu, setBusinessMenu] = useHover("Udemy for Business", false);
    const [cart, Cart, setCart] = useHover(cartIcon, false);

    return (
        <nav className="bg-white border-b-2 border-gray-200 flex flex-row h-16 items-center space-x-4 px-5 shadow-sm">
            <a href="/" className="logo bg-contain bg-no-repeat h-8 logo w-28"></a>
            <div className="flex flex-row items-center justify-between menu w-10/12 h-full">

                <Categories/>

                <Search />

                <BusinessMenu className="w-full p-4 bg-white border">
                    <div className="bg-white border flex flex-col items-center justify-center p-3 space-y-4 w-72">
                        <h2 className="font-bold leading-none text-center text-neutral text-xl">
                            Get your team access to over 5,000 top Udemy courses, anytime, anywhere.
                        </h2>
                        <Button type="primary" size="lg" text="Learn more" link="/teach"/>
                    </div>
                </BusinessMenu>

                <TeachMenu className="w-full bg-white border">
                    <div className="bg-white border flex flex-col items-center justify-center p-3 space-y-4 w-72">
                        <h2 className="font-bold leading-none text-center text-neutral text-xl">
                            Turn what you know into an opportunity and reach millions around the world.
                        </h2>
                        <Button type="primary" size="lg" text="Learn more" link="/teach"/>
                    </div>
                </TeachMenu>

                <Cart>
                    <div className="bg-white border flex flex-col items-center justify-center p-3 space-y-4 w-72">
                        <p>Your cart is empty.</p>
                        <a href="#" className="text-primary font-bold">Keep shopping</a>
                    </div>
                </Cart>
            </div>

            <div className="buttons flex justify-end space-x-3 w-2/12">
                <a href="" className="btn default w-24 h-10 hover:border-black">Log in</a>
                <a href="" className="btn primary w-24 h-10 hover:bg-neutral">Sign up</a>
            </div>
        </nav>
    )
}

export default Nav;