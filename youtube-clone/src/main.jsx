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
import Home from "./pages/Home/Home";
import Shorts from "./pages/Home/Shorts";
import Subscriptions from "./pages/Home/Subscriptions";
import Library from "./pages/Library/Library";
import History from "./pages/Library/History";
import WatchLater from "./pages/Library/WatchLater";
import LikedVideos from "./pages/Library/LikedVideos";

import FashionBeauty from "./pages/Explore/FashionBeauty";
import Gaming from "./pages/Explore/Gaming"
import Movies from "./pages/Explore/Movies"
import Music from "./pages/Explore/Music"
import News from "./pages/Explore/News"
import Sports from "./pages/Explore/Sports"
import Trending from "./pages/Explore/Trending"

import './style/index.css'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LogInPage />,
      errorElement: <ErrorPage />,  
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
        },
        {
          path:"/pages/Library",
          element: <Library />, 
        },
        {
          path:"/pages/History",
          element: <History />, 
        },
        {
          path:"/pages/WatchLater",
          element: <WatchLater />, 
        },
        {
          path:"/pages/LikedVideos",
          element: <LikedVideos />, 
        },
        {
          path:"/pages/FashionBeauty",
          element: <FashionBeauty />, 
        },
        {
          path:"/pages/Gaming",
          element: <Gaming />, 
        },
        {
          path:"/pages/Movies",
          element: <Movies />, 
        },
        {
          path:"/pages/Music",
          element: <Music />, 
        },
        {
          path:"/pages/News",
          element: <News />, 
        },
        {
          path:"/pages/Sports",
          element: <Sports />, 
        },
        {
          path:"/pages/Trending",
          element: <Trending />, 
        }
      ]
    },
  ]
)


// const router = createBrowserRouter(
//  createRoutesFromElements(
//   <Route   
//     path='/'
//     element= {<LogInPage />}
//     errorElement= {<ErrorPage />}
//     >
//       <Route errorElement={<ErrorPage />}>
//         <Route
//           path='root'
//           element= {<Root/>}
//           errorElement= {<ErrorPage />}
//          >
//         </Route>
//       </Route>

//   </Route>
//  )
// );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)



