import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server';

import * as checkUtils from '@/utils/checkers';

import { ROUTES } from '@/constants/routes';

export const withAuth = (nextMiddleware: NextMiddleware) => async (request: NextRequest, event: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    const isProtectedPathAfterSignin = checkUtils.checkIsProtectedPathAfterSignin(pathname);
    const isProtectedPath = checkUtils.checkIsProtectedPath(pathname);

    const isVerifiedToken = await checkUtils.checkIsVerifiedTokenFromRequest(request);

    if (isProtectedPath && !isVerifiedToken) {
        return NextResponse.redirect(new URL(ROUTES.SIGNIN, request.nextUrl));
    }

    if (isProtectedPathAfterSignin && isVerifiedToken) {
        return NextResponse.redirect(new URL(ROUTES.DEFAULT, request.nextUrl));
    }

    return nextMiddleware(request, event);
};
