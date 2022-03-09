import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../Assets/1.svg';
const NotFound = () => {
    return (

        <main className="bg-white overflow-hidden h-screen relative">
            <header className="absolute top-0 left-0 right-0 z-20">
                <nav className="container mx-auto px-6 md:px-12 py-4">
                    <div className="flex justify-between items-center">
                        <div className="md:hidden">
                            <button className="text-gray-800 focus:outline-none">
                                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                            </button>
                        </div>

                    </div>
                </nav>
            </header>
            <div className="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
                <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
                    <div className="w-full mb-16 md:mb-8 text-center lg:text-left">
                        <h1 className="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl my-12 md:my-12 text-gray-700">
                            Sorry, this page isn&#x27;t available
                        </h1>
                        <Link to="/home" className="px-4 py-4 text-white bg-red-600 rounded-md my-12">
                            Go back home
                        </Link>
                    </div>
                    <div className="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
                        <img src={errorImage} alt="error" />
                    </div>
                </div>
            </div>
        </main>

    );
};

export default NotFound;