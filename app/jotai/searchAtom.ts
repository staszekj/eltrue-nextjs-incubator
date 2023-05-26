import { atom } from "jotai";
import { getAppUrl, getItemsApiUrl } from "../utils/getItemsUrl";

export const itemsQueryAtom = atom<string | null>(null);
export const loadingItemsStatusAtom = atom<"loading" | null>(null);
export const creatingItemStatusAtom = atom<"creating" | null>(null);

export const itemsQueryWAtom = atom(null, (get, set, arg: string) => {
  history.replaceState(null, "", `${getAppUrl(arg)}`);
  set(itemsQueryAtom, arg);
});


export const loadingItemsStatusRWAtom = atom(
    (get) => get(loadingItemsStatusAtom),
    (get, set, arg: "loading" | null) => set(loadingItemsStatusAtom, arg)
  );

export const creatingItemStatusRWAtom = atom(
  (get) => get(creatingItemStatusAtom),
  (get, set, arg: "creating" | null) => set(creatingItemStatusAtom, arg)
);

export const itemAPIInProgressRAtom = atom(
  (get) =>
    get(loadingItemsStatusAtom) === "loading" ||
    get(creatingItemStatusAtom) === "creating"
);
