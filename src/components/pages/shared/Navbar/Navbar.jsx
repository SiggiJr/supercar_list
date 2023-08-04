import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav>
      <ul>
        <li><h1>SuperCarlist</h1></li>
        <li><Link to={"/"}>Home</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;