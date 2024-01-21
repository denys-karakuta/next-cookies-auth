'use client';

import React from 'react';

import useToggleVisibility from '@/hooks/useToggleVisibility';

import EyeSlashIcon from '@/components/icons/EyeSlashIcon';
import EyeIcon from '@/components/icons/EyeIcon';
import Input from '../Input';

import styles from './styles.module.css';

type OwnProps = {
    required?: boolean;
    label?: string;
    id: string;
};

const InputPassword: React.FC<OwnProps> = (props) => {
    const { id, label, required = true } = props;

    const { isVisible, toggleVisibility } = useToggleVisibility();

    const eyeIcon = isVisible ? <EyeIcon /> : <EyeSlashIcon />;
    const inputType = isVisible ? 'text' : 'password';

    return (
        <div className="relative">
            <Input id={id} type={inputType} label={label} required={required} placeholder="••••••••••" />

            <div className={styles.visibility} onClick={toggleVisibility}>
                {eyeIcon}
            </div>
        </div>
    );
};

export default InputPassword;
