import CSS from "./post.module.css";

let Post = props => {
  let flag = "true";
  if(props.post_img == "none"){
    flag = CSS.false;
  }

  return (
    <div className={CSS["post"]}>
      
      <div className={CSS["post-head"]}>
        <div className={CSS["avatar"]}>
          <img src={props.user_img} />
        </div>
        <div className={CSS["name"]}>{props.name}</div>
      </div>
      <div className={CSS["content"]}>
        <p>
          {props.post_title}
        </p>
        <div className={`${CSS["img-wrapper"]} ${flag}`}>
          <img src={props.post_img} />
        </div>
      </div>
      <div className={CSS["likes"]}>
        {props.likes} <button>❤️</button>
      </div>
    
    </div>
  );
};

export default Post;
