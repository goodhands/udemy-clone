import React from 'react';
import Tab from '../components/Tab';

const Home = () => {
    return (
        <section>
            <div className="home-bg-teaser w-full p-10">
                <div className="bg-white border shadow w-5/12 p-10">
                    <h2 className="text-4xl text-neutral font-bold">Cyber deals.</h2>
                    <h2 className="text-4xl text-neutral font-bold">Real skills.</h2>
                    <p className="text-xl mt-2 text-neutral">
                        Courses as low as $9.99 through Dec. 4. Plus, get free access to a <a href="#" className="text-primary underline">live webinar!</a>
                    </p>
                </div>
            </div>
            <div className="my-14 px-5 catalog">
                <h2 className="text-2xl text-neutral font-bold">
                    The world's largest selection of courses
                </h2>
                <p className="text-neutral text-base">
                    Choose from 130,000 online video courses with new additions published every month
                </p>
                <Tab tabs={[{title: 'Excel', id: '001'}, {title: 'Python', id: '002'}]} />
            </div>
        </section>
    )
}

export default Home;