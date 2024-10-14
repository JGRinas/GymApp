import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Constants from "expo-constants";
import { getJWT } from "../modules/auth/infrastructure/token";

const BASE_URL_GYM_APP = process.env.EXPO_PUBLIC_GYM_APP_API_URL;

// --- Handlers ---
const requestHandler = async (request: InternalAxiosRequestConfig) => {
  try {
    const token = await getJWT();
    if (token) request.headers.Authorization = `Bearer ${token}`;

    request.headers.set("x-api-key", process.env.EXPO_PUBLIC_APIKEY);
    const userAgent = await Constants.getWebViewUserAgentAsync();
    request.headers.set("user-agent", userAgent);
  } catch (error) {
    console.error("Error al configurar los headers de la petición", error);
  }
  return request;
};

const responseHandler = (response: AxiosResponse) => {
  if (response.status === 401) {
    console.warn("Token expirado o no válido, redirigiendo a login...");
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

type InstanceType = "AUTH" | "USER" | "PLAN";

const PREFIX = {
  BASE_URL_GYM_APP,
  AUTH: process.env.EXPO_PUBLIC_PREFIX_AUTH,
  USER: process.env.EXPO_PUBLIC_PREFIX_USER,
  PLAN: process.env.EXPO_PUBLIC_PREFIX_PLAN,
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
  USER: createInstance("USER"),
  PLAN: createInstance("PLAN"),
};

export { API, PREFIX };
