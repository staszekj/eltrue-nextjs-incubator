import React, { MouseEventHandler } from "react";
import { SWRConfig, unstable_serialize } from "swr";
import { Item } from "./item/item";
import { API_ITEMS_URL } from "../constants/api";
import { getQueryParams } from "../utils/getQueryParams";
import { sleep } from "../utils/wait";
import { ItemType } from "../types/types";
import { Search } from "./items/search";
import { Items } from "./items/items";
import { getItems } from "../client/getItems";
import { getItemsUrl } from "../client/getItemsUrl";
import { usePostItem } from "../hooks/usePostItems";
import { AddItemButton } from "./AddItemButtonProps";

export default async ({
  searchParams
}: {
  searchParams?: { q?: string };
}) => {
  try {
    const data = await getItems(getItemsUrl(searchParams?.q ?? ""));
    return (
      <div className="flex flex-col items-stretch p-3">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="md:w-1/3">
            <Search />
          </div>
          <div className="">
            <AddItemButton>Add new item</AddItemButton>
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
