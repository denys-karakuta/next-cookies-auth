export const ROUTES = {
    VERIFY_EMAIL: '/verify-email',
    PROFILE: '/profile',
    SIGNIN: '/signin',
    SIGNUP: '/signup',
    LOGOUT: '/logout',
    DEFAULT: '/',
};

export const PROTECTED_ROUTES = [ROUTES.VERIFY_EMAIL, ROUTES.PROFILE];

export const PROTECTED_ROUTES_AFTER_SIGNIN = [ROUTES.SIGNIN, ROUTES.SIGNUP];
