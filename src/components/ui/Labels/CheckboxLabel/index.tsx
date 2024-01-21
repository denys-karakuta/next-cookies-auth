import React from 'react';

type OwnProps = {
    htmlFor: string;
    text: string;
};

const CheckboxLabel: React.FC<OwnProps> = (props) => {
    const { htmlFor, text } = props;

    return (
        <label htmlFor={htmlFor} className="ml-2 block text-sm text-gray-900 hover:cursor-pointer">
            {text}
        </label>
    );
};

export default CheckboxLabel;
