import useSWRMutation from "swr/mutation";
import { ItemType } from "../types/types";
import { postItems } from "../client/postItems";
import { useItemsUrl } from "./useItemsUrl";
import { useItemsStore } from "./useItemsStore";
import { time } from "console";

export const usePostItem = () => {
  const url = useItemsUrl();
  const diableMutating = useItemsStore((state) => state.disableMutating)
  const { trigger, isMutating } = useSWRMutation<
    ItemType,
    undefined,
    string,
    string
  >(url, postItems);
  return {
    triggerPostItem: (name: string) => {
      const timestamp = String(new Date().getTime());
      const newItem: ItemType = {
        timestamp: timestamp,
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
          { ...item, timestamp },
          ...data,
        ],
        onSuccess: () => {
          diableMutating();
        },
        onError: () => {
          diableMutating();
        },
        revalidate: false,
      });
    },
    isMutating,
  };
};
