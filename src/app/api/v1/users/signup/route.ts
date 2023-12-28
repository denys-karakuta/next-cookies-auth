import bcryptjs from 'bcryptjs';

import { NextRequest, NextResponse } from 'next/server';

import connectDB from '@/configs/db';

import { SignupForm } from '@/validation/schemas/signup';

import User from '@/models/User';

connectDB();

export const POST = async (req: NextRequest) => {
    try {
        const { username, email, password }: SignupForm = await req.json();

        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ message: 'User already exists' }, { status: 409 });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const createdUser = await new User({
            password: hashedPassword,
            username,
            email,
        }).save();

        return NextResponse.json({ createdUser }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};
