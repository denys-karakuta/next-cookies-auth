import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

export const signJWT = (tokenPayload: JWTPayload, secret: string): Promise<string> => {
    const iat = Math.floor(Date.now() / 1000);
    const expires = iat + 60 * 60; // one hour

    return new SignJWT({ ...tokenPayload })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(secret));

    // when use 'MAX_COOKIE_AGE' bad behavior --> JWTExpired: "exp" claim timestamp check failed
    // .setExpirationTime(MAX_COOKIE_AGE || expires)
};

export const verifyJWT = async (token: string, secret: string): Promise<JWTPayload> => {
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
        // run some checks on the returned payload, perhaps you expect some specific values

        return payload;
    } catch (error: any) {
        throw new Error(error);
    }
};
