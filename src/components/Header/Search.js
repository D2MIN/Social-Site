import CSS from "./header.module.css";
let Search = ()=>{
    return(
        <div className={CSS.Search}>
            <div>
                <input className="searchInput" type="text" placeholder="Найти: "></input>
            </div>
            <div>
                <button className="button">Найти</button>
            </div>
        </div>
    );
}

export default Search