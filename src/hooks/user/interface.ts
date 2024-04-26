export interface UserInfo {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface UserContext {
  getUser: () => UserInfo;
  setUser: (user: UserInfo) => void;
}
