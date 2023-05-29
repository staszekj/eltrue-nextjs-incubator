"use client";
import React, { MouseEventHandler, PropsWithChildren } from "react";
import { Button } from "@/app/components/button";
import { usePostItem } from "../hooks/usePostItems";
import { creatingItemStatusRWAtom } from "../jotai/searchAtom";
import { useSetAtom } from "jotai";

type AddItemButtonProps = PropsWithChildren;
export const AddItemButton = ({ children }: AddItemButtonProps) => {
  const { triggerPostItem } = usePostItem();
  const writeStatus = useSetAtom(creatingItemStatusRWAtom);
  const handleAddItem: MouseEventHandler<HTMLButtonElement> = () => {
    triggerPostItem("test");
    writeStatus('creating');
  };
  return <Button onClick={handleAddItem}>{children}</Button>;
};
