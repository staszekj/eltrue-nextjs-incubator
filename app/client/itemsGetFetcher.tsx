import { API_ITEMS_URL } from "@/app/constants/api";
import { sleep } from "@/app/utils/wait";
import { getQueryParams } from "../utils/getQueryParams";
import { ItemType } from "../types/types";
import { Fetcher } from "swr";

export const getItemsUrl = (search: string) =>
  `${API_ITEMS_URL}?${getQueryParams(search)}`;

export const ItemsGetFetcher: Fetcher<ItemType[], string> = async (
  url: string
) => {
  const response: Response = await fetch(url);
  await sleep(500);

  //   if (!response.ok) {
  //     throw new Error(response.statusText);
  //   }

  return await response.json();
};
