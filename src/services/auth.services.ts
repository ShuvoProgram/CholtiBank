import { authKey } from "@/constants/storageKeys";
import { decodedToken } from "@/utils/jwt";
import { USER_ROLE } from "@/constants/role";
import {
  getFromSessionStorage,
  setToSessionStorage,
} from "@/utils/sessionStorage";
import { IJwtDecoded } from "@/types/user";

export const storeUserInfo = (accessToken: string) => {
  return setToSessionStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromSessionStorage(authKey);

  if (authToken) {
    const decodeData = decodedToken(authToken);

    return decodeData;
  } else {
    return "";
  }
};

export const removeUserInfo = (key: string) => {
  return sessionStorage.removeItem(key);
};

export const isUserLoggedIn = () => {
  const authToken = getFromSessionStorage(authKey);

  if (authToken) {
    const userInfo = decodedToken(authToken) as IJwtDecoded;

    if (userInfo?.role === USER_ROLE.USER) {
      return true;
    }
  }
};
export const isAdminLoggedIn = () => {
  const authToken = getFromSessionStorage(authKey);

  if (authToken) {
    const userInfo = decodedToken(authToken) as IJwtDecoded;

    if (userInfo?.role === USER_ROLE.ADMIN) {
      return true;
    }
  }
};
