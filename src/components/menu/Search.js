import React from 'react';

const Search = () => {
    return (
        <div 
            className="bg-ud-gray border border-gray-400 flex flex-row h-12 items-center justify-between outline-none rounded-full w-6/12">
            <form 
                onSubmit={ 
                    (e) => e.preventDefault()
                } 
                className="flex w-full">
                <button type="submit" className="outline-none px-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </button>
                <input
                    type="text"
                    className={`bg-transparent outline-none w-10/12`}
                    placeholder="Search for anything"
                />
            </form>
        </div>
    )
}

export default Search;