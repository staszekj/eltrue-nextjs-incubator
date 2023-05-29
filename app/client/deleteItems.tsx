import { sleep } from "@/app/utils/wait";
import { API_ITEMS_URL } from "@/app/constants/api";

export const deleteItems = async (url: string, { arg }: { arg: string }) => {
  try {
    const newURL = `${API_ITEMS_URL}/${arg}`;
    const response: Response = await fetch(newURL, {
      method: "DELETE",
    });
    await sleep(1000);

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};
