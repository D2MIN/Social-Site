import Post from "./Post";

let Posts = ()=>{
    return(
        <div className="user-posts">
            <div className="menu">
                <ul>
                    <li><a href="#" className="activ">All pablesh</a></li>
                    <li><a href="#" className="no-activ">Photos</a></li>
                    <li><a href="#" className="no-activ">Posts</a></li>
                </ul>
            </div>
            <Post/>
        </div>
    );
}

export default Posts;