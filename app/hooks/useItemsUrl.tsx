import { useSearchParams } from "next/navigation";
import { getItemsApiUrl } from "../utils/getItemsUrl";
import { useItemsStore } from "./useItemsStore";

export const useItemsUrl = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const searchQuery = useItemsStore((state) => state.searchQuery);
  const query = searchQuery ?? q ?? ""
  return getItemsApiUrl(query);
};
