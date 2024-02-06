'use client';

import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from 'next/link';

import useUserActions from '@/hooks/useUserActions';

import signupFormSchema, { SignupForm } from '@/validation/schemas/signup';

import InputPassword from '@/components/ui/Inputs/InputPassword';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Input from '@/components/ui/Inputs/Input';
import Button from '@/components/ui/Button';

const SignUpPage = () => {
    const { submitSignupUser } = useUserActions();

    const methods = useForm<SignupForm>({
        resolver: zodResolver(signupFormSchema),
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit: SubmitHandler<SignupForm> = (formData) => {
        submitSignupUser(formData);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate method="POST" className="space-y-4">
                <div>
                    <Input id="username" placeholder="joe_doe" label="Username" required={true} />

                    <ErrorMessage id="username" />
                </div>

                <div>
                    <Input
                        placeholder="joe_doe@email.com"
                        label="Email address"
                        required={true}
                        type="email"
                        id="email"
                    />

                    <ErrorMessage id="email" />
                </div>

                <div>
                    <InputPassword id="password" label="Password" />

                    <ErrorMessage id="password" />
                </div>

                <div>
                    <InputPassword id="confirmPassword" label="Confirm password" />

                    <ErrorMessage id="confirmPassword" />
                </div>

                <Button type="submit" text="Create an account" disabled={isSubmitting} />

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{' '}
                    <Link className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/signin">
                        Sign in here
                    </Link>
                </p>
            </form>
        </FormProvider>
    );
};

export default SignUpPage;
