import React from 'react';

import Link from 'next/link';

const Signup = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <h1 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
                Create an account
            </h1>

            <div className="bg-white py-8 px-4 shadow sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:px-10">
                <form className="space-y-4 md:space-y-6" method="POST">
                    <div>
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your full name
                        </label>
                        <input
                            type="fullName"
                            name="fullName"
                            id="fullName"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Joe Doe"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="joe_doe@email.com"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="•••••••••••"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Create an account
                    </button>

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account?{' '}
                        <Link
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            href="/signin"
                        >
                            Sign in here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
