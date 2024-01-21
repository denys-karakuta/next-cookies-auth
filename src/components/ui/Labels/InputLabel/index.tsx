import React from 'react';
import clsx from 'clsx';

type OwnProps = {
    required?: boolean;
    htmlFor: string;
    text: string;
};

const InputLabel: React.FC<OwnProps> = (props) => {
    const { htmlFor, text, required = false } = props;

    const labelClassNames = clsx('block text-sm font-medium text-gray-700', { 'required-label': required });

    return (
        <label htmlFor={htmlFor} className={labelClassNames}>
            {text}
        </label>
    );
};

export default InputLabel;
