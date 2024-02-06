import CSS from "./about.module.css";

let AboutInfo = () => {
  return (
    <div className={CSS["about-info"]}>
      <div className={CSS["name"]}>
        <h1>Dustin W.Stout</h1>
      </div>
      <div className={CSS["id"]}>
        <a href="#">@Drupers</a>
      </div>
      <div className={CSS["descript"]}>
        Всем привет, я Dustin W.Stout, начинающий web-programist
      </div>
      <div className={CSS["information"]}>
        📫 Russion <br />
        🙎‍♂️ Man <br />
        🎈 Родился: 12.02.2003 <br />
        🖼 Фотографий: 26
      </div>
      <div className={CSS["photos"]}>
        <div className={CSS["photos-wrapper"]}>
          <div className={CSS["img"]}>
            <img src="https://i2.wp.com/rosphoto.com/images/u/articles/1506/3-meaningfuless-co.jpg" />
          </div>
          <div className={CSS["img"]}>
            <img src="https://celes.club/uploads/posts/2022-05/1652558923_21-celes-club-p-khaker-anime-art-krasivo-21.jpg" />
          </div>
          <div className={CSS["img"]}>
            <img src="https://i.pinimg.com/originals/8d/27/19/8d2719c5098a209d9e8cccec6e71f093.jpg" />
          </div>
          <div className={CSS["img"]}>
            <img src="https://assets.gq.ru/photos/5d9f8c8e5055c50008287518/3:2/w_1600%2Cc_limit/a1a28d785a3bd8bdb173df7412daf80a88fb5617.jpeg" />
          </div>
          <div className={CSS["img"]}>
            <img src="https://i.pinimg.com/originals/8b/64/12/8b64122723391b24137c5b07e2a698c6.jpg" />
          </div>
          <div className={CSS["img"]}>
            <img src="https://i.pinimg.com/originals/ca/a9/8a/caa98a4fdc1059757cdb11ecaf0ae4f5.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
