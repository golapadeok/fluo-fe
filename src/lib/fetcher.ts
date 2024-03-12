import axios, { type RawAxiosRequestHeaders } from "axios";

export const fetcher = axios.create({
	baseURL: import.meta.env.VITE_API_ENDPOINT,
});

export const setInstanceCommonHeader = ([key, value]: [
	keyof RawAxiosRequestHeaders,
	string,
]) => {
	fetcher.defaults.headers.common[key] = value;
};
