import MenuLink from "./MenuLinks.js";
import Search from "./Search.js";

let Header = ()=> {
    return (
        <div className="Header">
            <MenuLink/>
            <Search/>
        </div>
    );
}

export default Header;