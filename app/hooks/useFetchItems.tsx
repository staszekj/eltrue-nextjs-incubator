import { API_ITEMS_URL } from "../constants/api";
import useSWR from "swr";
import { ItemType } from "../types/types";
import { ItemsGetFetcher, getItemsUrl } from "../client/itemsGetFetcher";

export const useFetchItems = () => {
  return useSWR<ItemType[]>(getItemsUrl(""), ItemsGetFetcher);
};
