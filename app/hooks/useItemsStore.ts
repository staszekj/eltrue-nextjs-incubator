import { create } from "zustand";
import { getAppUrl } from "../utils/getItemsUrl";

type ItemsStore = {
  isItemsMutating: boolean;
  searchQuery: string | null;
  setSearchQuery: (query: string) => void;
  enableMutating: () => void;
  disableMutating: () => void;
};

// todo immer#produce shoud be used here
export const useItemsStore = create<ItemsStore>((set) => ({
  isItemsMutating: false,
  searchQuery: null,
  setSearchQuery: (query) =>
    set((state) => {
      history.replaceState(null, "", `${getAppUrl(query)}`);
      return { ...state, searchQuery: query };
    }), 
  enableMutating: () => set((state) => ({ ...state, isItemsMutating: true })),
  disableMutating: () => set((state) => ({ ...state, isItemsMutating: false })),
}));
