import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignInPage from "../pages/AuthPage/SignInPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
