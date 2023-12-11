import { z } from 'zod';

export type SignupForm = z.infer<typeof signupFormSchema>;

const signupFormSchema = z
    .object({
        username: z
            .string()
            .trim()
            .min(1, { message: 'This field is required' })
            .min(3, { message: 'Username must be at least 3 characters long' }),

        email: z.string().toLowerCase().trim().email({ message: 'Invalid email format' }),

        password: z
            .string()
            .min(1, { message: 'You must enter a password' })
            .min(6, { message: 'Password is too short' }),

        confirmPassword: z.string().min(1, { message: 'You must repeat your password' }),
    })
    .strict() // do not allow unrecognized keys

    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

export default signupFormSchema;
