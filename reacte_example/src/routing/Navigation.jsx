import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../components/pages/home/Home.jsx";
import Blog from "../components/pages/blog/Blog.jsx";
import Video from "../components/pages/video/Video.jsx";
import Account from "../components/pages/account/Account.jsx";
import NotFound from "../components/pages/NotFound.jsx";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation