import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Profile page | Current user',
    description: 'Profile of current user',
};

const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <section className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">{children}</div>
        </section>
    );
};

export default ProfileLayout;
