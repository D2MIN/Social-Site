import NuvPosts from "./NuvPosts";
import { Route, Routes } from "react-router-dom";
import AllPosts from "./AllPosts.js";
import Post from "./Post.js";

let Posts = () => {
  return (
    <div className="user-posts">
      <NuvPosts/>
      <Routes>
        <Route path="/2" Component={AllPosts} />
      </Routes>
      <AllPosts/>
    </div>
  );
};

export default Posts;

// user_img, name, post_title, post_img, likes
