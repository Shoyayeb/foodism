import { ArrowRightIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './../../Shared/Spinner/Spinner';

const Foods = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const url = `https://foodism.onrender.com/foods`;
        axios.get(url).then((data) => {
            console.log('====================================');
            console.log(data.data);
            console.log('====================================');
            setLoading(false);
            setServices(data.data);
        });
    }, []);
    return (
        <div className="bg-white" id="foods">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Hottest Food In Your Area</h2>
                {loading ? (
                    <Spinner />
                ) : <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {services.map((product) => (
                        <div key={product._id} className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src={product.imagelink}
                                    alt={product.foodname}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link to={`/order/${product._id}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.foodname}
                                        </Link>
                                    </h3>
                                    {product.label === "Popular" ? <span className="mt-1 px-2 py-1  text-sm rounded text-white  bg-pink-600 font-medium">
                                        {product.label}
                                    </span> : ""}
                                    {product.label === "Hot" ? <span className="mt-1 px-2 py-1  text-sm rounded text-white  bg-orange-600 font-medium">
                                        {product.label}
                                    </span> : ""}
                                    {product.label === "New" ? <span className="mt-1 px-2 py-1  text-sm rounded text-white  bg-green-600 font-medium">
                                        {product.label}
                                    </span> : ""}

                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}$</p>
                            </div>
                        </div>
                    ))}
                    <div className="group relative">
                        <div className="w-full text-4xl font-bold min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none text-gray-600 hover:text-gray-800 flex flex-col justify-center items-center p-10">
                            <ArrowRightIcon />
                            <span >Show More</span>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <Link to="/foods">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>}

            </div>
        </div>
    );
};

export default Foods;