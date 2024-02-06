import CSS from "./chat.module.css";
let Chat = props => {
    let stutus = 'find';
    let src_img = props.img;
    if(props.img == ""){
        stutus = CSS.none;
        src_img = "";
    }
  return (
    <div className={CSS.dialog}>
      <div className={`${CSS.avatar} ${stutus}`}>
        <img src={`${src_img}`} />
      </div>
      <div className={CSS.dialog__wrapper_right}>
        <div className={CSS.name}>
          {props.name}
        </div>
        <div className={CSS.last_massege}>
          {props.massege}
        </div>
      </div>
    </div>
  );
};

export default Chat;
