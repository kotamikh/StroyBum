import { useFetch } from '#app';
import { KeysOf, PickFrom } from "#app/composables/asyncData";
import { HTTPMethod } from "h3";
import { FetchError } from "ofetch";
import { AvailableRouterMethod, NitroFetchRequest } from "nitropack";

const BASE_URL = "http://localhost:8000"

type ResponseWithError<T> = {
    response: null
    error: string,
} | {
    response: NonNullable<PickFrom<T extends void ? unknown : T, KeysOf<T extends void ? unknown : T>>>,
    error: null,
}

const useCustomFetch = async <T>(url: string, method: HTTPMethod, body?: any): Promise<ResponseWithError<T>> => {
    const { data, error } = await useFetch<T, FetchError, NitroFetchRequest, AvailableRouterMethod<NitroFetchRequest>>(url, {
        method: method,
        baseURL: BASE_URL,
        body: body,
    })

    if (error.value) {
        const errorName = error.value?.name || "undefined name"
        const errorMessage = error.value?.message || "undefined message"

        return {
            response: null,
            error: `[${errorName}]${errorMessage}`
        }
    } else {
        if (data.value) {
            return {
                response: data.value,
                error: null,
            }
        }
    }

    return {
        response: null,
        error: `Falsy error and data when executing ${method} request to '${url}'`
    }
}

export const useHttpGet = async <T>(url: string): Promise<ResponseWithError<T>> => {
    return useCustomFetch(url, "GET")
}

export const useHttpPost = async <T>(url: string): Promise<ResponseWithError<T>> => {
    return useCustomFetch(url, "POST")
}

export const useHttpDelete = async <T>(url: string): Promise<ResponseWithError<T>> => {
    return useCustomFetch(url, "DELETE")
}