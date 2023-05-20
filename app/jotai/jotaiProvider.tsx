"use client";

import { Provider, createStore } from "jotai";
import { PropsWithChildren } from "react";

const jotaiStore = createStore();

export const JotaiProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={jotaiStore}>{children}</Provider>;
};
