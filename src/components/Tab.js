import React, { useEffect, useState } from 'react';

const Tab = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0);
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        setCourses([]);
        
        // setCourses(e.target.dataset.index);
    }, [activeTab])

    function handleClick(e){
        //remove all active 'states'
        e.target.parentElement.childNodes.forEach(e => e.classList.remove('border-b-4'));

        //set activeTab
        setActiveTab(e.target.dataset.index);

        //set active 'state'
        e.target.classList.add(['border-b-4'], ['border-primary']);
    }

    return (
        <div>
            <ul className="border-b-2 flex flex-row my-8 space-x-10">
               { tabs.map(tab => (
                   <li 
                        className="font-bold text-primary pb-2 cursor-pointer"
                        key={tab.id}
                        onClick={ (e) => handleClick(e)}
                        data-index={tab.id}
                    >
                       {tab.title}
                    </li>
               )) }
            </ul>
            <div>
                {
                    tabs.map(tab => (
                        <div key={tab.id} style={{ display: activeTab == tab.id ? 'flex' : 'none' }}>
                            {tab.title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tab;
