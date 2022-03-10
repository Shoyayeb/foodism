import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Spinner from '../Shared/Spinner/Spinner';

const UserOrders = () => {
    const [foodData, setFoodData] = useState([]);
    const { user } = useAuth();
    const removeService = (id) => {
        const deleteUrl = `https://foodism.herokuapp.com/removeorder/${id}`;
        if (window.confirm("Delete this order?") === true) {
            axios.delete(deleteUrl).then((data) => {
                if (data.data.deletedCount > 0) {
                    const remaining = foodData.filter(
                        (restPlan) => restPlan._id !== id
                    );
                    setFoodData(remaining);
                }
            });
        }
    };
    useEffect(() => {
        const url = `https://foodism.herokuapp.com/usersorder/${user.uid}`;
        axios.get(url).then((data) => {
            setFoodData(data.data);
            console.log('====================================');
            console.log(data.data);
            console.log('====================================');
        });
    }, []);
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Address
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Food
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Time
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Remove</span>
                                    </th>
                                </tr>
                            </thead>
                            {foodData ? <tbody className="bg-white divide-y divide-gray-200">
                                {foodData.map((food) => (
                                    <tr key={food._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {food.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {food.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {food.address}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {food.city}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {food.active ? (
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-700">
                                                    Active
                                                </span>
                                            ) : (
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-700">
                                                    Finished
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {food.foodName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {food.date}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => removeService(food._id)}
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody> : <Spinner />}
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserOrders;