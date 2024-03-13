'use client';

import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import useUserActions from '@/hooks/useUserActions';

import signinFormSchema, { SigninForm } from '@/validation/schemas/signin';

import InputPassword from '@/components/ui/Inputs/InputPassword';
import ErrorMessage from '@/components/ui/ErrorMessage';
import GoogleIcon from '@/components/icons/GoogleIcon';
import Input from '@/components/ui/Inputs/Input';
import Checkbox from '@/components/ui/Checkbox';
import Button from '@/components/ui/Button';

const SignInPage = () => {
    const { submitSigninUser } = useUserActions();

    const methods = useForm<SigninForm>({
        resolver: zodResolver(signinFormSchema),
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit: SubmitHandler<SigninForm> = (formData) => {
        submitSigninUser(formData);
    };

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate method="POST" className="space-y-4">
                    <div>
                        <Input
                            placeholder="Enter your email address"
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

                    <div className="flex items-center justify-between">
                        <Checkbox id="isRememberMe" label="Remember me" />

                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:underline">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <Button type="submit" text="Sign in" disabled={isSubmitting} />
                </form>
            </FormProvider>

            <div className="mt-5">
                <div className="flex items-center">
                    <hr className="flex-grow" />
                    <div className="flex-grow-0 text-sm mx-3 text dark:text-white">Or continue with</div>
                    <hr className="flex-grow" />
                </div>

                <div className="mt-5">
                    <Button type="submit" theme="white">
                        <div className="flex justify-center items-center">
                            <GoogleIcon />
                            <span className="ml-2">Google</span>
                        </div>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default SignInPage;
