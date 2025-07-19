import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FOOD BLOG</div>
      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/help">Help</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
