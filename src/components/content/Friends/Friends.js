import Friend from "./Friend";

let Friends = ()=>{
    return(
        <div className="user-friends">
            <h2 className="title">Friends</h2>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
        </div>
    );
}

export default Friends;