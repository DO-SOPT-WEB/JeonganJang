import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PATH } from "./routes";
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";
import Mypage from "../pages/mypage/Mypage";
import React from "react";

export const router = createBrowserRouter([
  {
    path: PATH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PATH.SIGNUP,
    element: <SignupPage />,
  },
  {
    path: PATH.MYPAGE,
    element: <Mypage />,
  },
]);

const Router = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default Router;
