import { useFetch } from '#app';
import { HTTPMethod } from "h3";
import { FetchError, SearchParameters } from "ofetch";
import { KeysOf, PickFrom } from "#app/composables/asyncData";
import { AvailableRouterMethod, NitroFetchRequest } from "nitropack";

const BASE_URL = "http://localhost:8000"

export type ResponseWithError<T> = {
    data: null
    error: string,
} | {
    data: NonNullable<PickFrom<T extends void ? unknown : T, KeysOf<T extends void ? unknown : T>>>,
    error: null,
}

export type RequestParameters = {
    url: string,
    method: HTTPMethod,
    params?: SearchParameters,
    body?: any,
}

const useCustomFetch = async <T>(requestParams: RequestParameters): Promise<ResponseWithError<T>> => {
    const { data, error } = await useFetch<T, FetchError, NitroFetchRequest, AvailableRouterMethod<NitroFetchRequest>>(requestParams.url, {
        baseURL: BASE_URL,
        method: requestParams.method,
        params: requestParams.params,
        body: requestParams.body,
    })

    if (error.value) {
        const errorName = error.value?.name || "undefined name"
        const errorMessage = error.value?.message || "undefined message"

        return {
            data: null,
            error: `[${errorName}]${errorMessage}`
        }
    } else {
        if (data.value) {
            return {
                data: data.value,
                error: null,
            }
        }
    }

    return {
        data: null,
        error: `Falsy error and data when executing ${requestParams.method} request to '${requestParams.url}'`
    }
}

export const useHttpGet = async <T>(requestParams: Omit<RequestParameters, "method">): Promise<ResponseWithError<T>> => {
    return useCustomFetch<T>({
        method: "GET",
        ...requestParams
    })
}

export const useHttpPost = async <T>(requestParams: Omit<RequestParameters, "method">): Promise<ResponseWithError<T>> => {
    return useCustomFetch<T>({
        method: "POST",
        ...requestParams
    })
}

export const useHttpDelete = async <T>(requestParams: Omit<RequestParameters, "method">): Promise<ResponseWithError<T>> => {
    return useCustomFetch<T>({
        method: "DELETE",
        ...requestParams
    })
}