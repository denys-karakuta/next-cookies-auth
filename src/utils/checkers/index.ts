import type { NextRequest } from 'next/server';

import { PROTECTED_ROUTES, PROTECTED_ROUTES_AFTER_SIGNIN } from '@/constants/routes';

import env from '@/configs/.env';

import { getAuthTokenValueFromRequest } from '../getters';
import { verifyJWT } from '../jwt';

export const checkIsProtectedPath = (pathname: string): boolean => PROTECTED_ROUTES.includes(pathname);

export const checkIsProtectedPathAfterSignin = (pathname: string): boolean =>
    PROTECTED_ROUTES_AFTER_SIGNIN.includes(pathname);

export const checkIsVerifiedTokenFromRequest = async (request: NextRequest) => {
    const token = getAuthTokenValueFromRequest(request);

    try {
        await verifyJWT(token, env.JWT_SECRET_KEY);

        return true;
    } catch (error) {
        return false;
    }
};
