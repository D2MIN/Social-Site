import Posts from "./Body/Posts/Posts";
import Friends from "./Body/Friends/Friends";
import About from "./Body/About/About";
import PageInfo from "./Body/Head/PageInfo";
import Message from "./Body/Message/Massege";
import { BrowserRouter, Route, Routes } from "react-router-dom";

let Content = () => {
  return (
    <div className="user-content">
      <Routes>
        <Route path="/profil" Component={PageInfo} />
      </Routes>
      <div className="page">
        <Routes>
          <Route path="/profil" Component={About} />
        </Routes>
        <div className="content-wrapper">
          <Routes>
            <Route path="/message" Component={Message} />
            <Route path="/profil" Component={Posts}/>
          </Routes>
        </div>
        <Routes>
          <Route path="/profil" Component={Friends} />
        </Routes>
      </div>
    </div>
  );
};

export default Content;
