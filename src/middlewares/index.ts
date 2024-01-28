import { NextMiddleware, NextResponse } from 'next/server';

type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export const chainMiddlewares = (functions: MiddlewareFactory[], index = 0): NextMiddleware => {
    const current = functions[index];

    if (current) {
        const next = chainMiddlewares(functions, index + 1);

        return current(next);
    }

    return () => NextResponse.next();
};
