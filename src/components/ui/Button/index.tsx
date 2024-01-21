import React from 'react';
import clsx from 'clsx';

type OwnProps = {
    disabled?: HTMLButtonElement['disabled'];
    type?: HTMLButtonElement['type'];
    children?: React.ReactNode;
    theme?: 'blue' | 'white';
    className?: string;
    text?: string;

    onClick?: () => void;
};

const Button: React.FC<OwnProps> = (props) => {
    const { type = 'button', theme = 'blue', className, text, disabled, onClick, children } = props;

    const buttonBlueThemeClassNames = clsx(
        'w-full min-w-50 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-500',
        className,
    );

    const buttonWhiteThemeClassNames = clsx(
        'w-full items-center block px-10 py-3 text-base font-medium text-center text-blue-600 transition duration-300 ease-in-out transform border-2 border-white shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:shadow-none disabled:bg-gray-500',
        className,
    );

    const buttonClassNames = clsx({
        [buttonWhiteThemeClassNames]: theme === 'white',
        [buttonBlueThemeClassNames]: theme === 'blue',
    });

    return (
        <button onClick={onClick} className={buttonClassNames} disabled={disabled} type={type}>
            {text}
            {children}
        </button>
    );
};

export default Button;
