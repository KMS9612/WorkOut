import { atom } from "recoil";

export const ClickedRoutine = atom({
  key: "ClickedRoutine",
  default: 0,
});

export const Routines = atom({
  key: "Routines",
  default: [],
});
