import mongoose from 'mongoose';

import USER_ROLES from '@/constants/roles';

const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
        unique: true,
        trim: true,
    },
    email: {
        lowercase: true,
        required: true,
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        required: true,
        type: String,
    },
    role: {
        enum: [USER_ROLES.ADMIN, USER_ROLES.USER],
        default: USER_ROLES.USER,
        type: String,
    },
    isVerified: {
        default: false,
        type: Boolean,
    },
    createdAt: {
        default: Date.now,
        type: Date,
    },
    forgotPasswordTokenExpiry: Date,
    forgotPasswordToken: String,
    verifyTokenExpiry: Date,
    verifyToken: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
