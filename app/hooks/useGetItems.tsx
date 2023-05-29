import useSWR from "swr";
import { ItemType } from "../types/types";
import { getItems } from "../client/getItems";
import { useItemsUrl } from "./useItemsUrl";

export const useGetItems = () => {
  const url = useItemsUrl();
  const swr = useSWR<ItemType[]>(url, getItems, {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return swr;
};
