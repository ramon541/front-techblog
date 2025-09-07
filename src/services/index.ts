import { type AxiosRequestConfig, type AxiosResponse } from 'axios';
import api from './api';

//= =================================================================================
export async function requestApi<T>(config: {
    endpoint: string;
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    data?: unknown;
}): Promise<IApiSuccessResponse<T>> {
    const axiosConfig: AxiosRequestConfig = {
        url: config.endpoint,
        method: config.method,
        data: config.data,
    };
    const response: AxiosResponse<IApiSuccessResponse<T>> = await api.request<
        IApiSuccessResponse<T>
    >(axiosConfig);

    return response.data;
}

//= =================================================================================
export const login = async (data: ILoginPayload) =>
    await requestApi<TLoginResponse>({
        method: 'post',
        endpoint: '/api/auth/login',
        data,
    });
