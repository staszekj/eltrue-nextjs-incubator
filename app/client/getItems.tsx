import { sleep } from "@/app/utils/wait";
import { ItemType } from "../types/types";
import { Fetcher } from "swr";

export const getItems: Fetcher<ItemType[], string> = async (url: string) => {
  const response: Response = await fetch(url);
  if (typeof window !== "undefined") {
    await sleep(3000);
  }

  return await response.json();
};
