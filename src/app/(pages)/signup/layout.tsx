import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign up | Create an account',
    description: 'Creating a new account',
};

const SignUpLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <section className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Create an account</h2>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">{children}</div>
                </div>
            </div>
        </section>
    );
};

export default SignUpLayout;
