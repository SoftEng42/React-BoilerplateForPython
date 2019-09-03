import axios, { AxiosInstance } from 'axios';
import { API_BASE_URL } from '../config';

const createAxiosInstance = (): AxiosInstance => axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
  xsrfHeaderName: 'X-CSRFToken',
});

export class ApiInstance {
  private static axiosInstance: AxiosInstance | null = null;
  public static getInstance = (): AxiosInstance => {
    if (!ApiInstance.axiosInstance) {
      ApiInstance.axiosInstance = createAxiosInstance()
    }

    return ApiInstance.axiosInstance;
  };
}

export const Api = ApiInstance.getInstance;
