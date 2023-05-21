import { API_ITEMS_URL } from "@/app/constants/api";
import { getQueryParams } from "../utils/getQueryParams";

export const getItemsUrl = (search: string) =>
  `${API_ITEMS_URL}?${getQueryParams(search)}`;
