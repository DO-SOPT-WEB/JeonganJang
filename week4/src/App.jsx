import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignupPage from "./pages/signup/SignupPage";
import LoginPage from "./pages/login/LoginPage";
import Mypage from "./pages/mypage/Mypage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/mypage/:userId",
    element: <Mypage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
