"use client";

import React, { forwardRef, useCallback, useEffect } from "react";
import { ItemType } from "@/app/types/types";
import { formatParticipants, formatStartDate } from "@/app/utils/formaters";
import { Button } from "@/app/components/button";
import { tv } from "tailwind-variants";

// const ItemButton = dynamic(() => import("@/app/components/button"), { ssr: false });

const tvLineValue = tv({
  base: "text-neutral-500 dark:text-neutral-200 transition-opacity duration-500 ease-in-out",
  variants: {
    hidden: {
      true: "opacity-0",
    },
  },
});

type ItemProps = {
  item: ItemType;
};
export const Item = forwardRef<HTMLDivElement, ItemProps>(({ item }, ref) => {
  const { name, person, category, amount, startDate, isMutating } = item;

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
    <div
      ref={ref}
      className="h-full flex flex-col justify-between rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 transition-shadow duration-300 ease-in-out hover:shadow-blue-950/50 dark:hover:shadow-blue-950"
    >
      <h5 className="mb-2 text-xl font-medium leading-tight basis-1/4 text-neutral-800 dark:text-neutral-50">
        {name}
      </h5>
      <div>
        <p className="text-base text-neutral-600 dark:text-neutral-200">
          Person:{" "}
          <span className={tvLineValue({hidden: isMutating})}>
            {person}
          </span>
        </p>
        <p className="text-base text-neutral-600 dark:text-neutral-200">
          Category:{" "}
          <span className={tvLineValue({hidden: isMutating})}>
            {category}
          </span>
        </p>
        <p className="text-base text-neutral-600 dark:text-neutral-200">
          Amount:{" "}
          <span className={tvLineValue({hidden: isMutating})}>
            {formatParticipants(amount)}
          </span>
        </p>
        <p className="text-base text-neutral-600 dark:text-neutral-200">
          Start:{" "}
          <span className={tvLineValue({hidden: isMutating})}>
            {formatStartDate(startDate)}
          </span>
        </p>
      </div>
      <div className="flex gap-3 mt-3">
        <Button onClick={handleEditClick}>Edit</Button>
        <Button onClick={handleDeleteClick}>Delete</Button>
      </div>
    </div>
  );
});
