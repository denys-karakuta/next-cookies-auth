import { z } from 'zod';

const envSchema = z.object({
    COOKIE_TOKEN_NAME: z.string().min(1),
    JWT_SECRET_KEY: z.string().min(1),
    MONGODB_URL: z.string().min(1),
});

const env = envSchema.parse(process.env);

export default env;