import React, { MouseEventHandler } from "react";
import { Items } from "./items/items";
import { getItems } from "../client/getItems";
import { getItemsApiUrl } from "../utils/getItemsUrl";

type ItemsPageProps = {
  searchParams?: { q?: string };
};
export default async ({ searchParams }: ItemsPageProps) => {
  try {
    const data = await getItems(getItemsApiUrl(searchParams?.q ?? ""));
    return (
      <div className="grid grid-cols-1 gap-2 mt-5 md:grid-cols-3">
        <Items serverData={data} />
      </div>
    );
  } catch (error: unknown) {
    console.error(error);
  }
};
