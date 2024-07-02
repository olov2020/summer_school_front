import Home from "../components/pages/home/Home.jsx";
import Login from "../components/pages/Login.jsx";
import Registration from "../components/pages/Registration.jsx";
import Account from "../components/pages/account/Account.jsx";
import Blog from "../components/pages/blog/Blog.jsx";
import Video from "../components/pages/video/Video.jsx";
import MyBlog from "../components/pages/myBlog/MyBlog.jsx";
import MyVideo from "../components/pages/myVideo/MyVideo.jsx";

import {
  MAIN_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  ACCOUNT_ROUT,
  BLOGS_ROUTE,
  MY_BLOGS_ROUTE,
  VIDEOS_ROUT,
  MY_VIDEOS_ROUT,
} from "./consts"

export const authRoutes = [
  {
    path: ACCOUNT_ROUT,
    Element: <Account/>,
  },
  {
    path: MY_BLOGS_ROUTE,
    Element: <MyBlog/>,
  },
  {
    path: MY_VIDEOS_ROUT,
    Element: <MyVideo/>,
  },
]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Element: <Home/>
  },
  {
    path: SIGN_IN_ROUTE,
    Element: <Login/>,
  },
  {
    path: SIGN_UP_ROUTE,
    Element: <Registration/>,
  },
  {
    path: BLOGS_ROUTE,
    Element: <Blog/>,
  },
  {
    path: VIDEOS_ROUT,
    Element: <Video/>,
  },
]