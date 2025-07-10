import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FOOD-DELIVERY-APP</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Help</li>
        <li>Search </li>
        <li>Cart </li>
      </ul>
    </nav>
  );
};

export default Navbar;
