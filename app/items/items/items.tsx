"use client";
import { API_ITEMS_URL } from "@/app/constants/api";
import useSWR from "swr";
import { ItemsGetFetcher } from "../../client/itemsGetFetcher";
import { Item } from "../item/item";
import { ItemType } from "@/app/types/types";
import { useFetchItems } from "@/app/hooks/useFetchItems";

type ItemsProps = {
  serverData: ItemType[];
};
export const Items = ({ serverData }: ItemsProps) => {
  const { data } = useFetchItems();
  return (
    <>
      {(data ?? serverData).map((x) => (
        <Item key={x.id} item={x} />
      ))}
    </>
  );
};
