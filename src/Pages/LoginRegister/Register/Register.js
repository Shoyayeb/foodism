import { LockClosedIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { setError, createUserByEmail, error } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const data = { ...registerData };
        data[field] = value;
        setRegisterData(data);
    };

    const emailRegister = () => {
        createUserByEmail(
            registerData.email,
            registerData.password,
            registerData.name
        ).then((result) => {
            navigate(redirect_uri);
        });
    };
    const handleRegister = (e) => {
        e.preventDefault();
        if (
            registerData === {} ||
            !registerData.email ||
            !registerData.password ||
            !registerData.name
        ) {
            setError("Please enter your information correctly");
        } else {
            emailRegister();
        }
    }
    return (
        <>
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id="login">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">Create Your New Account</h2>
                        <p className="mt-2 text-center text-sm text-gray-100">
                            Or{' '}
                            <Link to="/login" className="font-medium text-red-600 hover:text-red-500">
                                Sign in to your account
                                <div>
                                    {error ? error : ""}
                                </div>
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleRegister}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    onChange={handleOnChange}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    onChange={handleOnChange}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={handleOnChange}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-red-300 group-hover:text-red-400" aria-hidden="true" />
                                </span>
                                Sign up
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Register;