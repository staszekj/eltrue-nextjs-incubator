import { API_ITEMS_URL } from "@/app/constants/api";
import { getQueryParams } from "./getQueryParams";

export const getItemsApiUrl = (search: string) =>
  `${API_ITEMS_URL}?${getQueryParams(search)}`;

export const getAppUrl = (search: string) => `${window.location.pathname}?${getQueryParams(search)}`  
