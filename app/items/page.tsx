import React from "react";
import { SWRConfig, unstable_serialize } from "swr";
import { Item } from "./item/item";
import { API_ITEMS_URL } from "../constants/api";
import { getQueryParams } from "../utils/getQueryParams";
import { sleep } from "../utils/wait";
import { ItemType } from "../types/types";
import { Search } from "./items/search";
import { Items } from "./items/items";
import { ItemsGetFetcher, getItemsUrl } from "../client/itemsGetFetcher";

type PageProps = {
  fallback: Record<string, ItemType[]>;
};
export default async ({ fallback }: PageProps) => {
  try {
    const data = await ItemsGetFetcher(getItemsUrl(""));

    return (
      <div className="flex flex-col items-stretch p-3">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="md:w-1/3">
            <Search />
          </div>
          <div className="">
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
              data-testid="deleteButton"
            >
              Add new item
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-5 md:grid-cols-3">
          <Items serverData={data} />
        </div>
      </div>
    );
  } catch (error: unknown) {
    console.error(error);
  }
};
