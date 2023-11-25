import { atom } from "recoil";

export const strokeSizeState = atom({
  key: "storkeSize",
  default: 10,
});

export const canvasState = atom({
  key: "canvasState",
  default: {
    canvasID: "",
  },
});

export const userState = atom<UserProps>({
  key: "userState",
  default: {
    name: "",
    email: "",
    password: "",
    profileImage: "",
    role: "USER",
  },
});

export const actionState = atom({ key: "actionState", default: false });
export const actionLoginState = atom({
  key: "actionLoginState",
  default: false,
});

export const messagesState = atom({
  key: "messagesState",
  default: [],
});

export const inputState = atom({
  key: "inputState",
  default: "",
});

export const msgState = atom({
  key: "msgState",
  default: {
    text: "",
    sender: "User", // You can replace this with the actual sender's name or ID
    timestamp: new Date().toLocaleTimeString(), // Example timestamp
  },
});

export const sendState = atom({
  key: "sendState",
  default: false,
});

export const socketActionState = atom({
  key: "socketActionState",
  default: false,
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
