import { inject } from "vue";
import { UserContext } from "./interface";

export const userSymbolKey = Symbol("user");

export const useUser = () => {
  const user = inject<UserContext>(userSymbolKey);

  if (user === undefined)
    throw Error("useUser 必须在 UserProvider 的子组件内使用");

  return user;
};
