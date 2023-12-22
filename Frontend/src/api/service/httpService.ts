import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class HttpService {
  public client: AxiosInstance;
  public readonly urlPrefix: string;

  constructor(urlPrefix: string) {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        'Content-Type': 'application/json',
        // Add JWT token to every request
        Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,

      },
    });
    this.urlPrefix = urlPrefix;
  }

  public async get<T>(url: string, config?: AxiosRequestConfig<T>): Promise<T> {
    const response = await this.client.get<T>(`${this.urlPrefix}/${url}`, config);
    return response.data;
  }

  protected async post<T>(url: string, data: unknown, config?: AxiosRequestConfig<T>): Promise<T> {
    const response = await this.client.post<T>(`${this.urlPrefix}/${url}`, data, config);
    return response.data;
  }

  protected async put<T>(url: string, data: unknown, config?: AxiosRequestConfig<T>): Promise<T> {
    const response = await this.client.put<T>(`${this.urlPrefix}/${url}`, data, config);
    return response.data;
  }

  protected async delete<T>(url: string): Promise<T> {
    const response = await this.client.delete<T>(`${this.urlPrefix}/${url}`);
    return response.data;
  }
}

export default HttpService;
