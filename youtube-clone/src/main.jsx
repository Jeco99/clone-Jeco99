import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./root";
import ErrorPage from "./pages/errorPage";
import LogInPage from "./pages/logInPage";

import './style/index.css'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LogInPage />,
      errorElement: <ErrorPage />
    },
    {
      path:"/root",
      element: <Root />,
      errorElement: <ErrorPage/>
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)



