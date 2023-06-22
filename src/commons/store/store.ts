import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: { name: "", birth: "", phone: "", authNum: "" },
});

export const loginUserState = atom<string | null>({
  key: "loginUserState",
  default: "",
});
