import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import AccountantDetailsPage from "../pages/AccountantDetailsPage/AccountantDetailsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/accountant/:name",
            element: <AccountantDetailsPage />,
            loader: ({ params }) =>
            fetch(`${import.meta.env.VITE_API_URL}/accountant/${params.name}`),
          },
          
        ]
    },
    {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
  ]);


  export default router;