import axios from 'axios';
import React, { useState } from 'react';
import useAuth from './../../Hooks/useAuth';

const AddFood = () => {
    const [foodData, setRegisterData] = useState({});
    const [added, setAdded] = useState(false)
    const { setError } = useAuth();
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const data = { ...foodData };
        data[field] = value;
        setRegisterData(data);
    };
    const handleAddFood = (e) => {
        e.preventDefault();
        if (
            foodData === {} || !foodData.foodname || !foodData.label || !foodData.imagelink || !foodData.price || !foodData.description
        ) {
            setError("Please enter your information correctly");
        } else {
            axios
                .post("https://foodism.onrender.com/addfood", foodData)
                .then(function (res) {
                    setAdded(true);
                })
                .catch(function (error) {
                    setError(error);
                });
        }
    }
    return (
        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Add New Food</h3>
                        <p className="mt-1 text-sm text-gray-600">Use a link for image for the food.</p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleAddFood}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6">
                                        <label htmlFor="foodname" className="block text-sm font-medium text-gray-700">
                                            Food Name
                                        </label>
                                        <input
                                            onChange={handleOnChange}
                                            type="text"
                                            name="foodname"
                                            id="foodname"
                                            required
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="label" className="block text-sm font-medium text-gray-700">
                                            Label
                                        </label>
                                        <select
                                            onChange={handleOnChange}
                                            id="label"
                                            name="label"
                                            required
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>Popular</option>
                                            <option>Hot</option>
                                            <option>New</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="imagelink" className="block text-sm font-medium text-gray-700">
                                            Food Image
                                        </label>
                                        <input
                                            onChange={handleOnChange}
                                            type="url"
                                            name="imagelink"
                                            id="imagelink"
                                            required
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                            Price
                                        </label>
                                        <input
                                            onChange={handleOnChange}
                                            type="number"
                                            name="price"
                                            id="price"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className='col-span-6 '>
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <textarea
                                            onChange={handleOnChange}
                                            id="description"
                                            name="description"
                                            rows={3}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            placeholder="brief description for the food"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFood;