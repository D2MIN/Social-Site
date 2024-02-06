import Friend from "./Friend";

let Friends = ()=>{
    return(
        <div className="user-friends">
            <h2 className="title">Friends</h2>
            <Friend name="Andry" id="@AndR" src="https://i.pinimg.com/originals/9a/e0/2d/9ae02d4b4288396108ef77830a59e060.jpg"/>
            <Friend name="Robert" id="@85421" src="https://live.staticflickr.com/2807/13316204853_384e913114_b.jpg"/>
            <Friend name="Antony" id="@AnToNi" src="https://cdn1.ozone.ru/s3/multimedia-v/6450258367.jpg"/>
            <Friend name="Kris" id="@KristaSha" src="https://avatars.mds.yandex.net/i?id=520491f14aa71398e0551e6f9da7bb189d93dcd4-8208034-images-thumbs&ref=rim&n=33&w=300&h=200"/>
            <Friend name="Morty" id="@MortiNY" src="https://www.dhresource.com/0x0/f2/albu/g8/M01/89/5B/rBVaV113U9CAT-o0AAWiCfX2EJw978.jpg"/>
        </div>
    );
}

export default Friends;