import useSWRMutation from "swr/mutation";
import { ItemType } from "../types/types";
import { postItems } from "../client/postItems";
import { useItemsUrl } from "./useItemsUrl";
import { creatingItemStatusRWAtom } from "../jotai/searchAtom";
import { useAtom, useSetAtom } from "jotai";

export const usePostItem = () => {
  const url = useItemsUrl();
  const writeStatus = useSetAtom(creatingItemStatusRWAtom);
  const { trigger, isMutating } = useSWRMutation<
    ItemType,
    undefined,
    string,
    string
  >(url, postItems);
  writeStatus(isMutating ? "creating" : null);
  return {
    triggerPostItem: (name: string) => {
      const timestamp = String(new Date().getTime());
      const newItem: ItemType = {
        id: timestamp,
        name,
        amount: { current: 0, max: 0 },
        category: "",
        person: "",
        startDate: "",
        isMutating: true,
      };

      return trigger(name, {
        optimisticData: (data: ItemType[] = []): ItemType[] => [
          newItem,
          ...data,
        ],
        populateCache: (item: ItemType, data: ItemType[] = []): ItemType[] => [
          { ...item, id: timestamp },
          ...data,
        ],
        revalidate: false,
      });
    },
    isMutating,
  };
};
