import mongoose from 'mongoose';

import env from '@/configs/.env';

const connectDB = async () => {
    const MONGODB_URL = env.MONGODB_URL;

    try {
        await mongoose.connect(MONGODB_URL);

        const connection = mongoose.connection;

        connection.on('on', () => {
            console.log('Connected to MongoDB successfully');
        });

        connection.on('error', (error) => {
            console.log('Connection to MongoDB had been failed', error);
            process.exit();
        });
    } catch (error) {
        console.log('Failed to connect to MongoDB', error);
    }
};

export default connectDB;
