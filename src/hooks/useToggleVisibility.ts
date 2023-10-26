'use client';

import { useState } from 'react';

const useToggleVisibility = () => {
    const [isVisible, setVisible] = useState(false);

    const toggleVisibility = () => setVisible(!isVisible);

    return {
        isVisible,
        toggleVisibility,
    };
};

export default useToggleVisibility;
