import "./Header.css";
import photo1 from "../../assests/undraw_book_reading_kx-9-s.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>welcome to React Crash Course</h1>
        <h1>Happy Hacking......</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          adipisci omnis eligendi neque veritatis reprehenderit doloribus
          distinctio, vero beatae rerum ut tenetur quos, autem earum numquam
          blanditiis sapiente et. Iusto?
        </p>
        <button>Join us</button>
      </div>
      <div id="header-right">
        <img src= {photo1} alt="" width= "800"  height= "500" />

      </div>
      
    </div>
  );
};

export default Header;
