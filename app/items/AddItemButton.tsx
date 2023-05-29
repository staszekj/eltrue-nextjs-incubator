"use client";
import React, {
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
} from "react";
import { Button } from "@/app/components/button";
import { usePostItem } from "../hooks/usePostItem";
import { useItemsStore } from "../hooks/useItemsStore";

type AddItemButtonProps = PropsWithChildren;
export const AddItemButton = ({ children }: AddItemButtonProps) => {
  const { triggerPostItem } = usePostItem();
  const enableMutating = useItemsStore((state) => state.enableMutating);

  const handleAddItem: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      const newName = prompt("Enter new item name:");
      if (newName) {
        triggerPostItem(newName);
        enableMutating();
      }
    }, [enableMutating, triggerPostItem]);
  return <Button onClick={handleAddItem}>{children}</Button>;
};
