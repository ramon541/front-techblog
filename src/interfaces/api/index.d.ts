interface IApiResponse<T = unknow> {
    success: boolean;
    statusCode: number;
    data: T | null;
    message?: string;
    error?: string | string[];
}

// Success Response
interface IApiSuccessResponse<T> extends IApiResponse<T> {
    success: true;
    data: T;
    message: string;
    error?: never;
}

// Error Response
interface IApiErrorResponse extends IApiResponse<null> {
    success: false;
    data: null;
    error: string | string[];
    message?: never;
}
