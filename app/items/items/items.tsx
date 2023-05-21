"use client";
import React, { RefObject } from "react";
import { Item } from "../item/item";
import { ItemType } from "@/app/types/types";
import { useGetItems } from "@/app/hooks/useGetItems";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import * as styles from "./items.module.css";


type ItemsProps = {
  serverData: ItemType[];
};
export const Items = ({ serverData }: ItemsProps) => {
  const { data } = useGetItems();
  if (!data) {
    return null;
  }
  const dataWithRef = data.map((x) => ({
    ...x,
    ref: React.createRef<HTMLDivElement>(),
  }));

  return (
    <TransitionGroup component={null}>
      {(dataWithRef ?? serverData).map((x) => (
        <CSSTransition
          key={x.id}
          nodeRef={x.ref}
          timeout={1000}
          classNames={"item"}
        >
          <div className="item" ref={x.ref}>
            <Item item={x} />
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
