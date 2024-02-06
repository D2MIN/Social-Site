import Post from "./Post";

let postsData = [
    {
      user_img: "http://coolsen.ru/wp-content/uploads/2021/06/54-3.jpg",
      name: "Dustin",
      post_title: "Hello all, it is my first post!",
      post_img: "none",
      likes: "230"
    },
    {
      user_img: "http://coolsen.ru/wp-content/uploads/2021/06/54-3.jpg",
      name: "Dustin",
      post_title:
        "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.",
      post_img: "https://s6.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2021/02/8lXRhVdc48SsU2fHxkV2bRvYDxw.jpg",
      likes: "196"
    },
    {
      user_img: "http://coolsen.ru/wp-content/uploads/2021/06/54-3.jpg",
      name: "Dustin",
      post_title:
        "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации",
      post_img: "https://w.forfun.com/fetch/aa/aa93df0edbed619424123b0f7a639f8f.jpeg",
      likes: "234"
    },
    {
      user_img: "http://coolsen.ru/wp-content/uploads/2021/06/54-3.jpg",
      name: "Dustin",
      post_title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Vel elit scelerisque mauris pellentesque pulvinar. Imperdiet proin fermentum leo vel orci porta non pulvinar. Nunc pulvinar sapien et ligula. Id leo in vitae turpis massa sed elementum tempus. Auctor elit sed vulputate mi sit. Varius morbi enim nunc faucibus a pellentesque sit. Pharetra massa massa ultricies mi quis. Sapien faucibus et molestie ac feugiat sed. Tellus cras adipiscing enim eu turpis egestas pretium. Nunc lobortis mattis aliquam faucibus purus.",
      post_img: "http://coolsen.ru/wp-content/uploads/2021/06/54-3.jpg",
      likes: "146"
    },
    {
      user_img: "http://coolsen.ru/wp-content/uploads/2021/06/54-3.jpg",
      name: "Dustin",
      post_title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce id. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. In ornare quam viverra orci. Pretium viverra suspendisse potenti nullam ac tortor. Eu turpis egestas pretium aenean pharetra magna ac. Felis imperdiet proin fermentum leo vel orci.",
      post_img: "none",
      likes: "345"
    },
    {
      user_img: "http://coolsen.ru/wp-content/uploads/2021/06/54-3.jpg",
      name: "Dustin",
      post_title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed lectus vestibulum. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Molestie nunc non blandit massa enim nec dui. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.",
      post_img: "none",
      likes: "234"
    }
  ];
  
  let posts = postsData.map(post_info =>
    <Post
      user_img={post_info.user_img}
      name={post_info.name}
      post_title={post_info.post_title}
      post_img={post_info.post_img}
      likes={post_info.likes}
    />
);

let AllPosts = ()=>{
    return(
        <div>
            {posts}
        </div>
    )
}

export default AllPosts;