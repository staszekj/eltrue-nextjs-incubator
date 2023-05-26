"use client";
import React, { MouseEventHandler, PropsWithChildren } from "react";
import { Button } from "@/app/components/button";
import { usePostItem } from "../hooks/usePostItems";

type AddItemButtonProps = PropsWithChildren;
export const AddItemButton = ({ children }: AddItemButtonProps) => {
  const { triggerPostItem } = usePostItem();
  const handleAddItem: MouseEventHandler<HTMLButtonElement> = () => {
    triggerPostItem("test");
  };
  return <Button onClick={handleAddItem}>{children}</Button>;
};
