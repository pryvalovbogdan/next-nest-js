import { AxiosRequestConfig } from 'axios';

export type RequestTypeWithData = [url: string, data?: unknown, config?: AxiosRequestConfig<unknown> | undefined];
export type RequestTypeWithoutData = [url: string, config?: AxiosRequestConfig<unknown> | undefined];
