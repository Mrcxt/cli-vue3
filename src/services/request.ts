import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosAdapter,
  Cancel,
  CancelToken,
  CancelTokenSource,
  Canceler,
} from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "",
  headers: { "Content-Type": "application/json" },
  timeout: 20 * 1000,
  withCredentials: false, // 是否携带cookie
});
//
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    token && Object.assign(config.headers, { serviceToken: token });
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
//
instance.interceptors.response.use(
  (res: AxiosResponse) => {
    const { data } = res;
    const { code, errors, status, message } = data;
    return data;
  },
  (error: AxiosError) => {
    if (error.response?.data?.status === 401) {
      //
    }
    return Promise.reject(error.response); //
  }
);

export const get = (url: string, params = {}, config = {}): Promise<never> => {
  return instance.get(url, {
    params,
    ...config,
  });
};
export const post = (url: string, data = {}, config = {}): Promise<never> => {
  return instance.post(url, data, config);
};
export const put = (url: string, data = {}, config = {}): Promise<never> => {
  return instance.put(url, data, config);
};
export const _delete = (
  url: string,
  params = {},
  config = {}
): Promise<never> => {
  return instance.delete(url, {
    params,
    ...config,
  });
};

//
export default instance;
