import React from 'react';

import CheckboxLabel from '../Labels/CheckboxLabel';
import Input from '../Inputs/Input';

type OwnProps = {
    label?: string;
    id: string;
};

const Checkbox: React.FC<OwnProps> = (props) => {
    const { id, label } = props;

    return (
        <div className="flex items-center">
            <Input
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                type="checkbox"
                id={id}
            />

            {label ? <CheckboxLabel htmlFor={id} text={label} /> : null}
        </div>
    );
};

export default Checkbox;
