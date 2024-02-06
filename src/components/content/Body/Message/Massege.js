import Chat from "./Chat.js";
import CSS from "./massege.module.css";

let messagesData = [
  {img: "https://i.pinimg.com/originals/9a/e0/2d/9ae02d4b4288396108ef77830a59e060.jpg", name:"Andry",massege:"Привет, сегодня свободен?"},
  {img: "https://live.staticflickr.com/2807/13316204853_384e913114_b.jpg", name:"Robert",massege:"Я съел чипсы."},
  {img: "https://cdn1.ozone.ru/s3/multimedia-v/6450258367.jpg", name:"Antony",massege:"мда"},
  {img: "https://avatars.mds.yandex.net/i?id=520491f14aa71398e0551e6f9da7bb189d93dcd4-8208034-images-thumbs&ref=rim&n=33&w=300&h=200", name:"Kris",massege:"Банк был успешно ограблен, но все деньги оказались фальшивыми."},
  {img: "https://www.dhresource.com/0x0/f2/albu/g8/M01/89/5B/rBVaV113U9CAT-o0AAWiCfX2EJw978.jpg", name:"Morty",massege:"В больнице мне понравилось."},
  {img: "https://bogatyr.club/uploads/posts/2023-06/1686894420_bogatyr-club-p-oboi-chelovek-instagram-67.jpg", name:"Kirill",massege:"Генератор уникальных фраз для SEO."},
  {img: "https://kartinki.pics/uploads/posts/2022-12/1672123878_kartinkin-net-p-smeshnie-rozhi-kartinki-pinterest-1.jpg", name:"Evgexa",massege:"Привет, когда выход будет?"},
  {img: "https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-chelovek-v-chb.jpg", name:"Timyr",massege:"На самом деле, они могут вернуться в любое время."},
  {img: "https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-chelovek-v-chb.jpg", name:"Timyr",massege:"На самом деле, они могут вернуться в любое время."},
  {img: "https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-chelovek-v-chb.jpg", name:"Timyr",massege:"На самом деле, они могут вернуться в любое время."},
  {img: "https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-chelovek-v-chb.jpg", name:"Timyr",massege:"На самом деле, они могут вернуться в любое время."},
  {img: "https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-chelovek-v-chb.jpg", name:"Timyr",massege:"На самом деле, они могут вернуться в любое время."},
  {img: "https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-chelovek-v-chb.jpg", name:"Timyr",massege:"На самом деле, они могут вернуться в любое время."},
  {img: "https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-chelovek-v-chb.jpg", name:"Timyr",massege:"На самом деле, они могут вернуться в любое время."},
  {img: "https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-chelovek-v-chb.jpg", name:"Timyr",massege:"На самом деле, они могут вернуться в любое время."},
  {img: "https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-chelovek-v-chb.jpg", name:"Timyr",massege:"На самом деле, они могут вернуться в любое время."},
  {img: "https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-chelovek-v-chb.jpg", name:"Timyr",massege:"На самом деле, они могут вернуться в любое время."},
];

let messages = messagesData.map(data => <Chat img={data.img} name={data.name} massege={data.massege}/>);

let Massege = props => {
  return (
    <div>
      <div className={CSS.header}>
        <div className={CSS.title}>Диалоги</div>
        <div className={CSS.search}>
          <input className="searchInput" placeholder="Поиск" />
          <button className="button">Найти</button>
        </div>
      </div>
      <div className="chat-wrapper">
        {messages}
      </div>
    </div>
  );
};
export default Massege;
