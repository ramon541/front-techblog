import { requestApi } from './requestApi';

//= =================================================================================
export const login = async (data: ILoginPayload) =>
    await requestApi<TLoginResponse>({
        method: 'post',
        endpoint: '/api/auth/login',
        data,
    });
