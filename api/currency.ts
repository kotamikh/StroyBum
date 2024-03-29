import { IBrand } from "~/types/SubjectsBrands";
import { ICurrency } from "~/types/Currency";
import { useHttpDelete, useHttpGet, useHttpPut } from "@/api/base";

const BASE_URL = "http://localhost:8000"

const ROUTES = {
  currency: BASE_URL + "/api/v1/currency"
}

const getAllCurrencies = async (): Promise<ICurrency[]> => {
  const { data, error } = await useHttpGet<IBrand[]>({ url: ROUTES.currency })
  if (data) {
    return data
  } else {
    // TODO: log error
    return []
  }
}

const deleteCurrency = async (id: number) => {
  const { data, error } = await useHttpDelete({ url: ROUTES.currency + `?id=${ id }` })
  if (data) {
    return data
  } else  {
    return []
  }
}

const insertCurrency = async (currencyName: string) => {
  const { data, error } = await useHttpPut({ url: ROUTES.currency  + `?edit=false`, body: JSON.stringify({
          name: currencyName
      })
  })
  if (data) {
    return data
  } else  {
    return []
  }
}

export const useCurrencyApi = () => {
  return {
    deleteCurrency,
    insertCurrency,
    getAllCurrencies
  }
}
