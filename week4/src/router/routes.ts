const STATIC = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
};

const DYNAMIC = {
  MYPAGE: "/mypage/:userId",
};

export const PATH = {
  ...STATIC,
  ...DYNAMIC,
} as const;
