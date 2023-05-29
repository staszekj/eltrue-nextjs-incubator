"use client";
import React, { MouseEventHandler, PropsWithChildren } from "react";
import { Button } from "@/app/components/button";
import { usePostItem } from "../hooks/usePostItems";
import { useItemsStore } from "../hooks/useItemsStore";

type AddItemButtonProps = PropsWithChildren;
export const AddItemButton = ({ children }: AddItemButtonProps) => {
  const { triggerPostItem } = usePostItem();
  const enableMutating = useItemsStore((state) => state.enableMutating)
  const handleAddItem: MouseEventHandler<HTMLButtonElement> = () => {
    triggerPostItem("test");
    enableMutating();
  };
  return <Button onClick={handleAddItem}>{children}</Button>;
};
