import { NextRequest, NextResponse } from 'next/server';

import { getDataFromToken } from '@/utils/getters';

import connectDB from '@/configs/db';

import User from '@/models/User';

connectDB();

export const GET = async (req: NextRequest) => {
    try {
        const userId = await getDataFromToken(req);

        const user = await User.findById(userId).select('-password -__v');

        return NextResponse.json({ user }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};
