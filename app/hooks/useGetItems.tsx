import { API_ITEMS_URL } from "../constants/api";
import useSWR from "swr";
import { ItemType } from "../types/types";
import { getItems } from "../client/getItems";
import { getItemsUrl } from "../client/getItemsUrl";

export const useGetItems = () => {
  return useSWR<ItemType[]>(getItemsUrl(""), getItems);
};
