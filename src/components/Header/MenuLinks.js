import CSS from "./header.module.css";
import { NavLink } from "react-router-dom";

let MenuLink = () => {
  return (
    <div className={CSS.MenuLink}>
      <NavLink to="/friend" className={CSS.friend}>Friends</NavLink>
      <NavLink to="/message" className={CSS.messager}>Message</NavLink>
      <NavLink to="/find" className={CSS.find}>Find</NavLink>
      <NavLink to="/profil" className={CSS.profil}>Profil</NavLink>
    </div>
  );
};

export default MenuLink;
