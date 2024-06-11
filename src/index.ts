import { Response } from 'express';

interface ApiResponse {
    status: boolean;
    message?: string;
    data?: any;
    err?: string;
}

const apiResponse = {
    success: (res: Response, statusCode?: number, msg?: string, data?: any): Response<ApiResponse> => {
        const resCode = statusCode ?? 200;
        return res.status(resCode).json({
            status: true,
            message: msg ?? 'success',
            data: data ?? {}
        });
    },

    error: (res: Response, statusCode?: number, err?: any): Response<ApiResponse> => {
        const resCode = statusCode ?? 500;
        const timestamp = new Date().toLocaleString();
        console.error(`${timestamp} [Error] :: `, err);
        return res.status(resCode).json({
            status: false,
            err: err?.toString() ? err.toString() : (err ? err : 'internal server error'),
        });
    }
};

export default apiResponse;