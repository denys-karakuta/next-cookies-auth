import type { NextRequest } from 'next/server';

import env from '@/configs/.env';

import { verifyJWT } from '../jwt';

export const getAuthTokenValueFromRequest = (request: NextRequest) =>
    request.cookies.get(env.COOKIE_TOKEN_NAME)?.value || '';

export const getDataFromToken = async (request: NextRequest) => {
    try {
        const token = getAuthTokenValueFromRequest(request);

        const decodedToken = await verifyJWT(token, env.JWT_SECRET_KEY);

        return decodedToken.id;
    } catch (error: any) {
        return null;
    }
};
