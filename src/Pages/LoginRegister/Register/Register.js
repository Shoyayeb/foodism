import { LockClosedIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { setError, createUserByEmail, error, socialSignIn } = useAuth();
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
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id="login-register-bg">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">Create Your New Account</h2>
                        <p className="mt-2 text-center text-sm text-gray-100">
                            Or{' '}
                            <Link to="/login" className="font-medium text-red-600 hover:text-red-500">
                                Sign in to your account
                            </Link>
                        </p>
                    </div>
                    <div className='flex justify-between items-center'>
                        {/* twitter button */}
                        <button onClick={() => socialSignIn("twitter")} className=' inline-flex justify-center shadow-sm hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="65"
                                height="65"
                                viewBox="6.75 9.5 31.5 27"
                                style={{
                                    backgroundColor: "rgba(1, 11, 18, 0.15)",
                                    borderRadius: "20%",
                                    borderColor: "rgba(0, 0, 0, 0.25)",
                                    borderStyle: "groove",
                                    borderWidth: 2,
                                }}
                            >
                                <path
                                    fill="rgba(72,109,255,1)"
                                    d="M30.526 16.846a4.51 4.51 0 001.893-2.513 8.355 8.355 0 01-2.736 1.102A4.194 4.194 0 0026.539 14c-2.38 0-4.307 2.035-4.307 4.544 0 .356.036.703.11 1.034-3.58-.19-6.754-1.996-8.88-4.747a4.724 4.724 0 00-.583 2.285c0 1.576.76 2.967 1.917 3.783a4.154 4.154 0 01-1.953-.568v.056c0 2.202 1.484 4.04 3.458 4.455a4.01 4.01 0 01-1.137.16c-.277 0-.548-.027-.81-.08.548 1.804 2.139 3.12 4.025 3.155-1.476 1.219-3.333 1.944-5.351 1.944-.348 0-.691-.02-1.028-.062A11.747 11.747 0 0018.604 32c7.926 0 12.257-6.924 12.257-12.929 0-.197-.002-.394-.01-.587A9.006 9.006 0 0033 16.13a8.257 8.257 0 01-2.474.715z"
                                ></path>
                            </svg></button>
                        {/* google button */}
                        <button onClick={() => socialSignIn("google")} className=' inline-flex justify-center shadow-sm hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="65"
                                height="65"
                                viewBox="3.321 9.25 40.072 25.5"
                                style={{
                                    backgroundColor: "rgba(1, 11, 18, 0.15)",
                                    borderRadius: "20%",
                                    borderColor: "rgba(0, 0, 0, 0.25)",
                                    borderStyle: "groove",
                                    borderWidth: 2,
                                }}
                            >
                                <path
                                    fill="rgba(248,45,45,1)"
                                    d="M18.485 20.317v3.366s3.26-.004 4.587-.004c-.719 2.182-1.836 3.37-4.587 3.37-2.784 0-4.956-2.26-4.956-5.05 0-2.788 2.172-5.049 4.956-5.049 1.472 0 2.422.519 3.294 1.241.698-.699.64-.799 2.415-2.48a8.445 8.445 0 00-5.709-2.211C13.8 13.5 10 17.305 10 22c0 4.694 3.8 8.5 8.485 8.5 7.004 0 8.716-6.11 8.149-10.183h-8.149zm15.29.168V17.54h-2.1v2.945H28.65v2.104h3.025v3.03h2.1v-3.03h2.94v-2.104h-2.94z"
                                ></path>
                            </svg>
                        </button>
                        {/* github button */}
                        <button onClick={() => socialSignIn("github")} className=' inline-flex justify-center shadow-sm hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-md'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="65"
                                height="65"
                                viewBox="4 3.976 36 36.146"
                                style={{
                                    backgroundColor: "rgba(1, 11, 18, 0.15)",
                                    borderRadius: "20%",
                                    borderColor: "rgba(0, 0, 0, 0.25)",
                                    borderStyle: "groove",
                                    borderWidth: 2,
                                }}
                            >
                                <path
                                    fill="rgba(255,250,250,1)"
                                    d="M10 22.304c0 5.436 3.438 10.048 8.207 11.675.6.113.819-.267.819-.593 0-.292-.01-1.066-.017-2.092-3.337.743-4.042-1.65-4.042-1.65-.546-1.422-1.332-1.8-1.332-1.8-1.09-.764.082-.748.082-.748 1.205.087 1.838 1.268 1.838 1.268 1.071 1.88 2.81 1.337 3.493 1.022.109-.795.419-1.336.762-1.645-2.665-.31-5.467-1.365-5.467-6.08 0-1.344.468-2.442 1.236-3.302-.123-.312-.535-1.562.118-3.256 0 0 1.007-.332 3.3 1.26.957-.272 1.983-.409 3.003-.413 1.02.004 2.046.141 3.005.414 2.29-1.593 3.297-1.26 3.297-1.26.654 1.693.242 2.943.12 3.255.768.86 1.232 1.958 1.232 3.302 0 4.726-2.805 5.766-5.478 6.071.43.38.814 1.131.814 2.278 0 1.646-.014 2.973-.014 3.376 0 .33.216.712.825.591C30.565 32.347 34 27.74 34 22.304 34 15.51 28.627 10 21.999 10 15.373 10 10 15.509 10 22.304z"
                                ></path>
                            </svg>
                        </button>
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