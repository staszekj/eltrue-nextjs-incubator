import { API_ITEMS_URL } from "../constants/api";
import useSWRMutation from "swr/mutation";
import { ItemType } from "../types/types";
import { getItems } from "../client/getItems";
import { getItemsUrl } from "../client/getItemsUrl";
import { postItems } from "../client/postItems";

export const usePostItem = () => {
  const { trigger, isMutating } = useSWRMutation<
    ItemType,
    undefined,
    string,
    string
  >(getItemsUrl(""), postItems);
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
          item,
          ...data,
        ],
        revalidate: false,
      });
    },
    isMutating,
  };
};
