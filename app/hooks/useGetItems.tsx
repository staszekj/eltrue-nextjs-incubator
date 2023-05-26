import useSWR from "swr";
import { ItemType } from "../types/types";
import { getItems } from "../client/getItems";
import { useItemsUrl } from "./useItemsUrl";
import { useSetAtom } from "jotai";
import { loadingItemsStatusAtom } from "../jotai/searchAtom";

export const useGetItems = () => {
  const setLoadingSearchStatus = useSetAtom(loadingItemsStatusAtom);
  const url = useItemsUrl();
  const swr = useSWR<ItemType[]>(url, getItems, {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  setLoadingSearchStatus(swr.isLoading ? "loading" : null);
  return swr;
};
