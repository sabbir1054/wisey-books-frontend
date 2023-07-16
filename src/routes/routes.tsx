import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignInPage from "../pages/AuthPage/SignInPage";
import SignUpPage from "../pages/AuthPage/SignUpPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
export default routes;
