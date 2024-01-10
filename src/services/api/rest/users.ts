import { AxiosRequestConfig } from 'axios';

import api from '@/configs/axios';

export const signupUserRequest = ({ requestBody }, config?: AxiosRequestConfig) => {
    return api.post('/v1/users/signup', requestBody, config);
};

export const signinUserRequest = ({ requestBody }, config?: AxiosRequestConfig) => {
    return api.post('/v1/users/signin', requestBody, config);
};

export const logoutUserRequest = (config?: AxiosRequestConfig) => {
    return api.get('/v1/users/logout', config);
};

export const getCurrentUserRequest = (config?: AxiosRequestConfig) => {
    return api.get('/v1/users/me', config);
};
