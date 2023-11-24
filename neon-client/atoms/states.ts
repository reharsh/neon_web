import { atom } from "recoil";

export const strokeSizeState = atom({
  key: "storkeSize",
  default: 10,
});

export const strokeColorState = atom({
  key: "strokeColor",
  default: "#fff",
});

export const currToolState = atom({
  key: "currTool",
  default: "brush",
});

export const downloadImageState = atom({
  key: "downloadImage",
  default: false,
});

export const isUndoState = atom({
  key: "isUndo",
  default: false,
});

export const isRedoState = atom({
  key: "isRedo",
  default: false,
});
