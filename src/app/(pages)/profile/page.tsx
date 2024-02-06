'use client';

import React, { useEffect, useState } from 'react';

import useUserActions from '@/hooks/useUserActions';

import Button from '@/components/ui/Button';

const ProfilePage = () => {
    const { logoutUser, getCurrentUser } = useUserActions();
    const [userInfo, setUserInfo] = useState<unknown>();

    useEffect(() => {
        getCurrentUser().then((user) => setUserInfo(user));
    }, []);

    const displayUserInfo = JSON.stringify(userInfo, null, 4);

    return (
        <>
            <pre className="mb-3">{displayUserInfo}</pre>

            <hr className="h-px my-8 bg-gray-800 border-0" />

            <Button onClick={logoutUser} className="mt-3" text="Logout" />
        </>
    );
};

export default ProfilePage;
