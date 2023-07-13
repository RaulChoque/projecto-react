import { Link } from "react-router-dom";

import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div>
        <div className={"containerNavbar"}>
          <Link to="/">
            <h4 className="logo">Hardware</h4>
          </Link>

          <ul className="categories">
            <li><Link to="/">Todas</Link></li>
            <li><Link to="/category/gabinetes">Gabinetes</Link></li>
            <li><Link to="/category/teclados">Teclados</Link></li>
          </ul>

          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
