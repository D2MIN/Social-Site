let Post = () => {
  return (
    <div className="post">
      <div className="post-head">
        <div className="avatar">
          <img src="http://coolsen.ru/wp-content/uploads/2021/06/54-3.jpg" />
        </div>
        <div className="name">Dustin W.Stout</div>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="img-wrapper">
          <img src="https://pro-dachnikov.com/uploads/posts/2021-11/1637793461_34-pro-dachnikov-com-p-chernika-kavkazskaya-foto-35.jpg" />
        </div>
      </div>
      <div className="likes">
        46 <button>❤️</button>
      </div>

      {/* TEST TEST TEST TEST */}
      <div className="post-head">
        <div className="avatar">
          <img src="http://coolsen.ru/wp-content/uploads/2021/06/54-3.jpg" />
        </div>
        <div className="name">Dustin W.Stout</div>
      </div>
      <div className="content">
        <p>
          Nuncaliquet bibendum enim facilisis gravida neque. Id interdum velit
          laoreet id donec ultrices tincidunt arcu.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <div className="likes">
        116 <button>❤️</button>
      </div>

      <div className="post-head">
        <div className="avatar">
          <img src="http://coolsen.ru/wp-content/uploads/2021/06/54-3.jpg" />
        </div>
        <div className="name">Dustin W.Stout</div>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi
          cras fermentum odio eu feugiat pretium.
        </p>
        <div className="img-wrapper">
          <img src="https://images.unsplash.com/photo-1706007171907-49841a64792a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDY2NDIzNTd8&ixlib=rb-4.0.3&q=80&w=1080" />
        </div>
      </div>
      <div className="likes">
        24 <button>❤️</button>
      </div>
    </div>
  );
};

export default Post;
