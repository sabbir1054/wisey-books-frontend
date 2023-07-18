import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddNewBookPage from "../pages/AddNewBookPage/AddNewBookPage";
import AllBooksPage from "../pages/AllBooksPage/AllBooksPage";
import SignInPage from "../pages/AuthPage/SignInPage";
import SignUpPage from "../pages/AuthPage/SignUpPage";
import BookDetailsPage from "../pages/BookDetailsPage/BookDetailsPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import UpdateBookPage from "../pages/UpdateBookPage/UpdateBookPage";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <AllBooksPage />,
      },
      {
        path: "/books/add-books",
        element: (
          <PrivateRoute>
            <AddNewBookPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: <BookDetailsPage />,
      },

      {
        path: "/books/update-book/:id",
        element: (
          <PrivateRoute>
            <UpdateBookPage />
          </PrivateRoute>
        ),
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
