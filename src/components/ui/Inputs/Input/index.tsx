import React from 'react';
import { useFormContext } from 'react-hook-form';

import InputLabel from '@/components/ui/Labels/InputLabel';

type OwnProps = {
    placeholder?: HTMLInputElement['placeholder'];
    type?: HTMLInputElement['type'];
    className?: string;
    required?: boolean;
    label?: string;
    id: string;
};

const Input: React.FC<OwnProps> = (props) => {
    const { id, type = 'text', placeholder, label, required = false, className } = props;

    const { register } = useFormContext();

    const inputClassName =
        className ||
        'mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm';

    return (
        <>
            {label ? <InputLabel htmlFor={id} text={label} required={required} /> : null}

            <input className={inputClassName} placeholder={placeholder} {...register(id)} type={type} id={id} />
        </>
    );
};

export default Input;
