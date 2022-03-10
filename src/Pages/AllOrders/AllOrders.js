import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Spinner from '../Shared/Spinner/Spinner';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(false);
    const removeService = (id) => {
        const deleteUrl = `https://foodism.herokuapp.com/removeorder/${id}`;
        if (window.confirm("Delete this order?") === true) {
            axios.delete(deleteUrl).then((data) => {
                if (data.data.deletedCount > 0) {
                    const remaining = orders.filter(
                        (restPlan) => restPlan._id !== id
                    );
                    setOrders(remaining);
                }
            });
        }
    };
    useEffect(() => {
        const url = `https://foodism.herokuapp.com/orders`;
        axios.get(url).then((data) => {
            setOrders(data.data);
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
                            {orders ? <tbody className="bg-white divide-y divide-gray-200">
                                {orders.map((order) => (
                                    <tr key={order._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={order.userImage}
                                                        alt={order.email}
                                                    />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {order.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {order.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {order.address}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {order.city}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {order.active ? (
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
                                            {order.foodName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {order.date}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => removeService(order._id)}
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

export default AllOrders;