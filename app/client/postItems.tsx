import { sleep } from "@/app/utils/wait";
import { ItemType } from "../types/types";
import { Fetcher } from "swr";

export const postItems = async (url: string, { arg }: { arg: string }) => {
  try {
    const response: Response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: arg }),
    });
    await sleep(1000);

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error: unknown) {
    console.error(error);
  }
};
