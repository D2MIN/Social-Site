import MenuLink from "./MenuLinks.js";
import Search from "./Search.js";
import CSS from "./header.module.css";

let Header = ()=> {
    return (
        <div className={CSS.Header}>
            <MenuLink/>
            <Search/>
        </div>
    );
}

export default Header;