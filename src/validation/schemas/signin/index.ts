import { z } from 'zod';

export type SigninForm = z.infer<typeof signinFormSchema>;

const signinFormSchema = z
    .object({
        email: z
            .string()
            .trim()
            .min(1, { message: 'You must enter your email' })
            .email({ message: 'Invalid email format' }),

        password: z.string().min(1, { message: 'You must enter your password' }),

        isRememberMe: z.boolean().optional(),
    })
    .strict(); // do not allow unrecognized keys;

export default signinFormSchema;
