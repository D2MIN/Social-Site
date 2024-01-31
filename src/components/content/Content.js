import Posts from "./Posts/Posts";
import Friends from "./Friends/Friends";
import About from "./About/About";
import PageInfo from "./PageInfo";

let Content = () => {
  return (
    <div className="user-content">
      <PageInfo />
      <div className="page">
        <About />
        <Posts />
        <Friends />
      </div>
    </div>
  );
};

export default Content;
