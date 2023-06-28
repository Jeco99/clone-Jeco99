import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./root";
import ErrorPage from "./pages/errorPage";
import LogInPage from "./pages/logInPage";

import SideBar_Root from "./rootSideBar";
import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import Subscriptions from "./pages/Subscriptions";

import './style/index.css'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LogInPage />,
      errorElement: <ErrorPage />
    },
    {
      path:'/root',
      element: <Root/>,
      errorElement: <ErrorPage />,
    },
    {
      path:'/pages',
      element: <SideBar_Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/pages/Home",
          element: <Home />,
        },
        {
          path:"/pages/Shorts",
          element: <Shorts />,
        },
        {
          path:"/pages/Subscriptions",
          element: <Subscriptions />, 
        }
      ]
    },
 

    // {
    //   path:"/root",
    //   element: <Root />,
    //   errorElement: <ErrorPage/>,
    // },
    // {
    //   path:"/pages",
    //   element: <Root />,
    //   errorElement: <ErrorPage/>,
    // }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)



