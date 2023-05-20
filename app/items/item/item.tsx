"use client";

import React, { useCallback, useEffect } from "react";
import { ItemType } from "@/app/types/types";
import { formatParticipants, formatStartDate } from "@/app/utils/formaters";
import { ItemButton } from "@/app/components/button";
import dynamic from "next/dynamic";

// const ItemButton = dynamic(() => import("@/app/components/button"), { ssr: false });

type ItemProps = {
  item: ItemType;
};
export const Item = ({ item }: ItemProps) => {
  const { name, person, category, amount, startDate } = item;

  const handleEditClick = useCallback(() => {
    const newName = prompt("Enter new item name:", name);
    if (newName) {
      console.log("!!! handle edit click");
    }
  }, [name]);

  const handleDeleteClick = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Do you really want to delete this item '${name}?'`)) {
      console.log("!!! handle delete click");
    }
  }, [item, name]);

  //USE i18n here for localization
  return (
    <div>
      <div className="h-full flex flex-col justify-between rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 transition-shadow duration-300 ease-in-out hover:shadow-blue-950/50 dark:hover:shadow-blue-950">
        <h5 className="mb-2 text-xl font-medium leading-tight basis-1/4 text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <div>
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            Person:{" "}
            <span className="text-neutral-500 dark:text-neutral-200">
              {person}
            </span>
          </p>
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            Category:{" "}
            <span className="text-neutral-500 dark:text-neutral-200">
              {category}
            </span>
          </p>
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            Amount:{" "}
            <span className="text-neutral-500 dark:text-neutral-200">
              {formatParticipants(amount)}
            </span>
          </p>
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            Start:{" "}
            <span className="text-neutral-500 dark:text-neutral-200">
              {formatStartDate(startDate)}
            </span>
          </p>
        </div>
        <div className="flex gap-3 mt-3">
          <ItemButton onClick={handleEditClick}>Edit</ItemButton>
          <ItemButton onClick={handleDeleteClick}>Delete</ItemButton>
        </div>
      </div>
    </div>
  );
};
