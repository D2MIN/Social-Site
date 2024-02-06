import { NavLink } from "react-router-dom";

let NuvPosts = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink to="../profil" className="activ">
            All pablic
          </NavLink>
        </li>
        <li>
          <NavLink to="../profil_foto" className="pasiv">
            Photos
          </NavLink>
        </li>
        <li>
          <NavLink to="../profil_posts" className="pasiv">
            Posts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NuvPosts;
