import useSWRMutation from "swr/mutation";
import { ItemType } from "../types/types";
import { deleteItems } from "../client/deleteItems";
import { useItemsUrl } from "./useItemsUrl";
import { useItemsStore } from "./useItemsStore";

export const useDeleteItem = () => {
  const url = useItemsUrl();
  const diableMutating = useItemsStore((state) => state.disableMutating);
  const { trigger, isMutating } = useSWRMutation<
    ItemType,
    undefined,
    string,
    string
  >(url, deleteItems);
  return {
    triggerDeleteItem: (id: string) => {
      return trigger(id, {
        optimisticData: (data: ItemType[] = []): ItemType[] =>
          data.filter((item) => item.id !== id),
        populateCache: (item, data: ItemType[] = []): ItemType[] =>
          data.filter((item) => item.id !== id),
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
