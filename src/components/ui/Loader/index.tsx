import React from 'react';

import styles from './styles.module.css';

const Loader: React.FC = () => {
    return (
        <div className="w-full h-full bg-gray-300 fixed top-0 left-0 bg-opacity-25 z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className={styles.loader}></div>
            </div>
        </div>
    );
};

export default Loader;
