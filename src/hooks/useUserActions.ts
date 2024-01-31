import { useRouter } from 'next/navigation';

import * as userRequests from '@/services/api/rest/users';

import type { SignupForm } from '@/validation/schemas/signup';
import type { SigninForm } from '@/validation/schemas/signin';

import { ROUTES } from '@/constants/routes';

import useAbortController from './useAbortController';

const useUserActions = () => {
    const { getAbortControllerSignal } = useAbortController();
    const router = useRouter();

    const submitSignupUser = async (formData: SignupForm) => {
        try {
            await userRequests.signupUserRequest({ requestBody: formData }, { signal: getAbortControllerSignal() });

            router.refresh(); // to avoid page's cache, because middleware doesn't work
            router.push(ROUTES.SIGNIN);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const submitSigninUser = async (formData: SigninForm) => {
        try {
            await userRequests.signinUserRequest({ requestBody: formData }, { signal: getAbortControllerSignal() });

            router.refresh(); // to avoid page's cache, because middleware doesn't work
            router.push(ROUTES.PROFILE);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const logoutUser = async () => {
        try {
            await userRequests.logoutUserRequest();

            router.refresh(); // to avoid page's cache, because middleware doesn't work
            router.push(ROUTES.DEFAULT);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const getCurrentUser = async () => {
        try {
            const { data } = await userRequests.getCurrentUserRequest();

            return data;
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return {
        submitSignupUser,
        submitSigninUser,
        getCurrentUser,
        logoutUser,
    };
};

export default useUserActions;
