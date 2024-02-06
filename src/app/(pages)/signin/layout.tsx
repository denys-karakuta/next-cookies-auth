import React from 'react';

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sign in | Login into your account',
    description: 'Login into your account',
};

const SignInLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <section className="min-h-screen bg-gray-100 flex flex-col justify-center relative">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>

                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                    Or&nbsp;
                    <Link href="/signup" className="font-medium text-blue-600 hover:underline">
                        create an account
                    </Link>
                </p>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">{children}</div>
                </div>
            </div>
        </section>
    );
};

export default SignInLayout;
