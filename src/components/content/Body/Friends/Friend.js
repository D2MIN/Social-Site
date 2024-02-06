import CSS from "./friend.module.css";

let Friend = (promis) => {
  return (
    <div className={CSS["user-friend"]}>
      <div className={CSS["friend"]}>
        <div className={CSS["img"]}>
          <a href="#"><img src={promis.src} /></a>
        </div>
        <div className={CSS["right"]}>
          <div className={CSS["name-friend"]}><a href="#">{promis.name}</a></div>
          <div className={CSS["id-friend"]}> <a href="#">{promis.id}</a></div>
            <br/>
          <button className={CSS["follow"]}><strong>follow</strong></button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
