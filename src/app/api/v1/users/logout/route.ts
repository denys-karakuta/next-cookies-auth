import { NextResponse } from 'next/server';

import env from '@/configs/.env';

export const GET = () => {
    try {
        const response = NextResponse.json(true, { status: 200 });

        // Also we can use: response.cookies.set('token', '', { httpOnly: true, expires: new Date(0) });
        response.cookies.delete(env.COOKIE_TOKEN_NAME);

        return response;
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};
