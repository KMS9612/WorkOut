import { atom } from "recoil";

export const LoginError = atom({
  key: "LoginError",
  default: false,
});

export const IsLogin = atom({
  key: "isLogin",
  default: false,
});
