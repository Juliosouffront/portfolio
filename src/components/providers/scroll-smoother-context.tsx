"use client";

import { createContext, useContext } from "react";

type ScrollSmootherContextValue = {
  isReady: boolean;
};

export const ScrollSmootherContext = createContext<ScrollSmootherContextValue>({
  isReady: false,
});

export function useScrollSmootherReady() {
  return useContext(ScrollSmootherContext).isReady;
}
