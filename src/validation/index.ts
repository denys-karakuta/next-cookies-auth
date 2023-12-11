import { AnyZodObject } from 'zod';

export const validateZodSchema = (params: { schema: AnyZodObject; data: unknown }) => {
    const { schema, data } = params;

    const result = schema.safeParse(data);

    if (!result.success) {
        return {
            data: null,
            error: result.error.flatten(),
        };
    }

    return {
        data: result.data,
        error: null,
    };
};
