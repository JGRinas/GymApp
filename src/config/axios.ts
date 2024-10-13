import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Constants from "expo-constants";

const BASE_URL_GYM_APP = process.env.EXPO_PUBLIC_GYM_APP_API_URL;

// --- Handlers ---
const requestHandler = async (request: InternalAxiosRequestConfig) => {
  try {
    //@ts-ignore
    request.headers.set("x-api-key", process.env.EXPO_PUBLIC_APIKEY);
    const userAgent = await Constants.getWebViewUserAgentAsync();
    //@ts-ignore
    request.headers.set("user-agent", userAgent);
  } catch {
    console.error("error on set request headers");
  }
  return request;
};

const responseHandler = (response: AxiosResponse) => {
  if (response.status === 401) {
    //TODO: Should redirect to /login
  }
  return response;
};

const errorHandler = (error: AxiosError) => {
  return Promise.reject(error);
};

export function responseErrorHandler(error: unknown) {
  if (isAxiosError(error)) {
    if (error.response?.status === 401) console.error("Unauthorized", error);

    if (error.response?.status === 403) console.error("Forbidden", error);

    if (error.response?.status === 404) console.error("Not Found", error);

    if (error.response?.status === 429)
      console.error("Too many request", error);

    if (error.response?.status === 500) console.error("Server error", error);
  }
  return Promise.reject(error);
}

export function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError | undefined)?.isAxiosError ?? false;
}

// --- Interceptors for axios instances ---
function addInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
  );
  instance.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => responseErrorHandler(error)
  );
}

type InstanceType = "AUTH";

const PREFIX = {
  BASE_URL_GYM_APP,
  AUTH: process.env.EXPO_PUBLIC_PREFIX_AUTH,
};

const createInstance = (type: InstanceType) => {
  const instance = axios.create({
    baseURL: `${BASE_URL_GYM_APP}/${PREFIX[type]}`,
    withCredentials: true,
  });

  addInterceptors(instance);
  return instance;
};

const API = {
  AUTH: createInstance("AUTH"),
};

export { API, PREFIX };
