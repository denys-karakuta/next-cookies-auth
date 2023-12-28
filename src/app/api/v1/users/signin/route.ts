import bcryptjs from 'bcryptjs';

import { NextRequest, NextResponse } from 'next/server';

import connectDB from '@/configs/db';
import env from '@/configs/.env';

import signinFormSchema, { SigninForm } from '@/validation/schemas/signin';
import { validateZodSchema } from '@/validation';

import { MAX_COOKIE_AGE } from '@/constants';

import { signJWT } from '@/utils/jwt';

import User from '@/models/User';

connectDB();

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();

        const { data, error } = validateZodSchema({ schema: signinFormSchema, data: body });

        if (error) {
            return NextResponse.json(error, { status: 400 });
        }

        const { email, password } = data as SigninForm;

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: 'User does not exist' }, { status: 404 });
        }

        // check if password is correct
        const isValidPassword = await bcryptjs.compare(password, user.password);

        if (!isValidPassword) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
        }

        // create token payload
        const tokenPayload = {
            username: user.username,
            email: user.email,
            id: user._id,
        };

        // create token
        const token = await signJWT(tokenPayload, env.JWT_SECRET_KEY);

        const response = NextResponse.json({ message: 'Signin successful' }, { status: 200 });

        response.cookies.set(env.COOKIE_TOKEN_NAME, token, {
            secure: process.env.NODE_ENV === 'production',
            maxAge: MAX_COOKIE_AGE,
            sameSite: 'strict',
            httpOnly: true,
            path: '/',
        });

        return response;
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};
