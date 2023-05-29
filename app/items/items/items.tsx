"use client";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { Item } from "../item/item";
import { ItemType } from "@/app/types/types";
import { useGetItems } from "@/app/hooks/useGetItems";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./items.module.css";

type ItemsProps = {
  serverData: ItemType[];
};
export const Items = ({ serverData }: ItemsProps) => {
  const dataRef = useRef<ItemType[]>(serverData);
  const { data } = useGetItems();
  if (data) {
    dataRef.current = data;
  }
  const dataWithRef = (dataRef.current).map((x) => ({
    ...x,
    ref: React.createRef<HTMLDivElement>(),
  }));

  return (
    <TransitionGroup component={null}>
      {(dataWithRef ?? serverData).map((d) => (
        <CSSTransition
          key={d.timestamp ?? d.id }
          nodeRef={d.ref}
          timeout={1000}
          classNames={{
            enter: styles.ItemEnter,
            enterActive: styles.ItemEnterActive,
            enterDone: styles.ItemEnterDone,
            exit: styles.ItemExit,
            exitActive: styles.ItemExitActive,
            exitDone: styles.ItemExitDone,
          }}
        >
          <div className={styles.item} ref={d.ref}>
            <Item item={d} />
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
