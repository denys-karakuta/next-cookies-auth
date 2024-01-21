import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { get, useFormContext } from 'react-hook-form';

type OwnProps = {
    id: string;
};

const ErrorMessage: React.FC<OwnProps> = (props) => {
    const { id } = props;

    const {
        formState: { errors },
    } = useFormContext();

    const error = get(errors, id);

    if (isEmpty(error)) {
        return null;
    }

    return <p className="mt-1 text-red-500 text-xs italic">{error.message}</p>;
};

export default ErrorMessage;
