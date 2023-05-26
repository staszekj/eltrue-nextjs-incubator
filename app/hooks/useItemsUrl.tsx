import { useAtomValue } from "jotai";
import { useSearchParams } from "next/navigation";
import { itemsQueryAtom } from "../jotai/searchAtom";
import { getItemsApiUrl } from "../utils/getItemsUrl";

export const useItemsUrl = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const search = useAtomValue(itemsQueryAtom);
  return getItemsApiUrl(search ?? q ?? "");
};
