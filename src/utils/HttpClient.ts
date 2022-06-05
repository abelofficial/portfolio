import axios, { AxiosInstance } from "axios";

export abstract class HttpClientBase {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string, token: string) {
    this.instance = axios.create({
      baseURL,
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
  }
}
