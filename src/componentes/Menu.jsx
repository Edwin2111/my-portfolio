import { IoHome } from "react-icons/io5";
import { BiSolidUserAccount } from "react-icons/bi";
import { BiSolidContact } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa6";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import "../assets/css/menu.css";
import { Link } from "react-router-dom";

function Menu() {
    const StyleLi = "meli my-6 font-serif font-bold hover:text-xs md:hover:text-xl";
  return (
    <div className="backdrop-grayscale-0 bg-white/30 m-2 rounded-lg pr-1">
      <ul className="meul p-3 text-xs md:text-xl">
        <li className={StyleLi}>
          <Link to="/">
            <IoHome />
            Home
          </Link>
        </li>
        <li className={StyleLi}>
          <Link to="/biography">
            <BiSolidUserAccount />
            Biography
          </Link>
        </li>
        <li className={StyleLi}>
          <Link to="/knowledge">
            <FaLaptopCode />
            knowledge
          </Link>
        </li>
        {/* <li className={StyleLi}>
          <Link to="/aplications">
            <AiOutlineAppstoreAdd />
            Aplications
          </Link>
        </li> */}
        <li className={StyleLi}>
          <Link to="/contact">
            <BiSolidContact />
            Contact me
          </Link>
        </li>
      </ul>
      
    </div>
  );
}

export default Menu;
