import { sleep } from "@/app/utils/wait";
import { ItemType } from "../types/types";
import { Fetcher } from "swr";

export const getItems: Fetcher<ItemType[], string> = async (url: string) => {
  const response: Response = await fetch(url);
  await sleep(500);

  //   if (!response.ok) {
  //     throw new Error(response.statusText);
  //   }

  return await response.json();
};
